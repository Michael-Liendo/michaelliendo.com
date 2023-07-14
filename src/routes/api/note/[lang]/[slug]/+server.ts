import type { Locales } from '$i18n/i18n-types.js';
import { getSingleNotes } from '$lib/utils/Notion/Notes/getSingleNote.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const note = await getSingleNotes(params.lang as Locales, params.slug);

	return new Response(JSON.stringify(note), { status: 200 });
}
