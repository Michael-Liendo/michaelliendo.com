// src/routes/sitemap.xml/+server.ts

import { Service } from '$lib/services';

export async function GET() {
  const routes = await generateRoutes();

  const urlset = routes
    .map((route) => {
      return `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${
            route.date?.toISOString() ?? new Date(__BUILD_DATE__).toISOString()
          }</lastmod>
          <priority>${route.priority}</priority>
        </url>
      `;
    })
    .join('\n');

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
      'Content-Type': 'application/xml',
    },
  });
}

async function generateRoutes() {
  const domain = 'https://michaelliendo.com';
  const notesSlugsEn = await Service.Notion.Notes.getNotes('en');
  const notesSlugsEs = await Service.Notion.Notes.getNotes('en');

  const paths = [
    { path: '/', priority: '1.00' },
    { path: '/notes', priority: '0.90' },
    { path: '/projects', priority: '0.90' },

    { path: '/en', priority: '1.00' },
    { path: '/en/notes', priority: '0.90' },
    { path: '/en/projects', priority: '0.90' },
  ];

  const allRoutes: { url: string; priority: string; date?: Date }[] = [];

  // for each route
  paths.forEach((url) => {
    allRoutes.push({ url: `${domain}${url.path}`, priority: url.priority });
  });

  notesSlugsEs.forEach(({ slug, date }) => {
    allRoutes.push({
      url: `${domain}/notes/${slug}`,
      priority: '0.70',
      date: new Date(date),
    });
  });

  notesSlugsEn.forEach(({ slug, date }) => {
    allRoutes.push({
      url: `${domain}/en/notes/${slug}`,
      priority: '0.70',
      date: new Date(date),
    });
  });

  return allRoutes;
}
