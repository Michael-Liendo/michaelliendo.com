import type { Project } from "$lib/types/Project";

/** Favicon-sized logo via Google’s favicon service (by site domain). */
const icon = (domain: string) =>
	`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;

export default [
	{
		name: "Necesitas Bot",
		role: "Tech Lead — AI & automation · Vitrina Online C.A.",
		description:
			"Retail customer automation on WhatsApp: Fastify + PostgreSQL, React 19 admin, payment portal, and shared Zod schemas end to end. Integrates Callbell, Shopify (catalog through fulfillment), and multimodal AI (OpenAI, Gemini). In production: payment validation (incl. Banesco), FX, couriers, cart and conversation lifecycle, multi-tenant prompts. Built and owned the platform solo.",
		preview_url: "https://www.nqlnstore.com/",
		image_url: icon("nqlnstore.com"),
		tags: [
			"typescript",
			"node.js",
			"react",
			"postgresql",
			"shopify",
			"whatsapp",
			"ai",
		],
		date: "2025-11-01",
		period: "Nov 2025 – Present · 5 mos",
		featured: true,
	},
	{
		name: "Tizza",
		role: "Lead Software Engineer",
		description:
			"AI-assisted STEM learning for students, teachers, and schools. TypeScript monorepo: Ionic + React + Vite, Fastify + PostgreSQL, shared Zod schemas. Adaptive study (flashcards, quizzes), RAG tutoring with Gemini File Search, and teacher flows—orgs, classes, eval plans from natural language. Also Capacitor, auth, S3, Astro marketing site. Own APIs, AI guardrails, observability, and UI end to end.",
		preview_url: "https://tizza.app",
		image_url: icon("tizza.app"),
		tags: [
			"typescript",
			"react",
			"ionic",
			"fastify",
			"postgresql",
			"ai",
			"education",
		],
		date: "2025-11-01",
		period: "Nov 2025 – Present · 5 mos",
		featured: true,
	},
	{
		name: "La Victoria — Reports",
		role: "Software Engineer / Tech Lead · Freelance",
		description:
			"WhatsApp AI assistant wired to an admin hub for cash flow, payment checks, and user control—multichannel instances (sales, ops, supervision), live verification of transactions, RBAC, balances, reconciliation, receipts, and bulk statement import. Led technical design, backlog, and a three-developer team through delivery.",
		tags: [
			"full-stack",
			"ai",
			"whatsapp",
			"fintech",
			"typescript",
		],
		date: "2025-06-01",
		period: "Jun 2025 – Aug 2025 · 3 mos",
		featured: true,
	},
	{
		name: "Contapp",
		role: "Personal project — full stack",
		description:
			"Web accounting app in TypeScript: multiple companies, chart of accounts, journal entries, and financial reports including trial balance with Excel export.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		preview_url: "https://contapp.michaelliendo.com/",
		tags: ["react", "fastify", "typescript", "accounting"],
		date: "2025-02-10",
		featured: true,
	},
	{
		name: "Petch",
		role: "Mobile engineer — Ionic/React & Express · Full-time & freelance",
		description:
			"Pet-care product at petch.ai. Full-time (Sep 2023–Aug 2024): Ionic/React mobile UI, Google Maps, and features on Express.js and MongoDB. Follow-up freelance sprint (Mar 2025): front-end and back-end improvements on the same stack.",
		preview_url: "https://petch.ai",
		image_url: icon("petch.ai"),
		tags: ["react", "ionic", "express", "mongodb", "mobile"],
		date: "2025-03-01",
		period: "Sep 2023 – Aug 2024 · 1 yr full-time; Mar 2025 · 1 mo freelance",
		featured: true,
	},
	{
		name: "Astral Insights",
		role: "Software developer — Power BI & AI reporting · Freelance",
		description:
			"TypeScript data processor for supplier performance inside Power BI: total orders, on-time delivery, average lead time, defect rate, and risk score. ChatGPT for narrative summaries and text-to-speech so stakeholders can listen to analyses in executive and ops settings.",
		preview_url: "https://astralinsights.ai/",
		image_url: icon("astralinsights.ai"),
		tags: ["typescript", "power bi", "ai", "analytics"],
		date: "2025-02-01",
		period: "Feb 2025 · 1 mo",
		featured: true,
	},
	{
		name: "Soluciones JM",
		role: "Lead frontend developer — Next.js · Full-time",
		description:
			"Integrated management system with Next.js for accounting and admin: inventory, purchasing, sales, and finance with a clear UI. SSR/ISR for performance, API integration for sync, modular structure for scale.",
		tags: ["next.js", "typescript", "erp", "react"],
		date: "2024-08-01",
		period: "Aug 2024 – Feb 2025 · 7 mos",
		featured: true,
	},
	{
		name: "Oriencoop",
		role: "Frontend developer — AI chat (Svelte) · Freelance",
		description:
			"Svelte frontend for a real-time AI assistant on policies, procedures, and products: responsive UI, auth and chat integration, reusable components, typing indicators and suggested replies, navigation gated by authentication.",
		preview_url: "https://www.oriencoop.cl/",
		image_url: icon("oriencoop.cl"),
		tags: ["svelte", "ai", "api", "frontend"],
		date: "2024-12-01",
		period: "Dec 2024 – Jan 2025 · 2 mos",
		featured: true,
	},
	{
		name: "TownHall",
		description:
			"A collaborative Rust learning project: we’re building a community platform inspired by Reddit and X (Twitter)—hands-on practice from beginner to intermediate level.",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["rust", "leptos", "community"],
		date: "2024-11-05",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"CLI that normalizes URLs from an input file, checks HTTP status codes, and writes results to an output file.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["rust", "cli", "http"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"Chat app where users create rooms and invite others—real-time messaging and room lifecycle.",
		repo_url: "https://github.com/Michael-Liendo/underground",
		preview_url: "https://underground.michaelliendo.com/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-12-10",
	},
	{
		name: "Backust",
		description:
			"Small Rust utility to copy files and directories into a backup folder—filesystem-focused side project.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["rust", "cli", "backup"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description:
			"SvelteKit e-commerce: browse categories, cart, and checkout—TypeScript throughout.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		preview_url: "https://cherrie.lat/",
		tags: ["svelte", "typescript", "sveltekit", "e-commerce"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"Marketing landing for a dev studio with contact section—Next.js and TypeScript.",
		repo_url: "https://github.com/Michael-Liendo/novabits",
		preview_url: "https://novabits.michaelliendo.com/",
		tags: ["next.js", "typescript", "landing"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"Personal cloud storage concept: upload, sync, and share files with a SvelteKit UI.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["svelte", "typescript", "sveltekit", "cloud"],
		date: "2022-10-01",
	},
	{
		name: "U.E. Colegio Domingo Savio",
		role: "Frontend web developer · Part-time",
		description:
			"Routing, page layout, and wiring a JavaScript API into the school’s public site.",
		preview_url: "https://uedomingosavio.edu.ve/",
		image_url: icon("uedomingosavio.edu.ve"),
		tags: ["javascript", "html", "css"],
		date: "2022-10-01",
		period: "Oct 2022 – Dec 2022 · 3 mos",
	},
] satisfies Project[];
