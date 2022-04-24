import { Client } from '@notionhq/client';

const client = new Client({
  auth: process.env.NOTION_KEY,
});

export async function posts() {
  const myPosts = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });
  return myPosts;
}
