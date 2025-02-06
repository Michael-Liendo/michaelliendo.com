import type { NoteMetadata } from "$lib/types/Notes.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
	const modules = import.meta.glob("../../../mdsvex/**/*.svx");
	const promises = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const promise = resolver().then((note) => {
			const { metadata } = note as { metadata: NoteMetadata };
			const slug = path.match(/([\w-]+)(\.)/i)?.[1] ?? null;

			return {
				slug,
				...metadata,
			};
		});

		promises.push(promise);
	}

	const notes = await Promise.all(promises);
	const sorted = notes.sort((a, b) =>
		+new Date(a.date) > +new Date(b.date) ? -1 : 1,
	);

	return {
		notes: sorted,
	};
}
