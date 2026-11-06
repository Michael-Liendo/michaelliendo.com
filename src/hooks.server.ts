import type { Locales } from "$i18n/i18n-types";
import { baseLocale, detectLocale, i18n, isLocale } from "$i18n/i18n-util";
import { loadAllLocales } from "$i18n/i18n-util.sync";

import type { Handle, RequestEvent } from "@sveltejs/kit";
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors";

loadAllLocales();
const L = i18n();

/** Old note slug → current slug. Both languages share the slug. */
const MOVED_NOTES: Record<string, string> = {
	"esm-cjs-librery": "esm-vs-cjs-typescript-monorepo",
	"automatizar-pagos-whatsapp-9-a-3-personas":
		"automatizar-pagos-whatsapp-12-a-3-personas",
};

/** Notes from the previous site that no longer exist; they go to the notes list. */
const RETIRED_NOTES = new Set([
	"tips-cover-letter",
	"life-lessons",
	"an-elvis-telis-story",
	"how-to-apply-color-palette-to-design",
]);

/** Note slugs that exist today, to map the old /blog/<slug> URLs onto /notes/<slug>. */
const NOTE_SLUGS = new Set(
	Object.keys(import.meta.glob("/src/mdsvex/*/es.svx")).map(
		(path) => path.split("/")[3],
	),
);

export const handle: Handle = async ({ event, resolve }) => {
	// Avoid duplicate Spanish URLs: /es/* and /* serving same content.
	if (event.url.pathname === "/es" || event.url.pathname.startsWith("/es/")) {
		const pathname = event.url.pathname.replace(/^\/es(?=\/|$)/, "") || "/";
		const url = new URL(event.url.toString());
		url.pathname = pathname;

		return Response.redirect(url, 308);
	}

	// The automations page was removed; keep its indexed URLs pointing somewhere useful.
	const removedPage = event.url.pathname.match(/^(\/en)?\/automations\/?$/);
	if (removedPage) {
		return Response.redirect(new URL(removedPage[1] || "/", event.url), 301);
	}

	// Notes moved to a new slug.
	const movedNote = event.url.pathname.match(/^(\/en)?\/notes\/([\w-]+)\/?$/);
	const newSlug = movedNote && MOVED_NOTES[movedNote[2]];
	if (newSlug) {
		const target = `${movedNote[1] ?? ""}/notes/${newSlug}`;
		return Response.redirect(new URL(target, event.url), 301);
	}
	if (movedNote && RETIRED_NOTES.has(movedNote[2])) {
		return Response.redirect(
			new URL(`${movedNote[1] ?? ""}/notes`, event.url),
			301,
		);
	}

	// The previous site kept notes under /blog; its /blog/michael-liendo page was the about page.
	const oldBlog = event.url.pathname.match(/^(\/en)?\/blog(?:\/([\w-]+))?\/?$/);
	if (oldBlog) {
		const prefix = oldBlog[1] ?? "";
		const slug = oldBlog[2];
		const target =
			slug === "michael-liendo"
				? prefix || "/"
				: slug && NOTE_SLUGS.has(slug)
					? `${prefix}/notes/${slug}`
					: `${prefix}/notes`;
		return Response.redirect(new URL(target, event.url), 301);
	}

	// read language slug
	const [, lang] = event.url.pathname.split("/");

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : baseLocale;
	const LL = L[locale];

	// bind locale and translation functions to current request
	event.locals.locale = locale;
	event.locals.LL = LL;

	// replace html lang attribute with correct language
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", locale),
	});
};

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};
