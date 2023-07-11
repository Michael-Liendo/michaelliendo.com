import { getNotes } from '$lib/utils/Notion/Notes';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const notes = await getNotes();

	return new Response(JSON.stringify(notes), { status: 200 });
}
