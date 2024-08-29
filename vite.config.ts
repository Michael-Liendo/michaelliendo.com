import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(+new Date()),
  },
  plugins: [
    sveltekit(),
    enhancedImages(),
    Icons({
      compiler: 'svelte',
    }),
  ],
});
