import type { BaseTranslation } from "../i18n-types";

const en = {
	SEO: {
		TITLE: "Michael Liendo · Developer in Venezuela | AI WhatsApp Bots",
		DESCRIPTION:
			"Full stack developer in La Guaira, Venezuela. I automate customer service on WhatsApp with AI and build custom web and mobile apps with TypeScript, React and Node.js.",
		KEYWORDS:
			"michael liendo, full stack developer venezuela, remote typescript developer, whatsapp automation, ai whatsapp bot, custom software development, react developer, node.js developer, freelance developer latam",
		IMAGE: "https://michaelliendo.com/og/home-en.png",
		NOTES: {
			TITLE: "Development notes | Michael Liendo",
			DESCRIPTION:
				"Tutorials and notes by Michael Liendo on Git, TypeScript, React Native, Expo and SvelteKit, written from real projects.",
			KEYWORDS:
				"michael liendo, notes, learnings, experiences, svelte, typescript, web development, collaboration, problem-solving",
		},
		NOTE: {
			TITLE: "{title:string} | Notes of Michael Liendo",
			DESCRIPTION: "{description:string}",
			KEYWORDS: "{keywords:string}",
		},
		PROJECT: {
			TITLE: "Projects and case studies | Michael Liendo",
			DESCRIPTION:
				"Projects by Michael Liendo: AI WhatsApp bots for retail, an education platform with an AI tutor, Next.js ERPs, Ionic mobile apps and open source tools in Rust.",
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
