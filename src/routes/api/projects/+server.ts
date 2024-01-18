import { getProjects } from '$lib/utils/Notion/Notes';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const projects = await getProjects();

  return new Response(JSON.stringify(projects), { status: 200 });
}
