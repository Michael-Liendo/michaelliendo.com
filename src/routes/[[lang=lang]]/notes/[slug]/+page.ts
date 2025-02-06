import { locales } from "$i18n/i18n-util.js";
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
	// FIXME: I dont like this at all, needs refactor but its 1:37 AM
	try {
		const post = await import(
			`../../../../mdsvex/${params.slug}/${params.lang}.svx`
		);
		const content = post.default;

		return {
			content,
		};
	} catch (error) {
		// Failed to find the requested language, try to find a fallback language
	}

	const language = params.lang as string;
	const fallbackLang = await findAvailableLang(params.slug, language);

	if (fallbackLang) {
		const post = await import(
			`../../../../mdsvex/${params.slug}/${fallbackLang}.svx`
		);
		const content = post.default;

		return {
			content,
		};
	}

	throw error(404, "Not found");
}
