import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const client = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: client });

export async function getPublishedBlogPosts() {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
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

  return response.results.map((res) => {
    return pageToPostTransformer(res);
  });
}

export async function getSingleBlogPost(slug) {
  let post, markdown;

  const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';

  // list of blog posts
  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: 'Slug',
      formula: {
        text: {
          equals: slug, // slug
        },
      },
      // add option for tags in the future
    },
    sorts: [
      {
        property: 'Updated',
        direction: 'descending',
      },
    ],
  });

  if (!response.results[0]) {
    throw 'No results available';
  }

  // grab page from notion
  const page = response.results[0];

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  markdown = n2m.toMarkdownString(mdBlocks);
  post = pageToPostTransformer(page);

  return {
    post,
    markdown,
  };
}

export async function pageToPostTransformer(page) {
  let cover = page.cover;
  switch (cover) {
    case 'file':
      cover = page.cover.file;
      break;
    case 'external':
      cover = page.cover.external.url;
      break;
    default:
      // Add default cover image if you want...
      cover = '';
  }

  return {
    id: page.id,
    cover: cover,
    title: page.properties.Name.title[0].plain_text,
    tags: page.properties.Tags.multi_select,
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties.Updated.last_edited_time,
    slug: page.properties.Slug.formula.string,
  };
}
