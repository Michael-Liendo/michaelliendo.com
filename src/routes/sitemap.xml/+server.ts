// src/routes/sitemap.xml/+server.ts

import { SITE_ORIGIN } from "$lib/seo/site";
import type { NoteMetadata } from "$lib/types/Notes";

export const prerender = true;

/** Last meaningful update of the static pages; bump when their content changes. */
const PAGES_UPDATED = "2026-10-14";

interface SitemapEntry {
	/** Path without locale prefix, e.g. "/notes". */
	path: string;
	priority: string;
	changefreq: "weekly" | "monthly" | "yearly";
	lastmod: string;
	/** Locales this path exists in. */
	locales: ("es" | "en")[];
}

const localizedUrl = (lang: "es" | "en", path: string) =>
	lang === "es"
		? `${SITE_ORIGIN}${path}`
		: `${SITE_ORIGIN}/en${path === "/" ? "" : path}`;

export async function GET() {
	const entries = await generateEntries();

	const urls = entries.flatMap((entry) =>
		entry.locales.map((lang) => {
			const alternates =
				entry.locales.length > 1
					? [
							...entry.locales.map(
								(alt) =>
									`<xhtml:link rel="alternate" hreflang="${alt}" href="${localizedUrl(alt, entry.path)}"/>`,
							),
							`<xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl("es", entry.path)}"/>`,
						].join("")
					: "";

			return `<url><loc>${localizedUrl(lang, entry.path)}</loc><lastmod>${entry.lastmod}</lastmod><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority}</priority>${alternates}</url>`;
		}),
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "max-age=0, s-maxage=3600",
		},
	});
}

async function generateEntries(): Promise<SitemapEntry[]> {
	const modules = import.meta.glob("../../mdsvex/**/*.svx");

	const notes = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: NoteMetadata };

			const slugMatch = path.match(/([\w-]+)(?=\/[\w-]+\.)/);
			const langMatch = path.match(/(?<=\/)\w+(?=\.)/);

			return {
				slug: slugMatch?.[1] ?? "",
				date: metadata.date,
				lang: langMatch?.[0] as "es" | "en",
			};
		}),
	);

	const both: ("es" | "en")[] = ["es", "en"];
	const entries: SitemapEntry[] = [
		{ path: "/", priority: "1.0", changefreq: "monthly", lastmod: PAGES_UPDATED, locales: both },
		{ path: "/projects", priority: "0.8", changefreq: "monthly", lastmod: PAGES_UPDATED, locales: both },
		{ path: "/notes", priority: "0.7", changefreq: "monthly", lastmod: PAGES_UPDATED, locales: both },
	];

	// Group translations of the same note so they reference each other.
	const bySlug = new Map<string, { locales: ("es" | "en")[]; date: string }>();
	for (const note of notes) {
		const current = bySlug.get(note.slug) ?? { locales: [], date: note.date };
		current.locales.push(note.lang);
		bySlug.set(note.slug, current);
	}

	for (const [slug, { locales, date }] of bySlug) {
		entries.push({
			path: `/notes/${slug}`,
			priority: "0.6",
			changefreq: "yearly",
			lastmod: new Date(date).toISOString().slice(0, 10),
			locales: locales.sort(),
		});
	}

	return entries;
}
