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

export async function getPublishedBlogPosts(locale = 'es') {
  const database = databaseID[locale];
  // list blog posts
  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Updated',
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

export async function getSingleBlogPost(locale = 'es', url) {
  const database = databaseID[locale];

  // list of blog posts
  const response = await client.databases.query({
    database_id: database,
    sorts: [
      {
        property: 'Updated',
        direction: 'descending',
      },
    ],
  });

  let filter = response.results.filter(
    (res) => res.properties.Url.rich_text[0].plain_text === url,
  );

  if (!filter[0]) {
    throw 'No results available';
  }

  const page = filter[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const post = await pageToPostTransformer(page);
  const markdown = n2m.toMarkdownString(mdBlocks);

  return {
    post,
    markdown,
  };
}

export async function getProjects() {
  const database = process.env.NOTION_PROJECTS_DATABASE_ID ?? '';

  const response = await client.databases.query({
    database_id: database,
    sorts: [
      {
        property: 'Updated',
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

export async function pageToPostTransformer(page) {
  let cover = page.properties.cover;

  if (cover.url) {
    cover = page.properties.cover.url;
  } else {
    // default cover
    cover = 'https://cdn.michaelliendo.com/blog/cover/default.png';
  }

  return {
    id: page.id,
    cover: cover,
    title: page.properties.Name.title[0].plain_text,
    tags: page.properties.Tags.multi_select,
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties.Updated.last_edited_time,
    url: page.properties.Url.rich_text[0].plain_text,
  };
}
