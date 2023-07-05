import type { BaseTranslation } from '../i18n-types';

const en = {
	LAYOUT: {
		NAV: {
			HOME: 'Home',
			NOTES: 'Notes'
		},
		FOOTER: {
			COPYRGHT: `Made by Michael Liendo © {start:number} - {end:number}`,
			SOURCE_CODE: 'Source Code'
		}
	},
	HOMEPAGE: {
		HI: `Hi I'm {name:string} {surname:string},`,
		ABOUT: `I'm a Software Developer focused on React and TypeScript with a passion for Web Development. I enjoy working on challenging projects and value collaboration and problem-solving.`,
		LATEST_NOTES: 'Latest Notes'
	}
} satisfies BaseTranslation;

export default en;
