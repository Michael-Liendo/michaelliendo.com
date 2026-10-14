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
