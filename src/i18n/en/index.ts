import type { BaseTranslation } from "../i18n-types";

const en = {
	SEO: {
		TITLE: "Michael Liendo | Software Developer",
		DESCRIPTION:
			"A Software Developer interested in Systems Programming and Web Development.",
		KEYWORDS:
			"michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving",
		IMAGE: "https://avatars.githubusercontent.com/u/70660410?v=4",
		NOTES: {
			TITLE: "Notes | Michael Liendo",
			DESCRIPTION: "Notes on learnings and experiences",
			KEYWORDS:
				"michael liendo, notes, learnings, experiences, svelte, typescript, web development, collaboration, problem-solving",
		},
		NOTE: {
			TITLE: "{title:string} | Notes of Michael Liendo",
			DESCRIPTION: "{description:string}",
			KEYWORDS: "{keywords:string}",
		},
		PROJECT: {
			TITLE: "Projects | Michael Liendo",
			DESCRIPTION: "Projects I've worked on",
			KEYWORDS:
				"michael liendo, projects, software developer, svelte, typescript, web development, collaboration, problem-solving",
		},
	},
	LAYOUT: {
		NAV: {
			HOME: "Home",
			NOTES: "Notes",
			PROJECTS: "Projects",
		},
		FOOTER: {
			COPYRIGHT:
				"Made with ❤️ by Michael Liendo © {startYear:number} - {currentYear:number}",
		},
	},
	HOMEPAGE: {
		HI: `Hi I'm {name:string} {surname:string},`,
		ABOUT: `I'm a <strong>Software Developer</strong> focused on Svelte and TypeScript with a passion for <strong>Mobile Development and Websites</strong>. I enjoy working on challenging projects, value collaboration and problem-solving.`,
		LATEST_NOTES: "Latest Notes",
	},
	NOTES: {
		NOTES: "Notes",
		DESCRIPTION: "Notes on learnings, bookmark and experiences",
		READ_MORE: "Read more",
	},
	PROJECTS: {
		PROJECTS: "Projects",
		DESCRIPTION: "Projects I've worked on.",
	},
} satisfies BaseTranslation;

export default en;
