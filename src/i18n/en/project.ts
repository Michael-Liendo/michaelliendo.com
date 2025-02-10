import type { Project } from "$lib/types/Project";

export default [
	{
		name: "Contapp",
		description:
			"Web-based accounting application built with TypeScript, designed to manage multiple companies, maintain account plans, record journal entries, and generate financial reports such as trial balances with Excel export functionality.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		preview_url: "https://contapp.michaelliendo.com/",
		tags: ["svelte", "fastify", "typescript", "sveltekit", "accounting"],
		date: "2025-02-10",
	},
	{
		name: "TownHall",
		description:
			"Is collaborative project for novice-to-intermediate Rust developers. We’re learning-by-doing together, in the making of a community platform modeled after the likes of Reddit space oriented and X (formerly Twitter) microblogging platform.",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["rust", "leptos", "community"],
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
