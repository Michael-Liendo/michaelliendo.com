import type { BaseTranslation } from '../i18n-types';

const en = {
  LAYOUT: {
    NAV: {
      HOME: 'Home',
      NOTES: 'Notes',
      PROJECTS: 'Projects',
    },
    FOOTER: {
      COPYRIGHT: 'Made with ❤️ by Michael Liendo © {startYear:number} - {year:number}',
    },
  },
  HOMEPAGE: {
    HI: `Hi I'm {name:string} {surname:string},`,
    ABOUT: `I'm a <strong>Software Developer</strong> focused on Svelte and TypeScript with a passion for <strong>Mobile Development and Websites</strong>. I enjoy working on challenging projects, value collaboration and problem-solving.`,
    LATEST_NOTES: 'Latest Notes',
  },
} satisfies BaseTranslation;

export default en;
