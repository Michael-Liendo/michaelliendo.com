import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	define: {
		__BUILD_DATE__: JSON.stringify(+new Date())
	},
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
});
