import type { BaseTranslation } from "../i18n-types";

const en = {
	SEO: {
		TITLE: "Michael Liendo | Software Developer",
		DESCRIPTION:
			"Michael Liendo — software developer focused on React, TypeScript, mobile apps, backends and web. Technical notes on engineering, Svelte and tooling. Open to collaboration; contact hello@michaelliendo.com.",
		KEYWORDS:
			"michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving",
		IMAGE: "https://avatars.githubusercontent.com/u/70660410?v=4",
		NOTES: {
			TITLE: "Notes | Michael Liendo",
			DESCRIPTION:
				"Articles and tutorials by Michael Liendo on software engineering, Git, React Native, Expo, TypeScript, SvelteKit and developer workflows — practical notes from real projects.",
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
			DESCRIPTION:
				"Selected software projects by Michael Liendo: open source, web and mobile work built with modern stacks. Links to demos and repositories.",
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
		HERO_HEADLINE: "I'm Michael Liendo, a Software Developer",
		HERO_LEAD:
			"Focused on React, TypeScript, mobile apps, backends and the web. I like tough problems, clear collaboration and shipping maintainable software.",
		LOCATION: "Remote",
		TIMEZONE: "UTC−5",
		STACK_TITLE: "Core stack",
		ABOUT: `I'm a <strong>Software Developer</strong> focused on React.js and TypeScript with a passion for <strong>Development of Mobile Applications, Servers, AI, Automations and Web Pages</strong>. I enjoy working on challenging projects, value collaboration and problem-solving.`,
		CTA_LABEL:
			"Are you interested in working with me or collaborating on a project? hello@michaelliendo.com",
		CTA_BUTTON: "Contact me",
		LATEST_NOTES: "Latest Notes",
	},
	NOTES: {
		NOTES: "Notes",
		DESCRIPTION:
			"I write down thoughts and solutions on Software Engineering topics.",
		READ_MORE: "Read more",
		READ_NOTE: "Read note",
	},
	PROJECTS: {
		PROJECTS: "Projects",
		DESCRIPTION: "Projects I've worked on.",
		LIVE_SITE: "Visit site",
		SOURCE_CODE: "Source code",
	},
} satisfies BaseTranslation;

export default en;
