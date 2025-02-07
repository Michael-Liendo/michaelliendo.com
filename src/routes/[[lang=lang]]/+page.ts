import { baseLocale } from "$i18n/i18n-util.js";
import type { NoteMetadata } from "$lib/types/Notes.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const locale = params.lang ?? baseLocale;
	const modules = import.meta.glob("../../mdsvex/**/*.svx");

	const notes = (
		await Promise.all(
			Object.entries(modules).map(async ([path, resolver]) => {
				const { metadata } = (await resolver()) as { metadata: NoteMetadata };

				const slugMatch = path.match(/([\w-]+)(?=\/[\w-]+\.)/);
				const langMatch = path.match(/(?<=\/)\w+(?=\.)/);

				if (!langMatch || langMatch[0] !== locale) return null;

				return { slug: slugMatch?.[1] ?? null, ...metadata };
			}),
		)
	).filter((note) => note !== null);

	notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { notes };
}
