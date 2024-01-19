import { NOTION_PROJECTS_DATABASE_ID } from '$env/static/private';
import { client } from '../Client';
import { pageToProjectTransformer } from '../objectTransformer';
import type { ProjectResponse } from './project';

export class Projects {
  static async getProjects() {
    const database = NOTION_PROJECTS_DATABASE_ID;

    const response = await client.databases.query({
      database_id: database,
      sorts: [
        {
          property: 'created',
          direction: 'descending',
        },
      ],
    });

    return Promise.all(
      response.results.map((res) => {
        return pageToProjectTransformer(res as ProjectResponse);
      }),
    );
  }
}
