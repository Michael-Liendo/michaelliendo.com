import type { Note } from '$lib/utils/Notion/Notes/types.js';

export const ssr = false;

export async function load({ params, fetch }) {
	try {
		const request = await fetch(`/api/note/${params.lang}/${params.slug}`);
		const note = await request.json();

		return {
			note: note.note as Note,
			markdown: note.markdown as { parent: string }
		};
	} catch (error) {
		const request = await fetch(`/api/note/${params.lang}/${params.slug}`);
		const post = await request.json();

		return {
			note: post.note as Note,
			markdown: post.markdown as { parent: string }
		};
	}
}
