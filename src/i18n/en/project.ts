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
	},
	{
		name: "Contapp",
		description:
			"Web-based accounting application built with TypeScript, designed to manage multiple companies, maintain account plans, record journal entries, and generate financial reports such as trial balances with Excel export functionality.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		preview_url: "https://contapp.michaelliendo.com/",
		tags: ["react", "fastify", "typescript", "accounting"],
		date: "2025-02-10",
	},
	{
		name: "Petch",
		role: "Mobile & backend developer · Freelance",
		description:
			"Front-end and back-end work on the pet-care product: new features and improvements across the stack (Express.js, MongoDB, React).",
		preview_url: "https://petch.ai",
		image_url: icon("petch.ai"),
		tags: ["react", "express", "mongodb", "mobile"],
		date: "2025-03-01",
		period: "Mar 2025 · 1 mo",
	},
	{
		name: "Astral Insights",
		role: "Software developer — Power BI & AI reporting · Freelance",
		description:
			"Built a TypeScript data processor for supplier performance reporting inside Power BI: metrics such as total orders, on-time delivery, average lead time, defect rate, and risk score. Integrated ChatGPT for narrative summaries and a text-to-speech module so analyses can be listened to in executive and operational settings.",
		preview_url: "https://astralinsights.ai/",
		image_url: icon("astralinsights.ai"),
		tags: ["typescript", "power bi", "ai", "analytics"],
		date: "2025-02-01",
		period: "Feb 2025 · 1 mo",
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
		name: "Soluciones JM",
		role: "Lead frontend developer — Next.js · Full-time",
		description:
			"Developed an integrated management system with Next.js to streamline accounting and administrative processes: modules for inventory, purchasing, sales, and finance with a clear, efficient UI. Used SSR/ISR for performance, API integration for data sync, and a modular structure for scalability.",
		tags: ["next.js", "typescript", "erp", "react"],
		date: "2024-08-01",
		period: "Aug 2024 – Feb 2025 · 7 mos",
	},
	{
		name: "Oriencoop",
		role: "Frontend developer — AI chat (Svelte) · Freelance",
		description:
			"Designed and built the Svelte frontend for a real-time AI assistant about company policies, procedures, and products: responsive UI, backend integration for auth and chat, reusable components, typing indicators and suggested replies, and navigation gated by authentication.",
		preview_url: "https://www.oriencoop.cl/",
		image_url: icon("oriencoop.cl"),
		tags: ["svelte", "ai", "api", "frontend"],
		date: "2024-12-01",
		period: "Dec 2024 – Jan 2025 · 2 mos",
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
		name: "Petch",
		role: "Mobile application developer · React + Ionic · Full-time",
		description:
			"Pet-care app: implemented the Ionic/React UI (screens, look and feel), integrated APIs such as Google Maps, and shipped features alongside Express.js and MongoDB on the backend.",
		preview_url: "https://petch.ai",
		image_url: icon("petch.ai"),
		tags: ["react", "ionic", "express", "mongodb", "mobile"],
		date: "2023-09-01",
		period: "Sep 2023 – Aug 2024 · 1 yr",
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
	{
		name: "U.E. Colegio Domingo Savio",
		role: "Frontend web developer · Part-time",
		description:
			"Responsible for routing, page layout, and integrating data from a JavaScript API for display on the school’s web pages.",
		preview_url: "https://uedomingosavio.edu.ve/",
		image_url: icon("uedomingosavio.edu.ve"),
		tags: ["javascript", "html", "css"],
		date: "2022-10-01",
		period: "Oct 2022 – Dec 2022 · 3 mos",
	},
] satisfies Project[];
