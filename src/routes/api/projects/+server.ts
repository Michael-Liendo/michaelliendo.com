import { Service } from '$lib/services';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const projects = await Service.Notion.Projects.getProjects();

  return new Response(JSON.stringify(projects), { status: 200 });
}
