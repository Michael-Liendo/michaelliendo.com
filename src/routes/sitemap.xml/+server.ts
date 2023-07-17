// src/routes/sitemap.xml/+server.ts

import { getNotes } from '$lib/utils/Notion/Notes';

export async function GET() {
	const routes = await generateRoutes();

	const urlset = routes
		.map((route) => {
			return `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${new Date(__BUILD_DATE__).toISOString()}</lastmod>
          <priority>${route.priority}</priority>
        </url>
      `;
		})
		.join('\n');

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlset}
    </urlset>
  `;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

async function generateRoutes() {
	const domain = 'https://michaelliendo.com';
	const notesSlugs = await getNotes('en');

	const paths = [
		{ path: '/en', priority: '1.00' },
		{ path: '/es', priority: '1.00' },
		{ path: '/en/notes', priority: '0.90' },
		{ path: '/es/notes', priority: '0.90' }
	];

	const allRoutes: { url: string; priority: string }[] = [];

	// for each route
	paths.forEach((url) => {
		allRoutes.push({ url: `${domain}${url.path}`, priority: url.priority });
	});

	notesSlugs.forEach(({ slug }) => {
		allRoutes.push({ url: `${domain}/en/notes/${slug}`, priority: '0.70' });
	});

	notesSlugs.forEach(({ slug }) => {
		allRoutes.push({ url: `${domain}/es/notes/${slug}`, priority: '0.70' });
	});

	return allRoutes;
}
