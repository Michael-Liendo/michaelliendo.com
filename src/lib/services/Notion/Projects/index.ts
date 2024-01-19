import { NOTION_PROJECTS_DATABASE_ID } from '$env/static/private';
import { client } from '../Client';
import { pageToProjectTransformer } from '../objectTransformer';

export class Projects {
  static async getProjects() {
    const database = NOTION_PROJECTS_DATABASE_ID;

    const response = await client.databases.query({
      database_id: database,
    });

    console.log(response.results);

    return Promise.all(
      response.results.map((res) => {
        return pageToProjectTransformer(res);
      }),
    );
  }
}
