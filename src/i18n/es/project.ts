import type { Project } from "$lib/types/Project";

export default [
	{
		name: "Venfy",
		role: "Proyecto propio",
		description:
			"Convierte cualquier computadora en un smart TV para YouTube que controlas desde el teléfono: abres venfy.app/tv, vinculas la app de YouTube con un código y transmites como a un televisor. Sin instalar nada ni crear cuenta, con una cola compartida para varios teléfonos y un control remoto web. En español, inglés y portugués.",
		preview_url: "https://venfy.app",
		tags: ["Web", "YouTube", "Tiempo real", "Producto propio"],
		date: "2026-10-08",
		period: "oct 2026",
		featured: true,
	},
	{
		name: "Visitalo",
		role: "Full stack",
		description:
			"Plataforma PropTech para Venezuela: tours 3D de propiedades hechos con el teléfono y pre-calificación de compradores antes de la visita. Monorepo con SvelteKit, Fastify, Drizzle y PostgreSQL, más de 37 endpoints y acceso con Google.",
		preview_url: "https://visitalo.app",
		tags: ["PropTech", "Bienes raíces", "Web"],
		date: "2026-04-02",
		featured: true,
	},
	{
		name: "Enrola",
		role: "En desarrollo",
		description:
			"Programa de fidelización para negocios con la tarjeta en Apple Wallet y Google Wallet: sellos, puntos y niveles. El cliente se inscribe con un enlace, el personal suma puntos escaneando un QR y el pase se actualiza solo en el teléfono.",
		tags: ["Fidelización", "Apple Wallet", "Google Wallet"],
		date: "2026-06-10",
	},
	{
		name: "Soccer League Scheduler",
		role: "Proyecto personal",
		description:
			"App para organizar una copa local de fútbol: calendario público con tabla, goleadores y tarjetas; panel para cargar resultados en vivo con reloj por partido; y un planificador que arma los cruces y reparte los descansos. Hecha para una copa de tres contra tres en Naiguatá.",
		repo_url: "https://github.com/Michael-Liendo/soccer-league-scheduler",
		tags: ["SvelteKit", "SQLite", "Open source"],
		date: "2026-10-06",
	},
	{
		name: "MSFS 2024 en Apple Silicon",
		role: "Investigación",
		description:
			"Intento documentado de correr Microsoft Flight Simulator 2024 en un MacBook M4: cambié la cadena de traducción a D3D12 → Vulkan → Metal y superé el límite de Shader Model 6.7. Arranca y renderiza, pero todavía no es jugable. Incluye parches y pruebas para quien quiera seguir.",
		repo_url: "https://github.com/Michael-Liendo/msfs2024-apple-silicon",
		tags: ["C", "Gráficos", "Apple Silicon", "Open source"],
		date: "2026-08-30",
	},
	{
		name: "Gatekeeper Editorial 30X",
		role: "Finalista · Hackathon 30X · Equipo DevGain",
		description:
			"Filtro editorial con IA que decide en milisegundos si cada pieza de contenido sale y, si no, la corrige sola. JEV (TypeSafe) responde 12 preguntas por pieza, el código aplica la política de la marca, la IA corrige lo que falla y JEV lo vuelve a verificar. 1.000 decisiones en 4,5 s, 80–87 % de acierto, 42 % resuelto sin persona y 0 piezas riesgosas aprobadas solas. El mismo motor segmenta inscritos para el equipo comercial. Construido en 48 horas con Haron Acosta.",
		preview_url: "https://gatekeeper-30x.michaelliendo.com",
		repo_url: "https://github.com/Michael-Liendo/gatekeeper-30x",
		tags: ["IA", "Hackathon", "Next.js", "Open source"],
		date: "2026-10-18",
		period: "oct 2026 · 48 horas",
		featured: true,
	},
	{
		name: "Engrana AI",
		role: "Fundador · Producto propio",
		description:
			"Agente de ventas con IA para el WhatsApp de las tiendas en Venezuela: contesta con el catálogo y los precios de la tienda, cotiza en bolívares a tasa BCV, pasa los datos de Pago Móvil y deja el pedido anotado en un panel. Con la API oficial de WhatsApp. Lo programo, lo instalo y lo atiendo yo.",
		preview_url: "https://engrana.ai/",
		image_url: "/images/logos/engrana.png",
		tags: ["SaaS", "WhatsApp", "IA", "Venezuela"],
		date: "2026-06-01",
		period: "jun 2026 – Actualidad",
		featured: true,
	},
	{
		name: "Necesitas Bot",
		role: "Tech lead · Vitrina Online",
		description:
			"Atención por WhatsApp con IA para una tienda online: la primera respuesta bajó de 7 horas en promedio, y hasta una semana, a ~2 minutos, a cualquier hora. Gestiona pagos, envíos y catálogo para cinco marcas.",
		preview_url: "https://www.nqlnstore.com/",
		image_url: "/images/nqln-icon.png",
		tags: ["WhatsApp", "IA", "Shopify", "Pagos", "E-commerce"],
		date: "2025-11-01",
		period: "nov 2025 – Actualidad · 5 meses",
		featured: true,
	},
	{
		name: "Tizza",
		role: "Desarrollador principal",
		description:
			"Plataforma para estudiar matemáticas, física y química con IA, usada por más de 430 estudiantes. La construí yo solo, en web, iOS y Android, con tutor IA, quizzes y herramientas para docentes.",
		preview_url: "https://tizza.app",
		image_url: "/images/tizza-icon.png",
		tags: ["IA", "Educación", "App móvil", "Web"],
		date: "2025-11-01",
		period: "nov 2025 – Actualidad · 5 meses",
		featured: true,
	},
	{
		name: "La Victoria — Reports",
		role: "Tech lead · Freelance",
		description:
			"Asistente de WhatsApp con IA que verifica pagos y lleva el flujo de caja en tiempo real: la operación pasó de 12 personas a 3 y atiende al doble de clientes, con US$2.700 menos en nómina cada mes con unos US$150 al mes de IA. Lideré a 2 desarrolladores hasta la entrega.",
		tags: ["WhatsApp", "IA", "Pagos", "Automatización"],
		date: "2025-06-01",
		period: "jun 2025 – ago 2025 · 3 meses",
		featured: true,
	},
	{
		name: "Contapp",
		role: "Proyecto propio",
		description:
			"Contabilidad en el navegador para una o varias empresas: plan de cuentas, asientos, informes financieros y exportación a Excel.",
		repo_url: "https://github.com/Michael-Liendo/contapp",
		tags: ["Contabilidad", "Web", "Open source"],
		date: "2025-02-10",
		featured: true,
	},
	{
		name: "Petch",
		role: "Desarrollador móvil · Tiempo completo y freelance",
		description:
			"App para el cuidado de mascotas. Durante un año desarrollé la app móvil, con mapas integrados, y el sistema que la respalda; luego volví para un sprint freelance de mejoras.",
		preview_url: "https://petch.ai",
		image_url: "/images/logos/petch.png",
		tags: ["App móvil", "Mascotas", "Mapas"],
		date: "2025-03-01",
		period: "sep 2023 – ago 2024 · 1 año tiempo completo; mar 2025 · 1 mes freelance",
		featured: true,
	},
	{
		name: "Astral Insights",
		role: "Desarrollador · Freelance",
		description:
			"Informes de proveedores en Power BI: entregas a tiempo, plazos, defectos y riesgo en un solo lugar, con resúmenes escritos por IA que también se pueden escuchar en voz alta.",
		preview_url: "https://astralinsights.ai/",
		image_url: "/images/logos/astral-insights.png",
		tags: ["Power BI", "IA", "Informes"],
		date: "2025-02-01",
		period: "feb 2025 · 1 mes",
		featured: true,
	},
	{
		name: "Soluciones JM",
		role: "Líder de frontend · Tiempo completo",
		description:
			"Sistema de gestión para llevar inventario, compras, ventas y finanzas desde una interfaz clara, pensado para crecer junto con el negocio.",
		image_url: "/images/logos/soluciones-jm.png",
		tags: ["Sistema de gestión", "Inventario", "Web"],
		date: "2024-08-01",
		period: "ago 2024 – feb 2025 · 7 meses",
		featured: true,
	},
	{
		name: "Oriencoop",
		role: "Desarrollador frontend · Freelance",
		description:
			"Interfaz de un asistente con IA para una cooperativa: responde en tiempo real dudas sobre productos, políticas y procedimientos, con inicio de sesión para cada usuario.",
		preview_url: "https://www.oriencoop.cl/",
		image_url: "/images/logos/oriencoop.png",
		tags: ["IA", "Chatbot", "Web"],
		date: "2024-12-01",
		period: "dic 2024 – ene 2025 · 2 meses",
		featured: true,
	},
	{
		name: "TownHall",
		description:
			"Proyecto en equipo para aprender Rust: una comunidad al estilo de Reddit y X, para desarrolladores de nivel principiante a intermedio.",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["Rust", "Open source", "Comunidad"],
		date: "2024-11-05",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"Herramienta de terminal que revisa una lista de enlaces y guarda cuáles responden bien y cuáles fallan.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["Rust", "Terminal", "Open source"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"App de chat con salas creadas por los usuarios, acceso por invitación y mensajes en tiempo real.",
		repo_url: "https://github.com/Michael-Liendo/underground-chat",
		tags: ["Chat", "Tiempo real", "Open source"],
		date: "2023-12-10",
	},
	{
		name: "Backust",
		description:
			"Pequeña utilidad que copia archivos y carpetas a una carpeta de respaldo.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["Rust", "Respaldos", "Open source"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description:
			"Tienda online con categorías, carrito y proceso de compra.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		tags: ["E-commerce", "Web", "Open source"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"Página de presentación para un estudio de desarrollo, con sección de contacto.",
		preview_url: "https://novabits.vercel.app",
		tags: ["Landing page", "Web", "Open source"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"Concepto de nube personal para subir, sincronizar y compartir archivos.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["Almacenamiento", "Web", "Open source"],
		date: "2022-10-01",
	},
	{
		name: "U.E. Colegio Domingo Savio",
		role: "Desarrollador web · Medio tiempo",
		description:
			"Sitio web público del colegio: estructura de páginas, diseño y conexión con sus datos.",
		preview_url: "https://uedomingosavio.edu.ve/",
		tags: ["Sitio web", "Educación"],
		date: "2022-10-01",
		period: "oct 2022 – dic 2022 · 3 meses",
	},
] satisfies Project[];
