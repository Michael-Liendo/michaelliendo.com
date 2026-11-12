import type { Project } from "$lib/types/Project";

export default [
	{
		name: "Venfy",
		role: "Own product",
		description:
			"Turns any computer into a smart TV for YouTube that you control from your phone: open venfy.app/tv, link the YouTube app with a code and cast the way you would to a TV. Nothing to install, no account, with a shared queue for several phones and a web remote. In English, Spanish and Portuguese.",
		preview_url: "https://venfy.app",
		tags: ["Web", "YouTube", "Real time", "Own product"],
		date: "2026-10-08",
		period: "Oct 2026",
		featured: true,
		priority: 6,
	},
	{
		name: "Visitalo",
		role: "Full stack",
		description:
			"PropTech platform for Venezuela: 3D property tours made with a phone and buyer pre-qualification before the visit. Monorepo with SvelteKit, Fastify, Drizzle and PostgreSQL, 37+ endpoints and Google sign-in.",
		preview_url: "https://visitalo.app",
		tags: ["PropTech", "Real estate", "Web"],
		date: "2026-04-02",
		featured: true,
		priority: 7,
	},
	{
		name: "Enrola",
		role: "In development",
		description:
			"Loyalty program for businesses with the card in Apple Wallet and Google Wallet: stamps, points and tiers. Customers join with a link, staff add points by scanning a QR code, and the pass updates itself on the phone.",
		tags: ["Loyalty", "Apple Wallet", "Google Wallet"],
		date: "2026-06-10",
	},
	{
		name: "Soccer League Scheduler",
		role: "Personal project",
		description:
			"App to run a local soccer cup: a public calendar with standings, top scorers and cards; an admin panel to record results live with a clock per match; and a planner that builds the fixtures and spreads out the rests. Built for a three-a-side cup in Naiguatá.",
		repo_url: "https://github.com/Michael-Liendo/soccer-league-scheduler",
		tags: ["SvelteKit", "SQLite", "Open source"],
		date: "2026-10-06",
	},
	{
		name: "MSFS 2024 on Apple Silicon",
		role: "Research",
		description:
			"A documented attempt to run Microsoft Flight Simulator 2024 on an M4 MacBook: I changed the translation chain to D3D12 → Vulkan → Metal and cleared the Shader Model 6.7 wall. It boots and renders, but isn't playable yet. Includes patches and probes for anyone who wants to continue.",
		repo_url: "https://github.com/Michael-Liendo/msfs2024-apple-silicon",
		tags: ["C", "Graphics", "Apple Silicon", "Open source"],
		date: "2026-08-30",
	},
	{
		name: "Gatekeeper Editorial 30X",
		role: "Finalist · 30X Hackathon · Team DevGain",
		description:
			"AI editorial filter that decides in milliseconds whether each piece of content goes out and, if not, fixes it on its own. JEV (TypeSafe) answers 12 questions per piece, the code applies the brand's policy, the AI fixes what fails and JEV checks it again. 1,000 decisions in 4.5 s, 80–87% accuracy, 42% resolved without a person and 0 risky pieces approved on their own. The same engine segments sign-ups for the sales team. Built in 48 hours with Haron Acosta.",
		preview_url: "https://gatekeeper-30x.michaelliendo.com",
		repo_url: "https://github.com/Michael-Liendo/gatekeeper-30x",
		tags: ["AI", "Hackathon", "Next.js", "Open source"],
		date: "2026-10-18",
		period: "Oct 2026 · 48 hours",
		featured: true,
		priority: 5,
	},
	{
		name: "Engrana AI",
		role: "Founder · Own product",
		description:
			"AI sales agent for the WhatsApp of shops in Venezuela: it answers with the shop's catalog and prices, quotes in bolívares at the BCV rate, sends the Pago Móvil details and leaves the order noted in a dashboard. Built on the official WhatsApp API. I build it, set it up and support it myself.",
		preview_url: "https://engrana.ai/",
		image_url: "/images/logos/engrana.png",
		tags: ["SaaS", "WhatsApp", "AI", "Venezuela"],
		date: "2026-06-01",
		period: "Jun 2026 – Present",
		featured: true,
		priority: 4,
	},
	{
		name: "Necesitas Bot",
		role: "Tech lead · Vitrina Online",
		description:
			"AI customer service on WhatsApp for an online store: first reply went from 7 hours on average, and up to a week, to ~2 minutes, at any hour. Handles payments, shipping and catalog for five brands.",
		preview_url: "https://www.nqlnstore.com/",
		image_url: "/images/nqln-icon.png",
		tags: ["WhatsApp", "AI", "Shopify", "Payments", "E-commerce"],
		date: "2025-11-01",
		period: "Nov 2025 – Present · 5 mos",
		featured: true,
		priority: 1,
	},
	{
		name: "Tizza",
		role: "Lead developer",
		description:
			"An AI study platform for math, physics and chemistry, used by 430+ students. I built it solo for web, iOS and Android, with an AI tutor, quizzes and tools for teachers.",
		preview_url: "https://tizza.app",
		image_url: "/images/tizza-icon.png",
		tags: ["AI", "Education", "Mobile app", "Web"],
		date: "2025-11-01",
		period: "Nov 2025 – Present · 5 mos",
		featured: true,
		priority: 3,
	},
	{
		name: "La Victoria — Reports",
		role: "Tech lead · Freelance",
		description:
			"A WhatsApp AI assistant that checks payments and tracks cash flow in real time: operations went from 12 people to 3 while serving twice as many customers, with US$2,700 less in payroll every month for about US$150 a month in AI. I led 2 developers through delivery.",
		tags: ["WhatsApp", "AI", "Payments", "Automation"],
		date: "2025-06-01",
		period: "Jun 2025 – Aug 2025 · 3 mos",
		featured: true,
		priority: 2,
	},
	{
		name: "Contapp",
		role: "Personal project",
		description:
			"Browser-based accounting for one or more companies: chart of accounts, journal entries, financial reports and Excel export.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		tags: ["Accounting", "Web", "Open source"],
		date: "2025-02-10",
		featured: true,
		priority: 12,
	},
	{
		name: "Petch",
		role: "Mobile developer · Full-time & freelance",
		description:
			"A pet-care app. For a year I built the mobile app, with built-in maps, and the system behind it; later I came back for a freelance sprint of improvements.",
		preview_url: "https://petch.ai",
		image_url: "/images/logos/petch.png",
		tags: ["Mobile app", "Pets", "Maps"],
		date: "2025-03-01",
		period: "Sep 2023 – Aug 2024 · 1 yr full-time; Mar 2025 · 1 mo freelance",
		featured: true,
		priority: 8,
	},
	{
		name: "Astral Insights",
		role: "Developer · Freelance",
		description:
			"Supplier reports in Power BI: on-time delivery, lead times, defects and risk in one place, with AI-written summaries you can also listen to out loud.",
		preview_url: "https://astralinsights.ai/",
		image_url: "/images/logos/astral-insights.png",
		tags: ["Power BI", "AI", "Reporting"],
		date: "2025-02-01",
		period: "Feb 2025 · 1 mo",
		featured: true,
		priority: 11,
	},
	{
		name: "Soluciones JM",
		role: "Frontend lead · Full-time",
		description:
			"A management system to run inventory, purchasing, sales and finance from one clear interface, built to grow with the business.",
		image_url: "/images/logos/soluciones-jm.png",
		tags: ["Management system", "Inventory", "Web"],
		date: "2024-08-01",
		period: "Aug 2024 – Feb 2025 · 7 mos",
		featured: true,
		priority: 9,
	},
	{
		name: "Oriencoop",
		role: "Frontend developer · Freelance",
		description:
			"The interface for a cooperative's AI assistant: it answers questions about products, policies and procedures in real time, with a personal sign-in for each user.",
		preview_url: "https://www.oriencoop.cl/",
		image_url: "/images/logos/oriencoop.png",
		tags: ["AI", "Chatbot", "Web"],
		date: "2024-12-01",
		period: "Dec 2024 – Jan 2025 · 2 mos",
		featured: true,
		priority: 10,
	},
	{
		name: "TownHall",
		description:
			"A team project to learn Rust: a community platform in the style of Reddit and X, for beginner to intermediate developers.",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["Rust", "Open source", "Community"],
		date: "2024-11-05",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"A terminal tool that checks a list of links and records which ones work and which ones fail.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["Rust", "Terminal", "Open source"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"A chat app with user-created rooms, invite-only access and real-time messages.",
		repo_url: "https://github.com/Michael-Liendo/underground-chat",
		tags: ["Chat", "Real time", "Open source"],
		date: "2023-12-10",
	},
	{
		name: "Backust",
		description:
			"A small utility that copies files and folders into a backup folder.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["Rust", "Backups", "Open source"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description: "An online store with categories, a cart and checkout.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		tags: ["E-commerce", "Web", "Open source"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"A landing page for a software studio, with a contact section.",
		preview_url: "https://novabits.vercel.app",
		tags: ["Landing page", "Web", "Open source"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"A personal cloud concept to upload, sync and share files.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["Storage", "Web", "Open source"],
		date: "2022-10-01",
	},
	{
		name: "U.E. Colegio Domingo Savio",
		role: "Web developer · Part-time",
		description:
			"The school's public website: page structure, layout and connection to its data.",
		preview_url: "https://uedomingosavio.edu.ve/",
		tags: ["Website", "Education"],
		date: "2022-10-01",
		period: "Oct 2022 – Dec 2022 · 3 mos",
	},
] satisfies Project[];
