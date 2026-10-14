import type { HomeContent } from "$lib/types/Home";

const link = (href: string, label: string) =>
	`<a href="${href}" class="link-underline">${label}</a>`;

export default {
	email: "hola@michaelliendo.com",
	hero: {
		role: "Desarrollador full stack",
		ctaPrimary: "Escríbeme",
		ctaSecondary: "Ver mi trabajo",
		stats: [
			{ value: "~4 años", label: "de TypeScript en producción" },
			{ value: "7 h → 2 min", label: "primera respuesta con mi bot de WhatsApp" },
			{ value: "430+", label: "estudiantes usan Tizza" },
		],
		headlineStart: "Construyo software que la gente usa todos los días: ",
		headlineEm: "tiendas, colegios y equipos pequeños.",
		headlineEnd: "",
		paragraphs: [
			"Soy Michael, desarrollador full stack en Caracas. Hago interfaces en React, APIs en Node.js, apps móviles con Ionic y, últimamente, mucha IA conectada a WhatsApp. Me importan más los problemas con gente real del otro lado que la tecnología que uso para resolverlos.",
		],
		photoAlt: "Foto de Michael Liendo",
		emailLabel: "Correo",
		location: "Caracas, Venezuela",
		availability: "abierto a proyectos freelance",
	},
	labels: {
		now: "Ahora mismo",
		work: "Trabajo seleccionado",
		experience: "Experiencia",
		how: "Cómo trabajo",
		languages: "Lenguajes",
		frameworks: "Frameworks",
		tech: "Tecnologías",
		spoken: "Idiomas",
		notes: "Notas",
		allProjects: "Todos los proyectos",
		allNotes: "Todas las notas",
	},
	nowHtml: [
		`Estoy construyendo ${link("https://engrana.ai", "Engrana")}, un agente de ventas por WhatsApp para comercios: responde con el catálogo real, cotiza, cobra, registra el pedido y avisa al dueño cuando hace falta una persona.`,
		`Sigo como desarrollador de ${link("https://tizza.app", "Tizza")}, una plataforma para estudiar matemática, física y química con un tutor de IA.`,
		`Y estoy tomando algunos proyectos freelance de automatización y desarrollo web. Si tienes uno, ${link("#contacto", "escríbeme")}.`,
	],
	featured: [
		{
			logo: "/images/nqln-icon.png",
			title: "Necesitas Bot",
			meta: "Tech lead · Vitrina Online · 2025–2026",
			body: "Una plataforma de atención por WhatsApp para varias marcas de retail. El bot entiende texto, notas de voz y fotos, consulta el inventario en Shopify y Odoo, valida pagos y le pasa la conversación a una persona cuando no está seguro.",
			metrics: [
				{ value: "7 h → 2 min", label: "primera respuesta al cliente" },
				{ value: "10 → 2–3", label: "personas en el equipo de chat" },
				{ value: "US$2.100+", label: "ahorro estimado al mes" },
			],
			stack: "TypeScript, Node.js (Fastify), React 19, PostgreSQL, OpenAI, Gemini",
			link: { href: "https://www.nqlnstore.com/", label: "nqlnstore.com" },
			chat: {
				avatar: "/images/nqln-icon.png",
				name: "NQLN · Asistente de la tienda",
				status: "en línea",
				typing: "escribiendo…",
				messages: [
					{ from: "customer", time: "9:41", text: "Hola, ¿tienen esta cartera en negro?" },
					{ from: "customer", time: "9:41", attachment: "foto.jpg" },
					{
						from: "bot",
						time: "9:41",
						text: "¡Hola! Sí, la tenemos en negro y quedan 4 unidades. ¿La quieres con envío o retiro en tienda?",
					},
					{
						from: "customer",
						time: "9:43",
						text: "Con envío a Maracay. Ya hice el pago móvil.",
					},
					{
						from: "bot",
						time: "9:43",
						text: "Recibido y validado. Tu pedido sale mañana por MRW, te aviso con la guía.",
					},
				],
				caption:
					"Simulación de una conversación con el bot · entiende fotos, valida pagos y crea el pedido",
			},
		},
		{
			logo: "/images/tizza-icon.png",
			title: "Tizza",
			meta: "Desarrollador principal · 2025–hoy",
			body: "Una plataforma para estudiar ciencias con un tutor de IA que responde desde el material del curso. La hice solo, de punta a punta: web, iOS y Android, con colegios, roles, suscripciones y un panel para profesores. Hoy la usan más de 430 estudiantes.",
			metrics: [
				{ value: "430+", label: "estudiantes activos" },
				{ value: "3", label: "plataformas: web, iOS y Android" },
				{ value: "1", label: "desarrollador, de punta a punta" },
			],
			stack: "React, Ionic, Capacitor, Fastify, PostgreSQL, Gemini (RAG)",
			link: { href: "https://tizza.app", label: "tizza.app" },
			image: {
				src: "/images/tizza.jpg",
				alt: "Pantalla de Tizza: un estudiante resolviendo un ejercicio de matemática con el tutor de IA",
				width: 1470,
				height: 786,
			},
		},
	],
	more: [
		{
			name: "Engrana",
			description:
				"Mi SaaS: un agente de ventas por WhatsApp multi-tenant para comercios.",
			meta: "Producto propio · 2026",
			href: "https://engrana.ai",
		},
		{
			name: "La Victoria",
			description:
				"Bot de WhatsApp y panel de caja con conciliación bancaria. Lideré a dos desarrolladores; operaciones pasó de 9 a 2 personas.",
			meta: "Tech lead · 2025",
		},
		{
			name: "Soluciones JM",
			description:
				"ERP en Next.js para un cliente de EE. UU.: inventario, compras, ventas y contabilidad.",
			meta: "Frontend lead · 2024–2025",
		},
		{
			name: "Petch",
			description:
				"App móvil para el cuidado de mascotas, con mapas y backend en Express.",
			meta: "Móvil · 2023–2025",
			href: "https://petch.ai",
		},
		{
			name: "Astral Insights",
			description:
				"Reportes de proveedores en Power BI con resúmenes de ChatGPT.",
			meta: "Freelance · 2025",
			href: "https://astralinsights.ai/",
		},
		{
			name: "Highball",
			description:
				"Ejecuta juegos de Windows en Apple Silicon, con una base de datos abierta de compatibilidad.",
			meta: "Open source · 2026",
			href: "https://github.com/Michael-Liendo/highball",
		},
		{
			name: "Contapp",
			description: "App contable multi-empresa, de código abierto.",
			meta: "Proyecto propio",
			href: "https://contapp.michaelliendo.com/",
		},
	],
	experience: [
		{
			role: "Tech lead, automatización e IA",
			org: "Vitrina Online",
			period: "2025–2026",
		},
		{ role: "Desarrollador principal", org: "Tizza", period: "2025–hoy" },
		{ role: "Tech lead (freelance)", org: "La Victoria", period: "2025" },
		{
			role: "Lead frontend",
			org: "Soluciones JM (EE. UU.)",
			period: "2024–2025",
		},
		{ role: "Desarrollador móvil y backend", org: "Petch", period: "2023–2025" },
	],
	experienceBefore:
		"Antes: frontend con IA para Oriencoop (Chile), reportes para Astral Insights (EE. UU.) y el sitio del Colegio Domingo Savio. Aprendí en Platzi y freeCodeCamp, y sigo aprendiendo construyendo.",
	how: [
		"Prefiero entender el problema antes de abrir el editor. Muestro avances cada semana, escribo código que otra persona pueda mantener y digo pronto cuando algo no va a salir como se planeó.",
		"Mi día a día es TypeScript: React y Next.js en el frontend, Node.js con Fastify y PostgreSQL en el backend, Ionic y Capacitor para móvil, y OpenAI o Gemini cuando la IA de verdad suma. Conecto todo con Shopify, Odoo, WhatsApp Business, Make o n8n. Para mis propios experimentos, a veces Rust y Svelte.",
	],
	languages: [
		{
			icon: "/icons/typescript-original.svg",
			name: "TypeScript",
			description: "Mi lenguaje base, del frontend a la API.",
			badge: "~4 años",
		},
		{
			icon: "/icons/javascript-original.svg",
			name: "JavaScript",
			description: "Navegador, Node y herramientas.",
			badge: "~4 años",
		},
		{
			icon: "/icons/postgresql-original.svg",
			name: "SQL",
			description: "PostgreSQL con migraciones y consultas a mano.",
			badge: "3+ años",
		},
		{
			icon: "/icons/rust-original.svg",
			name: "Rust",
			description: "Proyectos open source y CLIs.",
			badge: "open source",
		},
	],
	frameworks: [
		{
			icon: "/icons/react-original.svg",
			name: "React & Next.js",
			description: "Paneles, ERPs y sitios con SSR/ISR.",
			badge: "3+ años",
		},
		{
			icon: "/icons/ionic-original.svg",
			name: "Ionic & Capacitor",
			description: "Apps para iOS y Android desde una sola base de código.",
			badge: "2+ años",
		},
		{
			icon: "/icons/nodejs-original.svg",
			name: "Node.js, Fastify & Express",
			description: "APIs REST, webhooks y tareas en segundo plano.",
			badge: "3+ años",
		},
		{
			icon: "/icons/svelte-original.svg",
			name: "SvelteKit",
			description: "Este sitio, Engrana y apps livianas.",
			badge: "2+ años",
		},
	],
	tech: [
		{
			name: "PostgreSQL",
			description: "Datos transaccionales con Knex y Drizzle.",
		},
		{
			name: "OpenAI & Gemini",
			description: "Modelos multimodales, RAG y herramientas.",
		},
		{
			name: "WhatsApp & Shopify",
			description: "Conversaciones conectadas a pedidos e inventario.",
		},
		{
			name: "Odoo, Make & n8n",
			description: "Integraciones y automatizaciones entre sistemas.",
		},
		{
			name: "Docker & Git",
			description: "Entornos reproducibles y revisión de código.",
		},
		{
			name: "AWS S3, Firebase & Vercel",
			description: "Archivos, notificaciones y despliegues.",
		},
	],
	spoken: [
		{ name: "Español", level: "Nativo", note: "Mi idioma de trabajo diario." },
		{
			name: "Inglés",
			level: "B2",
			note: "Leo documentación y escribo con fluidez; trabajo bien por escrito.",
		},
	],
	contact: {
		title:
			"¿Tienes una idea o un proceso que te quita tiempo? Me encantaría escucharla.",
		bodyHtml:
			"Cuéntame qué quieres resolver y te respondo con un enfoque honesto, tiempos aproximados y si soy la persona indicada.",
		emailCta: "Escríbeme un correo",
		whatsappCta: "WhatsApp",
		reply: "Respondo en menos de un día.",
	},
} satisfies HomeContent;
