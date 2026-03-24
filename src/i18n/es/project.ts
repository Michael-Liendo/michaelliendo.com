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
	},
	{
		name: "Contapp",
		description:
			"Aplicación de contabilidad basada en web construida con TypeScript, diseñada para gestionar múltiples empresas, mantener planes de cuentas, registrar asientos y generar informes financieros como balances de prueba con funcionalidad de exportación a Excel.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		preview_url: "https://contapp.michaelliendo.com/",
		tags: ["react", "fastify", "typescript", "accounting"],
		date: "2025-02-10",
	},
	{
		name: "Petch",
		role: "Desarrollador móvil y backend · Freelance",
		description:
			"Desarrollo front-end y back-end del producto de cuidado de mascotas: mejoras y nuevas funcionalidades en el stack (Express.js, MongoDB, React).",
		preview_url: "https://petch.ai",
		image_url: icon("petch.ai"),
		tags: ["react", "express", "mongodb", "mobile"],
		date: "2025-03-01",
		period: "Mar 2025 · 1 mes",
	},
	{
		name: "Astral Insights",
		role: "Desarrollador de software — Power BI e informes con IA · Freelance",
		description:
			"Procesador de datos en TypeScript para informes de desempeño de proveedores dentro de Power BI: métricas como pedidos totales, entregas a tiempo, lead time promedio, tasa de defectos y score de riesgo. Integración con ChatGPT para resúmenes narrativos y módulo de texto a voz para escuchar el análisis en contextos ejecutivos y operativos.",
		preview_url: "https://astralinsights.ai/",
		image_url: icon("astralinsights.ai"),
		tags: ["typescript", "power bi", "ia", "analytics"],
		date: "2025-02-01",
		period: "Feb 2025 · 1 mes",
	},
	{
		name: "TownHall",
		description:
			"Es un proyecto colaborativo para desarrolladores de Rust de nivel principiante a intermedio. Estamos aprendiendo haciendo, creando una plataforma comunitaria inspirada en Reddit y la plataforma de microblogging X (anteriormente Twitter).",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["rust", "leptos", "community"],
		date: "2024-11-05",
	},
	{
		name: "Soluciones JM",
		role: "Lead frontend developer — Next.js · Tiempo completo",
		description:
			"Desarrollo de un sistema de gestión integrado con Next.js para optimizar procesos contables y administrativos en empresas: módulos de inventario, compras, ventas y finanzas con una interfaz clara y eficiente. Uso de SSR/ISR para rendimiento, integración con APIs para sincronización de datos y diseño modular para escalar.",
		tags: ["next.js", "typescript", "erp", "react"],
		date: "2024-08-01",
		period: "Ago 2024 – feb 2025 · 7 meses",
	},
	{
		name: "Oriencoop",
		role: "Desarrollador frontend — chat con IA (Svelte) · Freelance",
		description:
			"Diseño y desarrollo del frontend en Svelte para un asistente de IA en tiempo real sobre políticas, procedimientos y productos: interfaz responsive, integración con backend para autenticación y chat, componentes reutilizables, indicadores de escritura y sugerencias de respuesta, y navegación restringida según autenticación.",
		preview_url: "https://www.oriencoop.cl/",
		image_url: icon("oriencoop.cl"),
		tags: ["svelte", "ia", "api", "frontend"],
		date: "2024-12-01",
		period: "Dic 2024 – ene 2025 · 2 meses",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"Limpia las URL de un archivo de entrada y verifica sus códigos de estado. Las URL limpias y sus códigos de estado se almacenan en un archivo de salida.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["rust", "url", "status"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"Esta es una aplicación de chat que permite a los usuarios crear salas de chat e invitar a otros a unirse.",
		repo_url: "https://github.com/Michael-Liendo/underground",
		preview_url: "https://underground.michaelliendo.com/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-12-10",
	},
	{
		name: "Petch",
		role: "Desarrollador de aplicaciones móviles · React + Ionic · Tiempo completo",
		description:
			"App de cuidado de mascotas: interfaz en Ionic/React (pantallas y experiencia), integración de APIs como Google Maps y entrega de funcionalidades junto a Express.js y MongoDB en el backend.",
		preview_url: "https://petch.ai",
		image_url: icon("petch.ai"),
		tags: ["react", "ionic", "express", "mongodb", "mobile"],
		date: "2023-09-01",
		period: "sep 2023 – ago 2024 · 1 año",
	},
	{
		name: "Backust",
		description:
			"Un sistema de respaldo simple para copiar archivos y directorios a un directorio de respaldo.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description:
			"Este proyecto es una tienda virtual desarrollada con SvelteKit y TypeScript. En la tienda, los usuarios pueden explorar diferentes categorías de productos, agregar productos a su carrito y completar una compra.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		preview_url: "https://cherrie.lat/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "store"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"La página de aterrizaje para un negocio de desarrollo con una sección de contacto.",
		repo_url: "https://github.com/Michael-Liendo/novabits",
		preview_url: "https://novabits.michaelliendo.com/",
		tags: ["nextjs", "typescript", "landing"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"Almacenamiento en la nube personal que te permite guardar, sincronizar y compartir tus archivos de manera segura y accesible desde cualquier lugar.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["svelte", "typescript", "sveltekit", "cloud"],
		date: "2022-10-01",
	},
	{
		name: "U.E. Colegio Domingo Savio",
		role: "Desarrollador web frontend · Medio tiempo",
		description:
			"Responsable del enrutamiento, maquetación de páginas e integración de datos desde una API en JavaScript para mostrar contenido en el sitio web del colegio.",
		preview_url: "https://uedomingosavio.edu.ve/",
		image_url: icon("uedomingosavio.edu.ve"),
		tags: ["javascript", "html", "css"],
		date: "2022-10-01",
		period: "Oct 2022 – dic 2022 · 3 meses",
	},
] satisfies Project[];
