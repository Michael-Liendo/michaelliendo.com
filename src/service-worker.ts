/**
 * The `build` global variable holds all the files from the bundle and
 * the `files` global variable holds all the files in the "static" directory.
 */

/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

const CACHE_KEY = `michaelliendo-dotcom-${version}`;
const staticAssets = new Set(build.concat(files));
const worker = self as unknown as any;

worker.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE_KEY)
			.then((cache) => cache.addAll(Array.from(staticAssets) as RequestInfo[]))
			.then(() => worker.skipWaiting())
	);
});

worker.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then(async (keys) => {
			for (const key of keys) {
				if (key !== CACHE_KEY) {
					await caches.delete(key);
				}
			}

			worker.clients.claim();
		})
	);
});

async function fetchAndCache(request: Request) {
	const cache = await caches.open(CACHE_KEY);

	try {
		const response = await fetch(request);

		cache.put(request, response.clone());

		return response;
	} catch (err) {
		const response = await cache.match(request);

		if (response) {
			return response;
		}

		throw err;
	}
}

worker.addEventListener('fetch', (event) => {
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
		return;
	}

	const url = new URL(event.request.url);
	const isHttp = url.protocol.startsWith('http');
	const isDevServerRequest =
		url.hostname === self.location.hostname && url.port !== self.location.port;
	const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
	const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

	if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
		event.respondWith(
			(async () => {
				const cachedAsset = isStaticAsset && (await caches.match(event.request));

				return cachedAsset || fetchAndCache(event.request);
			})()
		);
	}
});
