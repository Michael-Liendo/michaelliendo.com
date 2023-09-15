import { NOTION_PROJECTS_DATABASE_ID } from '$env/static/private';
import { client } from '../Client';
import { pageToProjectTransformer } from './objectTransformer';

export async function getProjects() {
  const database = NOTION_PROJECTS_DATABASE_ID;

  const response = await client.databases.query({
    database_id: database,
  });

  return Promise.all(
    response.results.map((res) => {
      return pageToProjectTransformer(res);
    }),
  );
}
