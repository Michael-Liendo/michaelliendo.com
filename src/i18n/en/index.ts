import type { BaseTranslation } from "../i18n-types";

const en = {
	SEO: {
		TITLE: "Michael Liendo | Software Developer",
		DESCRIPTION:
			"Michael Liendo builds web and mobile software with React and TypeScript, plus AI-powered automations that help teams move faster with less busywork. Technical notes and projects. hello@michaelliendo.com",
		KEYWORDS:
			"michael liendo, software developer, react, typescript, ai, automation, web development, mobile apps, backend, productivity, collaboration",
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
		HERO_HEADLINE: "I'm Michael Liendo — I build software that removes busywork",
		HERO_LEAD:
			"React, TypeScript, mobile apps, and backends—with AI and automations where they actually make day-to-day work easier for teams and businesses. I thrive on hard problems, straight talk, and code that still makes sense a year from now.",
		LOCATION: "Remote",
		TIMEZONE: "UTC−5",
		STACK_TITLE: "Core stack",
		ABOUT: `I'm a <strong>software developer</strong> focused on React and TypeScript. I build <strong>web and mobile apps, backends, AI integrations, and automations</strong> so people spend less time on manual tasks and more on work that matters. I like demanding projects, clear teamwork, and fixing root causes—not symptoms.`,
		CTA_LABEL:
			"New product, AI, or need to automate a workflow? Email hello@michaelliendo.com",
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
		DESCRIPTION:
			"Recent product, AI, and full-stack work; below that, open source, learning projects, and earlier pieces.",
		FEATURED: "Selected work",
		MORE: "More projects",
		LIVE_SITE: "Visit site",
		SOURCE_CODE: "Source code",
	},
} satisfies BaseTranslation;

export default en;
