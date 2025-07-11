import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: [".svelte", ".svx"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: "./src/lib/components/notes/Layout.svelte",
			extensions: [".svx"],
		}),
	],
	kit: {
		alias: {
			$i18n: "./src/i18n",
			"$i18n/*": "./src/i18n/*",
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
	},
};

export default config;
