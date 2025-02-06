import { baseLocale, locales } from "$i18n/i18n-util.js";
import type { NoteMetadata } from "$lib/types/Notes";
import { error } from "@sveltejs/kit";

async function findAvailableLang(
	slug: string,
	lang: string,
): Promise<string | null> {
	const fallbackLanguages = locales.filter((l) => l !== lang);

	for (const lang of fallbackLanguages) {
		try {
			await import(`../../../../mdsvex/${slug}/${lang}.svx`);
			return lang;
		} catch (_) {
			// biome-ignore lint/correctness/noUnnecessaryContinue: <explanation>
			continue;
		}
	}

	return null;
}

export async function load({ params }) {
	const language = params.lang ?? baseLocale;

	// FIXME: I dont like this at all, needs refactor but its 1:37 AM
	try {
		const post = await import(
			`../../../../mdsvex/${params.slug}/${language}.svx`
		);
		const content = post.default;
		const metadata = post.metadata as NoteMetadata;

		return {
			note: {
				...metadata,
				content,
			},
		};
	} catch (error) {
		// Failed to find the requested language, try to find a fallback language
	}

	const fallbackLang = await findAvailableLang(params.slug, language);

	if (fallbackLang) {
		const post = await import(
			`../../../../mdsvex/${params.slug}/${fallbackLang}.svx`
		);
		const content = post.default;
		const metadata = post.metadata as NoteMetadata;

		return {
			note: {
				...metadata,
				content,
			},
		};
	}

	throw error(404, "Not found");
}
