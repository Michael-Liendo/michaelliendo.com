import type { HomeStackSection } from "$lib/types/HomeStack";

export default [
	{
		title: "Languages",
		icon: "code",
		items: [
			{
				name: "TypeScript",
				description:
					"End-to-end typing, shared Zod schemas and monorepos that keep APIs, admin UIs and clients (React, Ionic) in sync.",
				icon_slug: "typescript",
				period: "Default",
			},
			{
				name: "JavaScript",
				description:
					"Modern ES in the browser and tooling; the same runtime across Node, Fastify and Express services.",
				icon_slug: "javascript",
				period: "Daily",
			},
			{
				name: "Rust",
				description:
					"Collaborative apps and CLIs where performance and ownership pay off (e.g. TownHall, utilities).",
				icon_slug: "rust",
				period: "OSS / tooling",
			},
		],
	},
	{
		title: "Frameworks & UI",
		icon: "wrench",
		items: [
			{
				name: "React & Next.js",
				description:
					"Product and admin UIs, App Router sites, SSR/ISR and ERP-style management modules.",
				icon_slug: "react",
				period: "Production",
			},
			{
				name: "SvelteKit & Vite",
				description:
					"This portfolio and lean web experiences with SSR/SSG, MDsvex and fast deploys.",
				icon_slug: "svelte",
				period: "In use",
			},
			{
				name: "Ionic & Capacitor",
				description:
					"Hybrid mobile apps with TanStack Query, Tailwind/Radix, KaTeX and iOS/Android builds.",
				icon_slug: "ionic",
				period: "Mobile product",
			},
		],
	},
	{
		title: "Backend & data",
		icon: "database",
		items: [
			{
				name: "Node.js, Fastify & Express",
				description:
					"REST APIs, webhooks, background work and domain logic in TypeScript with a concurrency-friendly style.",
				icon_slug: "nodedotjs",
				period: "Server",
			},
			{
				name: "PostgreSQL & MongoDB",
				description:
					"PostgreSQL with Knex and migrations for transactional workloads; MongoDB when the domain fits documents better.",
				icon_slug: "postgresql",
				period: "Persistence",
			},
			{
				name: "Docker & Git",
				description:
					"Reproducible environments, compose stacks, reviews and release habits on personal and client repos.",
				icon_slug: "docker",
				period: "Lightweight DevOps",
			},
		],
	},
	{
		title: "Cloud, e-commerce & AI",
		icon: "cloud",
		items: [
			{
				name: "Vercel",
				description:
					"Serverless hosting, previews and environment management for frontends and edge-friendly pieces.",
				icon_slug: "vercel",
				period: "Deploy",
			},
			{
				name: "AWS S3 & Firebase",
				description:
					"Media and file storage on S3; auth, notifications and mobile services with Firebase/Google tooling.",
				icon_slug: "amazons3",
				period: "Integrated",
			},
			{
				name: "Shopify & WhatsApp",
				description:
					"Catalog, orders, inventory and fulfillment wired to WhatsApp Business automation and messaging.",
				icon_slug: "shopify",
				period: "Retail",
			},
			{
				name: "OpenAI & Google Gemini",
				description:
					"Multimodal models, RAG (e.g. File Search), guardrails and production usage observability.",
				icon_slug: "openai",
				period: "Product AI",
			},
		],
	},
] satisfies HomeStackSection[];
