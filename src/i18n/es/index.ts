import type { BaseTranslation } from "../i18n-types";

const es = {
	SEO: {
		TITLE: "Michael Liendo · Desarrollador Full Stack | TypeScript e IA",
		DESCRIPTION:
			"Desarrollador full stack en Caracas, Venezuela. Construyo apps web y móviles con TypeScript, React, Node.js y PostgreSQL, y bots de WhatsApp con IA que bajaron la primera respuesta de 7 horas a 2 minutos.",
		KEYWORDS:
			"michael liendo, desarrollador full stack venezuela, programador caracas, desarrollador typescript, desarrollador react, node.js, bot de whatsapp con ia, automatización whatsapp, desarrollador freelance venezuela, ionic, sveltekit",
		IMAGE: "https://michaelliendo.com/og/home-es.png",
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
				"Proyectos de Michael Liendo: bots de WhatsApp con IA para retail, una plataforma educativa con tutor de IA, ERPs en Next.js, apps móviles con Ionic y herramientas open source en Rust.",
			KEYWORDS:
				"proyectos de michael liendo, desarrollador de software, svelte, typescript, desarrollo web, colaboración, resolución de problemas",
		},
	},
	LAYOUT: {
		NAV: {
			HOME: "Inicio",
			NOTES: "Notas",
			PROJECTS: "Proyectos",
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
} satisfies BaseTranslation;

export default es;
