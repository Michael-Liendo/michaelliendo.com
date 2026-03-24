import type { HomeStackSection } from "$lib/types/HomeStack";

export default [
	{
		title: "Lenguajes",
		icon: "code",
		items: [
			{
				name: "TypeScript",
				description:
					"Tipado de punta a punta, schemas Zod compartidos y monorepos que mantienen alineadas APIs, admin y clientes (React, Ionic).",
				icon_slug: "typescript",
				period: "Base habitual",
			},
			{
				name: "JavaScript",
				description:
					"ES moderno en navegador y tooling; mismo runtime en servicios Node, Fastify y Express.",
				icon_slug: "javascript",
				period: "Diario",
			},
			{
				name: "Rust",
				description:
					"Proyectos colaborativos y CLIs donde el rendimiento y el modelo de ownership aportan (p. ej. TownHall, utilidades).",
				icon_slug: "rust",
				period: "OSS / tooling",
			},
		],
	},
	{
		title: "Frameworks y UI",
		icon: "wrench",
		items: [
			{
				name: "React & Next.js",
				description:
					"Producto y paneles admin, sitios con App Router, SSR/ISR y módulos ERP contables o de gestión.",
				icon_slug: "react",
				period: "Producción",
			},
			{
				name: "SvelteKit & Vite",
				description:
					"Este portfolio y experiencias web ligeras con SSR/SSG, MDsvex y despliegues rápidos.",
				icon_slug: "svelte",
				period: "En uso",
			},
			{
				name: "Ionic & Capacitor",
				description:
					"Apps móvil híbridas con TanStack Query, Tailwind/Radix, KaTeX y builds para iOS y Android.",
				icon_slug: "ionic",
				period: "Producto móvil",
			},
		],
	},
	{
		title: "Backend y datos",
		icon: "database",
		items: [
			{
				name: "Node.js, Fastify & Express",
				description:
					"APIs REST, webhooks, jobs y reglas de negocio en TypeScript con enfoque en concurrencia y claridad.",
				icon_slug: "nodedotjs",
				period: "Servidor",
			},
			{
				name: "PostgreSQL & MongoDB",
				description:
					"PostgreSQL con Knex y migraciones para cargas transaccionales; MongoDB cuando el dominio encaja documental.",
				icon_slug: "postgresql",
				period: "Persistencia",
			},
			{
				name: "Docker & Git",
				description:
					"Entornos reproducibles, compose, revisiones y hábitos de release en repos propios y de cliente.",
				icon_slug: "docker",
				period: "DevOps ligero",
			},
		],
	},
	{
		title: "Nube, e-commerce e IA",
		icon: "cloud",
		items: [
			{
				name: "Vercel",
				description:
					"Hosting serverless, previews y variables de entorno para frontends y piezas edge.",
				icon_slug: "vercel",
				period: "Despliegue",
			},
			{
				name: "AWS S3 & Firebase",
				description:
					"Archivos y medios en S3; auth, notificaciones y servicios móvil con el ecosistema Firebase/Google.",
				icon_slug: "amazons3",
				period: "Integrado",
			},
			{
				name: "Shopify & WhatsApp",
				description:
					"Catálogo, pedidos, inventario y fulfillment conectados a conversaciones y automatización en WhatsApp Business.",
				icon_slug: "shopify",
				period: "Retail",
			},
			{
				name: "OpenAI & Google Gemini",
				description:
					"Modelos multimodales, RAG (p. ej. File Search), guardrails y trazas de uso en producción.",
				icon_slug: "openai",
				period: "IA en producto",
			},
		],
	},
] satisfies HomeStackSection[];
