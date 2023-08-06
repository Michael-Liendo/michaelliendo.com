import type { Note } from '$lib/utils/Notion/Notes/types.js';


/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const res = await fetch(`/api/notes/${params.lang}`);

	if (res.ok) {
		const notes = await res.json();

		return {
			notes: notes as Note[]
		};
	}

	return {
		notes: []
	};
}
