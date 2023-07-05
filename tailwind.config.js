/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: {
					background: '#BBBBBB',
					'background-alt': '#e8e8e8'
				},
				dark: {
					background: '#0D0A12',
					'background-alt': '#16101D'
				}
			}
		}
	},
	plugins: []
};
