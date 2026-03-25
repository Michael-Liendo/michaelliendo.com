import type { BaseTranslation } from "../i18n-types";

const es = {
	SEO: {
		TITLE: "Michael Liendo | Desarrollador de Software",
		DESCRIPTION:
			"Michael Liendo — desarrollador de software enfocado en React, TypeScript, apps móviles, backends y web. Notas técnicas sobre ingeniería, Svelte y herramientas. Colaboraciones: hola@michaelliendo.com.",
		KEYWORDS:
			"michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas",
		IMAGE: "https://avatars.githubusercontent.com/u/70660410?v=4",
		NOTES: {
			TITLE: "Notas | Michael Liendo",
			DESCRIPTION:
				"Artículos y tutoriales de Michael Liendo sobre ingeniería de software, Git, React Native, Expo, TypeScript, SvelteKit y flujos de trabajo — notas prácticas de proyectos reales.",
			KEYWORDS:
				"michael liendo, notas, aprendizajes, experiencias, svelte, typescript, desarrollo web, colaboración, resolución de problemas",
		},
		NOTE: {
			TITLE: "{title:string} | Notas de Michael Liendo",
			DESCRIPTION: "{description:string}",
			KEYWORDS: "{keywords:string}",
		},
		PROJECT: {
			TITLE: "Proyectos | Michael Liendo",
			DESCRIPTION:
				"Proyectos de software seleccionados de Michael Liendo: código abierto, web y móvil con stacks modernos. Enlaces a demos y repositorios.",
			KEYWORDS:
				"proyectos de michael liendo, desarrollador de software, svelte, typescript, desarrollo web, colaboración, resolución de problemas",
		},
		AUTOMATIONS: {
			TITLE: "Software a medida y automatizaciones | Michael Liendo",
			DESCRIPTION:
				"Desarrollo de software a medida para empresas en Venezuela: aplicaciones internas, integraciones entre sistemas, automatizaciones y stacks modernos (n8n, APIs). Soluciones alineadas a tu operación.",
			KEYWORDS:
				"software a medida Venezuela, desarrollo empresas, automatización, integraciones, n8n, aplicaciones internas, Michael Liendo",
		},
	},
	LAYOUT: {
		NAV: {
			HOME: "Inicio",
			NOTES: "Notas",
			PROJECTS: "Proyectos",
			AUTOMATIONS: "Automatizaciones",
		},
		FOOTER: {
			COPYRIGHT:
				"Hecho con ❤️ por Michael Liendo © {startYear:number} - {currentYear:number}",
		},
	},
	HOMEPAGE: {
		HI: "Hola soy {name:string} {surname:string},",
		HERO_HEADLINE: "Soy Michael Liendo, desarrollador de software",
		HERO_LEAD:
			"Enfocado en React, TypeScript, apps móviles, backends y web. Me gustan los retos difíciles, la colaboración clara y entregar software mantenible.",
		LOCATION: "Remoto",
		TIMEZONE: "UTC−5",
		STACK_TITLE: "Stack principal",
		ABOUT:
			"Soy un <strong>Desarrollador de Software</strong> enfocado en React.js y TypeScript apasionado por el <strong>Desarrollo de Aplicaciones Móviles, Servidores, AI, Automatizaciones y Páginas Web</strong>. Disfruto trabajar en proyectos desafiantes, valoro la colaboración y la resolución de problemas.",
		CTA_LABEL:
			"¿Te interesa trabajar conmigo o colaborar en un proyecto? hola@michaelliendo.com",
		CTA_BUTTON: "Contácteme por email",
		LATEST_NOTES: "Últimas notas",
	},
	NOTES: {
		NOTES: "Notas",
		DESCRIPTION:
			"Escribo ideas y soluciones sobre ingeniería de software y desarrollo.",
		READ_MORE: "Leer más",
		READ_NOTE: "Leer nota",
	},
	PROJECTS: {
		PROJECTS: "Proyectos",
		DESCRIPTION:
			"Trabajo reciente en producto, IA y full stack; más abajo, open source, prácticas y proyectos anteriores.",
		FEATURED: "Destacados",
		MORE: "Más proyectos",
		LIVE_SITE: "Visitar sitio",
		SOURCE_CODE: "Código fuente",
	},
	LEADS: {
		HERO_BADGE: "Pymes, comercio y equipos en Venezuela",
		HERO_HEADLINE:
			"Menos caos operativo: automatizá ventas, cobros y reportes sin inflar la nómina",
		HERO_LEAD:
			"Desarrollo software a medida para empresas: aplicaciones internas, integraciones entre tus sistemas y automatizaciones alineadas a tu operación — soluciones construidas para tu equipo y tus procesos, no plantillas genéricas.",
		HERO_CTA_PRIMARY: "Quiero una consultoría gratis",
		HERO_CTA_SECONDARY: "Ver un caso real",
		CASE_SIMPLE_BADGE: "Caso real",
		CASE_STUDIES_TITLE: "NQLN · antes y después",
		CASE_STUDIES_LEAD:
			"Del panel de soporte: antes el cliente esperaba horas o días; hoy el bot contesta en minutos. Abajo, el ahorro mensual en nómina al pasar de ~10 agentes en chat a 2–3.",
		CASE_SIMPLE_COMPARE_CAPTION: "Tiempo de primera respuesta",
		CASE_SIMPLE_BEFORE_LABEL: "Antes · solo agentes",
		CASE_SIMPLE_BEFORE_TIME: "7h 16m",
		CASE_SIMPLE_BEFORE_DESC:
			"Primera respuesta humana en el panel (referencia). El seguimiento podía alargarse días.",
		CASE_SIMPLE_AFTER_LABEL: "Ahora · bot",
		CASE_SIMPLE_AFTER_TIME: "~2 min",
		CASE_SIMPLE_AFTER_DESC: "Primera interacción automática para el cliente.",
		CASE_SIMPLE_PAYROLL_TITLE: "Ahorro en nómina de chat",
		CASE_SIMPLE_PAYROLL_BODY:
			"Antes ~10 personas atendían el chat; hoy alcanza con 2–3. A US$300 por persona al mes, el costo baja de ~US$3.000 a US$600–900 (2–3 × US$300).",
		CASE_SIMPLE_PAYROLL_SAVINGS_LABEL: "Ahorro estimado · mes",
		CASE_SIMPLE_PAYROLL_NOTE:
			"No incluye cargas sociales ni otros beneficios.",
		CASE_MORE: "Pronto sumo más casos así de simples.",
		SERVICES_TITLE: "Soluciones que encajan con cómo se trabaja hoy",
		SERVICE_1_TITLE: "Automatización de procesos",
		SERVICE_1_DESC:
			"Flujos en n8n o Make: desde confirmaciones y recordatorios hasta sincronizar datos entre apps — ideal si querés control de costos (incluye opciones self-hosted cuando tiene sentido).",
		SERVICE_2_TITLE: "Integraciones entre tus sistemas",
		SERVICE_2_DESC:
			"Que hablen tu tienda online, POS, CRM, Google Sheets, correo y WhatsApp Business API o webhooks: menos doble digitación y reportes que se actualizan solos.",
		SERVICE_3_TITLE: "Software y paneles a medida",
		SERVICE_3_DESC:
			"Tableros, formularios internos y mini-portales para inventario, despacho, soporte o aprobaciones — pensados para equipos chicos y operación real en Venezuela y clientes en el exterior.",
		PROOF_TITLE: "Resultados concretos (sin humo)",
		PROOF_1:
			"En retail: encadené pedidos, avisos y registro contable para bajar el retrabajo de facturación y cierre diario.",
		PROOF_2:
			"Reemplacé rutinas de copiar y pegar entre CRM y correo por un flujo monitoreado con alertas cuando algo falla.",
		PROOF_3:
			"Portal interno para un equipo distribuido: solicitudes de TI y seguimiento en un solo lugar, sin depender de hilos interminables.",
		MAGNET_TITLE: "Guía gratis: 5 procesos típicos de pymes en Venezuela que podés automatizar",
		MAGNET_LEAD:
			"Dejá tus datos y marcá la casilla — te mando un checklist corto orientado a ventas por chat, cobros mixtos y operación con poco personal.",
		MAGNET_BULLET_1: "Dónde está la primera victoria rápida en tu tipo de negocio",
		MAGNET_BULLET_2: "Cuándo conviene n8n/Make frente a solo “más Excel”",
		MAGNET_BULLET_3: "Qué información reunir antes de una llamada (sin perder el día en reuniones)",
		MAGNET_CTA: "Quiero la guía",
		CONTENT_TITLE: "Artículos y notas",
		CONTENT_BODY:
			"Escribo sobre ingeniería, stacks modernos y automatización — sirve si querés ver cómo pienso los problemas antes de encarar un proyecto.",
		CONTENT_CTA: "Ver notas",
		FORM_TITLE: "Contame qué querés ordenar en tu operación",
		FORM_SUBTITLE:
			"Formulario breve: te respondo con encaje honesto, enfoque sugerido y tiempos aproximados (trabajo remoto con equipos en Venezuela y en el exterior).",
		FORM_NAME: "Nombre",
		FORM_EMAIL: "Correo",
		FORM_PHONE: "Teléfono (WhatsApp o móvil)",
		FORM_PROCESS: "¿Qué proceso querés automatizar o integrar?",
		FORM_PROCESS_PLACEHOLDER:
			"Ejemplo: pedidos que entran por Instagram y WhatsApp → registrar en una hoja o sistema → avisar a despacho → reflejar cobro en bolívares o USD…",
		FORM_GUIDE:
			"También enviame la guía gratis (5 procesos típicos en Venezuela)",
		FORM_SUBMIT: "Enviar solicitud",
		FORM_SUCCESS:
			"Listo — tu solicitud quedó registrada. Te escribo o llamo pronto con el siguiente paso.",
		FORM_SUCCESS_MAILTO:
			"Se debería abrir tu correo con un mensaje listo. Enviálo para completar la solicitud.",
		FORM_ERROR_GENERIC: "Algo salió mal. Probá de nuevo o escribime por WhatsApp.",
		FORM_ERROR_VALIDATION: "Revisá los campos obligatorios e intentá de nuevo.",
		FORM_ERROR_STORE:
			"No pudimos guardar tu solicitud en el servidor. Probá de nuevo en unos minutos o escribime por WhatsApp.",
		WHATSAPP_ARIA: "Escribir por WhatsApp",
		WHATSAPP_LABEL: "WhatsApp",
	},
} satisfies BaseTranslation;

export default es;
