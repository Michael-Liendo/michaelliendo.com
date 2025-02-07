// src/routes/sitemap.xml/+server.ts

import type { NoteMetadata } from "$lib/types/Notes";

export async function GET() {
	const routes = await generateRoutes();

	const urlset = routes
		.map((route) => {
			return `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${
						route.date?.toISOString() ?? new Date("2025-02-01").toISOString()
					}</lastmod>
          <priority>${route.priority}</priority>
        </url>
      `;
		})
		.join("\n");

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${urlset}
    </urlset>
  `;

	return new Response(sitemap.trim(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}

async function generateRoutes() {
	const domain = "https://michaelliendo.com";

	const modules = import.meta.glob("../../mdsvex/**/*.svx");

	const notes = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: NoteMetadata };

			const slugMatch = path.match(/([\w-]+)(?=\/[\w-]+\.)/);
			const langMatch = path.match(/(?<=\/)\w+(?=\.)/);

			return {
				slug: slugMatch?.[1] ?? null,
				...metadata,
				lang: langMatch?.[0],
			};
		}),
	);

	const paths = [
		{ path: "/", priority: "1.00" },
		{ path: "/notes", priority: "0.90" },
		{ path: "/projects", priority: "0.70" },

		{ path: "/en", priority: "1.00" },
		{ path: "/en/notes", priority: "0.90" },
		{ path: "/en/projects", priority: "0.70" },

		{ path: "/es", priority: "0.50" },
		{ path: "/es/notes", priority: "0.40" },
		{ path: "/es/projects", priority: "0.30" },
	];

	const allRoutes: { url: string; priority: string; date?: Date }[] = [];

	// for each route
	for (const url of paths) {
		allRoutes.push({ url: `${domain}${url.path}`, priority: url.priority });
	}

	for (const { slug, date } of notes.filter((note) => note.lang === "es")) {
		allRoutes.push({
			url: `${domain}/notes/${slug}`,
			priority: "0.80",
			date: new Date(date),
		});
	}

	for (const { slug, date } of notes.filter((note) => note.lang === "en")) {
		allRoutes.push({
			url: `${domain}/en/notes/${slug}`,
			priority: "0.80",
			date: new Date(date),
		});
	}

	return allRoutes;
}
