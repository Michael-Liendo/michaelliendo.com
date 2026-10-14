import type { HomeContent } from "$lib/types/Home";

export default {
	email: "hola@michaelliendo.com",
	hero: {
		availability: "Disponible para proyectos freelance · Caracas, Venezuela",
		headlineStart: "Automatizo la atención por WhatsApp y construyo ",
		headlineHighlight: "el software que tu negocio necesita.",
		lead: "Soy Michael. Ayudo a empresas pequeñas, medianas y grandes a atender más rápido y a dejar de hacer a mano lo que un sistema puede hacer: bots de WhatsApp con IA, paneles a medida y apps web y móviles conectadas a lo que ya usan.",
		ctaPrimary: "Escríbeme por WhatsApp",
		ctaSecondary: "Ver casos",
		trustedLabel: "Han confiado en mi trabajo",
	},
	clients: [
		{ name: "NQLN", logo: "/images/nqln-icon.png" },
		{ name: "Tizza", logo: "/images/tizza-icon.png" },
		{ name: "La Victoria" },
		{ name: "Soluciones JM", logo: "/images/logos/soluciones-jm.png" },
		{ name: "Petch", logo: "/images/logos/petch.png" },
		{ name: "Oriencoop", logo: "/images/logos/oriencoop.png" },
	],
	cases: {
		label: "Casos",
		title: "Resultados medibles, no solo pantallas bonitas.",
		items: [
			{
				tag: "NQLN · Retail",
				logo: "/images/nqln-icon.png",
				title: "De 7 horas a 2 minutos para responder a cada cliente.",
				body: "Un bot de WhatsApp que entiende texto, notas de voz y fotos, consulta el inventario en Shopify y Odoo y valida pagos. Si duda, le pasa la conversación a una persona. Antes, en los días de más movimiento, algunos clientes esperaban hasta una semana.",
				metrics: [
					{ value: "2 min", label: "primera respuesta" },
					{ value: "10→3", label: "personas en el chat" },
					{ value: "$2.100", label: "ahorro al mes" },
				],
				link: { href: "https://www.nqlnstore.com/", label: "nqlnstore.com" },
				chat: {
					name: "NQLN Store",
					status: "en línea",
					messages: [
						{ from: "customer", text: "Hola, ¿tienen esta cartera en negro?" },
						{
							from: "bot",
							text: "¡Hola! Sí, quedan 4 unidades. ¿Envío o retiro en tienda?",
						},
						{ from: "customer", text: "Envío a Maracay. Ya hice el pago móvil." },
						{
							from: "bot",
							text: "Recibido y validado. Tu pedido sale mañana por MRW.",
						},
					],
				},
			},
			{
				tag: "Tizza · Educación",
				logo: "/images/tizza-icon.png",
				title: "Un tutor de IA que ya usan más de 430 estudiantes.",
				body: "Plataforma para estudiar matemática, física y química. La construí solo de punta a punta: web, iOS y Android, con colegios, roles y un panel para profesores.",
				metrics: [
					{ value: "430+", label: "estudiantes" },
					{ value: "3", label: "plataformas" },
				],
				link: { href: "https://tizza.app", label: "tizza.app" },
				image: {
					src: "/images/tizza.webp",
					alt: "Pantalla de Tizza: un estudiante resolviendo un ejercicio con el tutor de IA",
					width: 1470,
					height: 786,
				},
			},
		],
		more: [
			{
				name: "La Victoria",
				description:
					"Bot de WhatsApp y panel de caja con conciliación bancaria. Operaciones pasó de 12 personas a 3 y atiende al doble de clientes: US$2.700 menos en nómina al mes, con unos US$150 al mes de IA.",
				meta: "Tech lead · 2025",
			},
			{
				name: "Engrana",
				logo: "/images/logos/engrana.png",
				description: "Mi SaaS: un agente de ventas por WhatsApp para comercios.",
				meta: "Producto propio · 2026",
				href: "https://engrana.ai",
			},
			{
				name: "Soluciones JM",
				logo: "/images/logos/soluciones-jm.png",
				description:
					"ERP en Next.js para un cliente de EE. UU.: inventario, compras y contabilidad.",
				meta: "Frontend lead · 2024",
			},
		],
		allProjects: "Ver todos los proyectos",
	},
	// Testimonios de clientes. La sección (#testimonios) solo aparece en la home
	// cuando `items` tiene al menos uno. Forma: { quote, name, role, company,
	// logo?, photo? }. Sin logo ni foto se muestran las iniciales.
	// Mantén las mismas entradas en src/i18n/en/home.ts.
	// EJEMPLO FALSO, solo para copiar:
	// items: [
	// 	{
	// 		quote: "Texto de ejemplo: el bot responde a nuestros clientes en minutos y el equipo por fin puede enfocarse en vender.",
	// 		name: "Nombre Apellido",
	// 		role: "Gerente de operaciones",
	// 		company: "NQLN",
	// 		logo: "/images/nqln-icon.png", // opcional
	// 		photo: "/images/testimonials/nombre.webp", // opcional, tiene prioridad sobre el logo
	// 	},
	// ],
	testimonials: {
		label: "Testimonios",
		title: "Lo que dicen los clientes.",
		items: [
			{
				quote:
					"Pasamos de 12 empleados a 3 y atendemos el doble de las personas que se atendían antes, con mayor rapidez. Ahora procesar todo lo que entra es extremadamente fácil.",
				name: "Victor",
				role: "Dueño",
				company: "La Victoria",
			},
		],
	},
	process: {
		label: "Proceso",
		title: "Simple y transparente desde el primer día.",
		steps: [
			{
				title: "Hablamos 15 minutos",
				body: "Me cuentas el problema. Te digo si puedo ayudarte y qué conviene hacer primero.",
			},
			{
				title: "Avances cada semana",
				body: "Ves el producto funcionando con tus datos reales mientras se construye.",
			},
			{
				title: "Lanzamos y medimos",
				body: "En producción con métricas claras. Si algo falla, lo arreglo.",
			},
		],
	},
	about: {
		label: "Sobre mí",
		title: "Casi 4 años construyendo software que usa gente real.",
		paragraphs: [
			"Trabajo con TypeScript de punta a punta y conecto lo que construyo con WhatsApp, Shopify, Odoo, Make y n8n. Prefiero entender el problema antes de abrir el editor, y aviso pronto cuando algo no va a salir como se planeó.",
			"Fui tech lead en Vitrina Online y trabajé con clientes de Venezuela, Estados Unidos y Chile. Hablo español nativo e inglés intermedio (B2).",
		],
		photoAlt: "Michael Liendo",
		stack: [
			{ name: "TypeScript", icon: "/icons/typescript-original.svg" },
			{ name: "React y Next.js", icon: "/icons/react-original.svg" },
			{ name: "React Native", icon: "/icons/react-original.svg" },
			{ name: "Node.js", icon: "/icons/nodejs-original.svg" },
			{ name: "PostgreSQL", icon: "/icons/postgresql-original.svg" },
			{ name: "Ionic", icon: "/icons/ionic-original.svg" },
			{ name: "SvelteKit", icon: "/icons/svelte-original.svg" },
			{ name: "Rust", icon: "/icons/rust-original.svg" },
		],
		integrationsLabel: "Conecto con lo que ya usas:",
		integrations: [
			{ name: "WhatsApp Business", icon: "/icons/whatsapp.svg" },
			{ name: "Shopify", icon: "/icons/shopify.svg" },
			{ name: "Odoo", icon: "/icons/odoo.svg" },
			{ name: "n8n y Make", icon: "/icons/n8n.svg" },
			{ name: "IA con OpenAI", icon: "/icons/ai.svg" },
			{ name: "APIs y webhooks", icon: "/icons/api.svg" },
		],
	},
	notes: {
		label: "Notas",
		title: "Escribo sobre lo que aprendo.",
		all: "Ver todas las notas",
	},
	contact: {
		title: "¿Tienes un proceso que te quita tiempo?",
		body: "Cuéntamelo por WhatsApp o correo. Respondo en menos de un día.",
		whatsappCta: "Escríbeme por WhatsApp",
	},
} satisfies HomeContent;
