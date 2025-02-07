import type { Project } from "$lib/types/Project";
import type { BaseTranslation } from "../i18n-types";

const projects = [
	{
		name: "TownHall",
		description:
			"Is collaborative project for novice-to-intermediate Rust developers. We’re learning-by-doing together, in the making of a community platform modeled after the likes of Reddit space oriented and X (formerly Twitter) microblogging platform.",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["rust", "community"],
		date: "2024-11-05",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"cleans URLs from an input file and verifies their status codes. Cleaned URLs and their status codes are stored in an output file.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["rust", "url", "status"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"This is a chat application that allows users to create chat rooms and invite others to join.",
		repo_url: "https://github.com/Michael-Liendo/underground",
		preview_url: "https://underground.michaelliendo.com/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-12-10",
	},
	{
		name: "Backust",
		description:
			"A simple backup system for copy files and directories to a backup directory.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description:
			"This project is a virtual store developed with SvelteKit and TypeScript. In the store, users can browse different product categories, add products to their cart, and complete a purchase.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		preview_url: "https://cherrie.lat/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "store"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"The landing page for a development business with contact section",
		repo_url: "https://github.com/Michael-Liendo/novabits",
		preview_url: "https://novabits.michaelliendo.com/",
		tags: ["nextjs", "typescript", "landing"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"Personal cloud storage that allows you to store, synchronize and share your files securely and accessible from anywhere.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["svelte", "typescript", "sveltekit", "cloud"],
		date: "2022-10-01",
	},
] satisfies Project[];

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
	PROJECT: {
		TITLE: "Projects | Michael Liendo",
		DESCRIPTION: "Projects I've worked on",
		KEYWORDS:
			"michael liendo, projects, software developer, svelte, typescript, web development, collaboration, problem-solving",
		PROJECTS: projects,
	},
} satisfies BaseTranslation;

export default en;
