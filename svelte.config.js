import path from "node:path";
import { fileURLToPath } from "node:url";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: [".svelte", ".svx"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: path.join(
				__dirname,
				"src/lib/components/notes/Layout.svelte",
			),
			extensions: [".svx"],
		}),
	],
	kit: {
		alias: {
			$i18n: "./src/i18n",
			"$i18n/*": "./src/i18n/*",
		},
		// Deployed on Cloudflare; build and deploy run from the Cloudflare dashboard (Git integration).
		// See https://svelte.dev/docs/kit/adapter-cloudflare
		adapter: adapter(),
	},
};

export default config;
