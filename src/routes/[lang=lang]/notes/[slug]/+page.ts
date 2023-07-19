import type { Note } from '$lib/utils/Notion/Notes/types.js';
import { error } from '@sveltejs/kit';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	try {
		const request = await fetch(`/api/note/${params.lang}/${params.slug}`);
		const note = await request.json();

		if (!note.note) {
			throw error(404, {
				message: 'Not found'
			});
		}

		return {
			note: note.note as Note,
			markdown: note.markdown as { parent: string }
		};
	} catch (err) {
		throw error(404, {
			message: 'Not found'
		});
	}
}
