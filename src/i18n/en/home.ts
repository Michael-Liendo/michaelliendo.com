import type { HomeContent } from "$lib/types/Home";

const link = (href: string, label: string) =>
	`<a href="${href}" class="link-underline">${label}</a>`;

export default {
	email: "hello@michaelliendo.com",
	hero: {
		role: "Full stack developer",
		ctaPrimary: "Get in touch",
		ctaSecondary: "See my work",
		stats: [
			{ value: "~4 yrs", label: "of TypeScript in production" },
			{ value: "7 h → 2 min", label: "first reply with my WhatsApp bot" },
			{ value: "430+", label: "students use Tizza" },
		],
		headlineStart: "I build software people use every day: ",
		headlineEm: "shops, schools and small teams.",
		headlineEnd: "",
		paragraphs: [
			"I'm Michael, a full stack developer in Caracas. I build React interfaces, Node.js APIs, Ionic mobile apps and, lately, a lot of AI wired into WhatsApp. I care more about the real people on the other side than about the tech I use to help them.",
		],
		photoAlt: "Photo of Michael Liendo",
		emailLabel: "Email",
		location: "Caracas, Venezuela",
		availability: "open to freelance projects",
	},
	labels: {
		now: "Right now",
		work: "Selected work",
		experience: "Experience",
		how: "How I work",
		languages: "Languages",
		frameworks: "Frameworks",
		tech: "Tools",
		spoken: "Spoken",
		notes: "Notes",
		allProjects: "All projects",
		allNotes: "All notes",
	},
	nowHtml: [
		`I'm building ${link("https://engrana.ai", "Engrana")}, a WhatsApp sales agent for shops: it answers from the real catalog, quotes, collects payment, logs the order and pings the owner when a human is needed.`,
		`I'm still the developer behind ${link("https://tizza.app", "Tizza")}, a platform to study math, physics and chemistry with an AI tutor.`,
		`And I'm taking on a few freelance automation and web projects. If you have one, ${link("#contacto", "write to me")}.`,
	],
	featured: [
		{
			logo: "/images/nqln-icon.png",
			title: "Necesitas Bot",
			meta: "Tech lead · Vitrina Online · 2025–2026",
			body: "A WhatsApp customer service platform for several retail brands. The bot understands text, voice notes and photos, checks stock in Shopify and Odoo, validates payments and hands the conversation to a person when it isn't sure.",
			metrics: [
				{ value: "7 h → 2 min", label: "first reply to customers" },
				{ value: "10 → 2–3", label: "people on the chat team" },
				{ value: "US$2,100+", label: "estimated monthly savings" },
			],
			stack: "TypeScript, Node.js (Fastify), React 19, PostgreSQL, OpenAI, Gemini",
			link: { href: "https://www.nqlnstore.com/", label: "nqlnstore.com" },
			chat: {
				avatar: "/images/nqln-icon.png",
				name: "NQLN · Store assistant",
				status: "online",
				typing: "typing…",
				messages: [
					{ from: "customer", time: "9:41", text: "Hi, do you have this bag in black?" },
					{ from: "customer", time: "9:41", attachment: "photo.jpg" },
					{
						from: "bot",
						time: "9:41",
						text: "Hi! Yes, we have it in black and there are 4 left. Shipping or store pickup?",
					},
					{
						from: "customer",
						time: "9:43",
						text: "Ship it to Maracay. I already sent the mobile payment.",
					},
					{
						from: "bot",
						time: "9:43",
						text: "Received and validated. Your order ships tomorrow with MRW, I'll send you the tracking number.",
					},
				],
				caption:
					"Simulated conversation with the bot · reads photos, validates payments and creates the order",
			},
		},
		{
			logo: "/images/tizza-icon.png",
			title: "Tizza",
			meta: "Lead developer · 2025–present",
			body: "A platform to study science with an AI tutor that answers from the course material. I built it alone, end to end: web, iOS and Android, with schools, roles, subscriptions and a teacher dashboard. More than 430 students use it today.",
			metrics: [
				{ value: "430+", label: "active students" },
				{ value: "3", label: "platforms: web, iOS and Android" },
				{ value: "1", label: "developer, end to end" },
			],
			stack: "React, Ionic, Capacitor, Fastify, PostgreSQL, Gemini (RAG)",
			link: { href: "https://tizza.app", label: "tizza.app" },
			image: {
				src: "/images/tizza.jpg",
				alt: "Tizza screen: a student solving a math exercise with the AI tutor",
				width: 1470,
				height: 786,
			},
		},
	],
	more: [
		{
			name: "Engrana",
			description: "My SaaS: a multi-tenant WhatsApp sales agent for shops.",
			meta: "Own product · 2026",
			href: "https://engrana.ai",
		},
		{
			name: "La Victoria",
			description:
				"WhatsApp bot and cash-flow dashboard with bank reconciliation. I led two developers; operations went from 9 people to 2.",
			meta: "Tech lead · 2025",
		},
		{
			name: "Soluciones JM",
			description:
				"Next.js ERP for a US client: inventory, purchasing, sales and accounting.",
			meta: "Frontend lead · 2024–2025",
		},
		{
			name: "Petch",
			description: "Pet care mobile app with maps and an Express backend.",
			meta: "Mobile · 2023–2025",
			href: "https://petch.ai",
		},
		{
			name: "Astral Insights",
			description: "Supplier reports in Power BI with ChatGPT summaries.",
			meta: "Freelance · 2025",
			href: "https://astralinsights.ai/",
		},
		{
			name: "Highball",
			description:
				"Run Windows games on Apple Silicon, with an open compatibility database.",
			meta: "Open source · 2026",
			href: "https://github.com/Michael-Liendo/highball",
		},
		{
			name: "Contapp",
			description: "Open source multi-company accounting app.",
			meta: "Side project",
			href: "https://contapp.michaelliendo.com/",
		},
	],
	experience: [
		{
			role: "Tech lead, automation & AI",
			org: "Vitrina Online",
			period: "2025–2026",
		},
		{ role: "Lead developer", org: "Tizza", period: "2025–present" },
		{ role: "Tech lead (freelance)", org: "La Victoria", period: "2025" },
		{
			role: "Frontend lead",
			org: "Soluciones JM (US)",
			period: "2024–2025",
		},
		{ role: "Mobile & backend developer", org: "Petch", period: "2023–2025" },
	],
	experienceBefore:
		"Before that: AI chat frontend for Oriencoop (Chile), reporting for Astral Insights (US) and the Colegio Domingo Savio website. I learned on Platzi and freeCodeCamp, and I keep learning by building.",
	how: [
		"I'd rather understand the problem before opening the editor. I show progress every week, write code someone else can maintain, and say early when something won't go as planned.",
		"Day to day it's TypeScript: React and Next.js on the frontend, Node.js with Fastify and PostgreSQL on the backend, Ionic and Capacitor for mobile, and OpenAI or Gemini when AI actually helps. I connect it all to Shopify, Odoo, WhatsApp Business, Make or n8n. For my own experiments, sometimes Rust and Svelte.",
	],
	languages: [
		{
			icon: "/icons/typescript-original.svg",
			name: "TypeScript",
			description: "My default language, from frontend to API.",
			badge: "~4 yrs",
		},
		{
			icon: "/icons/javascript-original.svg",
			name: "JavaScript",
			description: "Browser, Node and tooling.",
			badge: "~4 yrs",
		},
		{
			icon: "/icons/postgresql-original.svg",
			name: "SQL",
			description: "PostgreSQL with migrations and hand-written queries.",
			badge: "3+ yrs",
		},
		{
			icon: "/icons/rust-original.svg",
			name: "Rust",
			description: "Open source projects and CLIs.",
			badge: "open source",
		},
	],
	frameworks: [
		{
			icon: "/icons/react-original.svg",
			name: "React & Next.js",
			description: "Dashboards, ERPs and SSR/ISR sites.",
			badge: "3+ yrs",
		},
		{
			icon: "/icons/ionic-original.svg",
			name: "Ionic & Capacitor",
			description: "iOS and Android apps from a single codebase.",
			badge: "2+ yrs",
		},
		{
			icon: "/icons/nodejs-original.svg",
			name: "Node.js, Fastify & Express",
			description: "REST APIs, webhooks and background jobs.",
			badge: "3+ yrs",
		},
		{
			icon: "/icons/svelte-original.svg",
			name: "SvelteKit",
			description: "This site, Engrana and lightweight apps.",
			badge: "2+ yrs",
		},
	],
	tech: [
		{
			name: "PostgreSQL",
			description: "Transactional data with Knex and Drizzle.",
		},
		{
			name: "OpenAI & Gemini",
			description: "Multimodal models, RAG and tool calling.",
		},
		{
			name: "WhatsApp & Shopify",
			description: "Conversations wired to orders and inventory.",
		},
		{
			name: "Odoo, Make & n8n",
			description: "Integrations and automations between systems.",
		},
		{
			name: "Docker & Git",
			description: "Reproducible environments and code review.",
		},
		{
			name: "AWS S3, Firebase & Vercel",
			description: "Files, notifications and deployments.",
		},
	],
	spoken: [
		{ name: "Spanish", level: "Native", note: "My everyday working language." },
		{
			name: "English",
			level: "B2",
			note: "I read docs and write fluently; I work well asynchronously.",
		},
	],
	contact: {
		title:
			"Got an idea, or a process that eats your time? I'd love to hear about it.",
		bodyHtml:
			"Tell me what you want to solve and I'll reply with an honest approach, rough timelines and whether I'm the right person for it.",
		emailCta: "Send me an email",
		whatsappCta: "WhatsApp",
		reply: "I reply within a day.",
	},
} satisfies HomeContent;
