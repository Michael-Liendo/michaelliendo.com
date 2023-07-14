import type { Locales } from '$i18n/i18n-types.js';
import { getNotes } from '$lib/utils/Notion/Notes';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const notes = await getNotes(params.lang as Locales);

	return new Response(JSON.stringify(notes), { status: 200 });
}
