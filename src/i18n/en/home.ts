import type { HomeContent } from "$lib/types/Home";

export default {
	email: "hello@michaelliendo.com",
	hero: {
		availability: "Available for freelance work · Caracas, Venezuela",
		headlineStart: "I automate customer service on WhatsApp and build ",
		headlineHighlight: "the software your business needs.",
		lead: "I'm Michael, a full stack developer. AI bots, internal dashboards and web and mobile apps for shops, schools and small teams.",
		ctaPrimary: "Message me on WhatsApp",
		ctaSecondary: "See case studies",
		trustedLabel: "Trusted by",
	},
	clients: [
		{ name: "NQLN", logo: "/images/nqln-icon.png" },
		{ name: "Tizza", logo: "/images/tizza-icon.png" },
		{ name: "La Victoria" },
		{ name: "Soluciones JM" },
		{ name: "Petch" },
		{ name: "Oriencoop" },
	],
	cases: {
		label: "Case studies",
		title: "Measurable results, not just pretty screens.",
		items: [
			{
				tag: "NQLN · Retail",
				logo: "/images/nqln-icon.png",
				title: "From 7 hours to 2 minutes to answer every customer.",
				body: "A WhatsApp bot that understands text, voice notes and photos, checks stock in Shopify and Odoo and validates payments. When it isn't sure, it hands the conversation to a person.",
				metrics: [
					{ value: "2 min", label: "first reply" },
					{ value: "10→3", label: "people on chat" },
					{ value: "$2,100", label: "saved per month" },
				],
				link: { href: "https://www.nqlnstore.com/", label: "nqlnstore.com" },
				chat: {
					name: "NQLN Store",
					status: "online",
					messages: [
						{ from: "customer", text: "Hi, do you have this bag in black?" },
						{
							from: "bot",
							text: "Hi! Yes, there are 4 left. Shipping or store pickup?",
						},
						{
							from: "customer",
							text: "Ship it to Maracay. I already sent the payment.",
						},
						{
							from: "bot",
							text: "Received and validated. Your order ships tomorrow.",
						},
					],
				},
			},
			{
				tag: "Tizza · Education",
				logo: "/images/tizza-icon.png",
				title: "An AI tutor already used by 430+ students.",
				body: "A platform to study math, physics and chemistry. I built it alone, end to end: web, iOS and Android, with schools, roles and a teacher dashboard.",
				metrics: [
					{ value: "430+", label: "students" },
					{ value: "3", label: "platforms" },
				],
				link: { href: "https://tizza.app", label: "tizza.app" },
				image: {
					src: "/images/tizza.webp",
					alt: "Tizza screen: a student solving an exercise with the AI tutor",
					width: 1470,
					height: 786,
				},
			},
		],
		more: [
			{
				name: "La Victoria",
				description:
					"WhatsApp bot and cash-flow dashboard with bank reconciliation. Operations went from 9 people to 3: about US$1,200 less in payroll a month.",
				meta: "Tech lead · 2025",
			},
			{
				name: "Engrana",
				description: "My SaaS: a WhatsApp sales agent for shops.",
				meta: "Own product · 2026",
				href: "https://engrana.ai",
			},
			{
				name: "Soluciones JM",
				description:
					"Next.js ERP for a US client: inventory, purchasing and accounting.",
				meta: "Frontend lead · 2024",
			},
		],
		allProjects: "See all projects",
	},
	process: {
		label: "Process",
		title: "Simple and transparent from day one.",
		steps: [
			{
				title: "A 15-minute call",
				body: "You tell me the problem. I tell you whether I can help and what to tackle first.",
			},
			{
				title: "Progress every week",
				body: "You see the product working with your real data while it's being built.",
			},
			{
				title: "Launch and measure",
				body: "In production with clear metrics. If something breaks, I fix it.",
			},
		],
	},
	about: {
		label: "About",
		title: "Almost 4 years building software real people use.",
		paragraphs: [
			"I work with TypeScript end to end and connect what I build to WhatsApp, Shopify, Odoo, Make and n8n. I'd rather understand the problem before opening the editor, and I say early when something won't go as planned.",
			"I was tech lead at Vitrina Online and have worked with clients in Venezuela, the US and Chile. Native Spanish speaker, intermediate English (B2).",
		],
		photoAlt: "Michael Liendo",
		stack: [
			{ name: "TypeScript", icon: "/icons/typescript-original.svg" },
			{ name: "React and Next.js", icon: "/icons/react-original.svg" },
			{ name: "Node.js", icon: "/icons/nodejs-original.svg" },
			{ name: "PostgreSQL", icon: "/icons/postgresql-original.svg" },
			{ name: "Ionic", icon: "/icons/ionic-original.svg" },
			{ name: "SvelteKit", icon: "/icons/svelte-original.svg" },
			{ name: "Rust", icon: "/icons/rust-original.svg" },
		],
	},
	notes: {
		label: "Notes",
		title: "I write about what I learn.",
		all: "See all notes",
	},
	contact: {
		title: "Got a process that eats your time?",
		body: "Tell me on WhatsApp or by email. I reply within a day.",
		whatsappCta: "Message me on WhatsApp",
	},
} satisfies HomeContent;
