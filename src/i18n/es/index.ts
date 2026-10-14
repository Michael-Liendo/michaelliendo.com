import type { BaseTranslation } from "../i18n-types";

const es = {
	SEO: {
		TITLE: "Michael Liendo · Desarrollador Full Stack | Bots de WhatsApp con IA",
		DESCRIPTION:
			"Desarrollador full stack en Caracas, Venezuela. Automatizo la atención por WhatsApp con IA y construyo apps web y móviles a medida con TypeScript, React y Node.js.",
		KEYWORDS:
			"michael liendo, desarrollador full stack venezuela, programador en caracas, automatización de whatsapp, bot de whatsapp con ia, chatbot para negocios venezuela, desarrollo de software a medida, desarrollador react, desarrollador typescript, desarrollador freelance venezuela",
		IMAGE: "https://michaelliendo.com/og/home-es.png",
		NOTES: {
			TITLE: "Notas de desarrollo | Michael Liendo",
			DESCRIPTION:
				"Tutoriales y notas de Michael Liendo sobre Git, TypeScript, React Native, Expo y SvelteKit, escritos a partir de proyectos reales.",
			KEYWORDS:
				"michael liendo, notas, aprendizajes, experiencias, svelte, typescript, desarrollo web, colaboración, resolución de problemas",
		},
		NOTE: {
			TITLE: "{title:string} | Notas de Michael Liendo",
			DESCRIPTION: "{description:string}",
			KEYWORDS: "{keywords:string}",
		},
		PROJECT: {
			TITLE: "Proyectos y casos de éxito | Michael Liendo",
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
