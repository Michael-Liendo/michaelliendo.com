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

  return Promise.all(
    response.results.map((res) => {
      return pageToPostTransformer(res);
    }),
  );
}

export async function getSingleBlogPost(url) {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';

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

export async function getAboutMe() {
  const database = process.env.NOTION_ABOUT_ME_DATABASE_ID ?? '';

  const response = await client.databases.query({
    database_id: database,
  });
  const page = response.results[0];

  if (!page) {
    throw 'No results available';
  }

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks);

  return {
    markdown,
  };
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
