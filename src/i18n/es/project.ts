import type { Project } from "$lib/types/Project";

const icon = (domain: string) =>
	`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;

export default [
	{
		name: "Necesitas Bot",
		role: "Tech Lead — IA y automatización · Vitrina Online C.A.",
		description:
			"Automatización retail por WhatsApp: Fastify y PostgreSQL, panel en React 19, portal de pagos y schemas Zod compartidos de punta a punta. Integra Callbell, Shopify (catálogo a fulfillment) e IA multimodal (OpenAI, Gemini). En producción: validación de pagos (incl. Banesco), divisas, envíos, carritos y conversaciones, prompts multi-marca. Desarrollo y operación de la plataforma a mi cargo.",
		preview_url: "https://www.nqlnstore.com/",
		image_url: icon("nqlnstore.com"),
		tags: [
			"typescript",
			"node.js",
			"react",
			"postgresql",
			"shopify",
			"whatsapp",
			"ia",
		],
		date: "2025-11-01",
		period: "nov 2025 – Actualidad · 5 meses",
		featured: true,
	},
	{
		name: "Tizza",
		role: "Lead Software Engineer",
		description:
			"Aprendizaje con IA en matemáticas, física y química para alumnos, docentes e instituciones. Monorepo TypeScript: Ionic + React + Vite, Fastify + PostgreSQL, schemas Zod compartidos. Estudio adaptativo (flashcards, quizzes), tutoría con RAG (Gemini File Search) y flujos docentes: organizaciones, aulas, planes de evaluación desde lenguaje natural. También Capacitor, auth, S3 y marketing en Astro. APIs, guardrails de IA, observabilidad y UI de punta a punta.",
		preview_url: "https://tizza.app",
		image_url: icon("tizza.app"),
		tags: [
			"typescript",
			"react",
			"ionic",
			"fastify",
			"postgresql",
			"ia",
			"educación",
		],
		date: "2025-11-01",
		period: "nov 2025 – Actualidad · 5 meses",
		featured: true,
	},
	{
		name: "La Victoria — Reports",
		role: "Software Engineer / Tech Lead · Freelance",
		description:
			"Asistente por WhatsApp con IA conectado a un panel de flujo de caja, validación de pagos y control de acceso: instancias multicanal (ventas, operaciones, supervisión), verificación en tiempo real de movimientos, RBAC, balances, conciliación, comprobantes e importación masiva de extractos. Lideré arquitectura, backlog y entrega con un equipo de tres desarrolladores.",
		tags: [
			"full-stack",
			"ia",
			"whatsapp",
			"fintech",
			"typescript",
		],
		date: "2025-06-01",
		period: "jun 2025 – ago 2025 · 3 meses",
		featured: true,
	},
	{
		name: "Contapp",
		role: "Proyecto personal — full stack",
		description:
			"Aplicación de contabilidad web en TypeScript: varias empresas, plan de cuentas, asientos e informes financieros, con balance de prueba y exportación a Excel.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		preview_url: "https://contapp.michaelliendo.com/",
		tags: ["react", "fastify", "typescript", "accounting"],
		date: "2025-02-10",
		featured: true,
	},
	{
		name: "Petch",
		role: "Ingeniero móvil — Ionic/React y Express · Tiempo completo y freelance",
		description:
			"Producto de cuidado de mascotas (petch.ai). Tiempo completo (sep 2023–ago 2024): interfaz móvil Ionic/React, Google Maps y funcionalidades sobre Express.js y MongoDB. Sprint freelance (mar 2025): mejoras de front y back sobre el mismo stack.",
		preview_url: "https://petch.ai",
		image_url: icon("petch.ai"),
		tags: ["react", "ionic", "express", "mongodb", "mobile"],
		date: "2025-03-01",
		period: "sep 2023 – ago 2024 · 1 año tiempo completo; mar 2025 · 1 mes freelance",
		featured: true,
	},
	{
		name: "Astral Insights",
		role: "Desarrollador de software — Power BI e informes con IA · Freelance",
		description:
			"Procesador de datos en TypeScript para desempeño de proveedores dentro de Power BI: pedidos totales, entregas a tiempo, lead time promedio, tasa de defectos y score de riesgo. ChatGPT para resúmenes y texto a voz para escuchar el análisis en contextos ejecutivos y operativos.",
		preview_url: "https://astralinsights.ai/",
		image_url: icon("astralinsights.ai"),
		tags: ["typescript", "power bi", "ia", "analytics"],
		date: "2025-02-01",
		period: "feb 2025 · 1 mes",
		featured: true,
	},
	{
		name: "Soluciones JM",
		role: "Lead frontend developer — Next.js · Tiempo completo",
		description:
			"Sistema de gestión integrado con Next.js para contabilidad y administración: inventario, compras, ventas y finanzas con interfaz clara. SSR/ISR para rendimiento, APIs para sincronización y estructura modular para escalar.",
		tags: ["next.js", "typescript", "erp", "react"],
		date: "2024-08-01",
		period: "ago 2024 – feb 2025 · 7 meses",
		featured: true,
	},
	{
		name: "Oriencoop",
		role: "Desarrollador frontend — chat con IA (Svelte) · Freelance",
		description:
			"Frontend en Svelte para asistente de IA en tiempo real sobre políticas, procedimientos y productos: UI responsive, integración de auth y chat, componentes reutilizables, indicadores de escritura y sugerencias, navegación según autenticación.",
		preview_url: "https://www.oriencoop.cl/",
		image_url: icon("oriencoop.cl"),
		tags: ["svelte", "ia", "api", "frontend"],
		date: "2024-12-01",
		period: "dic 2024 – ene 2025 · 2 meses",
		featured: true,
	},
	{
		name: "TownHall",
		description:
			"Proyecto colaborativo para practicar Rust: plataforma comunitaria inspirada en Reddit y X (Twitter), aprendiendo en equipo de nivel principiante a intermedio.",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["rust", "leptos", "community"],
		date: "2024-11-05",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"CLI que normaliza URLs desde un archivo de entrada, comprueba códigos HTTP y escribe el resultado en un archivo de salida.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["rust", "cli", "http"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"App de chat con salas creadas por usuarios e invitaciones: mensajería en tiempo real y ciclo de vida de salas.",
		repo_url: "https://github.com/Michael-Liendo/underground",
		preview_url: "https://underground.michaelliendo.com/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-12-10",
	},
	{
		name: "Backust",
		description:
			"Utilidad en Rust para copiar archivos y carpetas a un directorio de respaldo; proyecto pequeño centrado en filesystem.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["rust", "cli", "backup"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description:
			"E-commerce con SvelteKit: categorías, carrito y checkout, con TypeScript en todo el stack.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		preview_url: "https://cherrie.lat/",
		tags: ["svelte", "typescript", "sveltekit", "e-commerce"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"Landing de marketing para un estudio de desarrollo con sección de contacto — Next.js y TypeScript.",
		repo_url: "https://github.com/Michael-Liendo/novabits",
		preview_url: "https://novabits.michaelliendo.com/",
		tags: ["next.js", "typescript", "landing"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"Concepto de almacenamiento personal en la nube: subir, sincronizar y compartir archivos con UI en SvelteKit.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["svelte", "typescript", "sveltekit", "cloud"],
		date: "2022-10-01",
	},
	{
		name: "U.E. Colegio Domingo Savio",
		role: "Desarrollador web frontend · Medio tiempo",
		description:
			"Enrutamiento, maquetación e integración de una API en JavaScript para el sitio público del colegio.",
		preview_url: "https://uedomingosavio.edu.ve/",
		image_url: icon("uedomingosavio.edu.ve"),
		tags: ["javascript", "html", "css"],
		date: "2022-10-01",
		period: "oct 2022 – dic 2022 · 3 meses",
	},
] satisfies Project[];
