import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const client = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: client });

const databaseID = {
  es: process.env.NOTION_BLOG_DATABASE_ID_ES,
  en: process.env.NOTION_BLOG_DATABASE_ID_EN,
};

export async function getPublishedBlogPosts(locale = 'en') {
  const database = databaseID[locale];
  // list blog posts
  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'created',
        direction: 'descending',
      },
    ],
  });

  return Promise.all(
    response.results.map((res) => {
      return pageToPostTransformer(res);
    }),
  );
}

export async function getSingleBlogPost(locale = 'en', url) {
  const database = databaseID[locale];

  const response = await client.databases.query({
    database_id: database,
    filter: { property: 'url', rich_text: { equals: url } },
  });

  if (response.results.length < 1) {
    return {
      notFound: true,
    };
  }

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const post = await pageToPostTransformer(page);
  const markdown = n2m.toMarkdownString(mdBlocks);

  return {
    post,
    markdown,
    notFound: false,
  };
}

export async function getProjects() {
  const database = process.env.NOTION_PROJECTS_DATABASE_ID ?? '';

  const response = await client.databases.query({
    database_id: database,
  });

  return Promise.all(
    response.results.map((res) => {
      return pageToProjectTransformer(res);
    }),
  );
}

export function pageToProjectTransformer(project) {
  return {
    id: project.id,
    title: project.properties.name.title[0].plain_text,
    tags: project.properties.tags.multi_select,
    description: project.properties.description.rich_text[0].plain_text,
    repository: project.properties.repository.url,
    preview: project.properties.preview.url,
  };
}

export async function pageToPostTransformer(post) {
  let time = new Date(post.properties.created.date.start).toLocaleDateString(
    'en',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return {
    id: post.id,
    cover: post.cover?.external?.url || post.cover?.file?.url || null,
    title: post.properties.name.title[0].plain_text,
    tags: post.properties.tags.multi_select,
    description: post.properties.description.rich_text[0].plain_text,
    date: time,
    url: post.properties.url.rich_text[0].plain_text,
  };
}
