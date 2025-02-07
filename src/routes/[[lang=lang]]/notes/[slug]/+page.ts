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
		} catch (_) {}
	}

	return null;
}

async function loadPost(slug: string, lang: string) {
	const post = await import(`../../../../mdsvex/${slug}/${lang}.svx`);
	const content = post.default;
	const metadata = post.metadata as NoteMetadata;

	return {
		note: {
			...metadata,
			content,
		},
	};
}

export async function load({ params }) {
	const language = params.lang ?? baseLocale;

	try {
		return await loadPost(params.slug, language);
	} catch (err) {
		// Failed to load the requested language, will attempt fallback
	}

	const fallbackLang = await findAvailableLang(params.slug, language);

	if (fallbackLang) {
		return await loadPost(params.slug, fallbackLang);
	}

	throw error(404, "Not found");
}
