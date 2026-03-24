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
		DESCRIPTION: "Proyectos en los que he trabajado.",
		LIVE_SITE: "Visitar sitio",
		SOURCE_CODE: "Código fuente",
	},
} satisfies BaseTranslation;

export default es;
