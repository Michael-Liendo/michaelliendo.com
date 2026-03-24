import type { BaseTranslation } from "../i18n-types";

const es = {
	SEO: {
		TITLE: "Michael Liendo | Desarrollador de Software",
		DESCRIPTION:
			"Michael Liendo — desarrolla software web y móvil con React y TypeScript, e integra IA y automatizaciones para que equipos trabajen más rápido y con menos fricción. Notas técnicas y proyectos. hola@michaelliendo.com",
		KEYWORDS:
			"michael liendo, desarrollador software, react, typescript, ia, automatización, desarrollo web, apps móviles, backend, productividad, colaboración",
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
		HERO_HEADLINE: "Soy Michael Liendo — desarrollo software que elimina trabajo repetitivo",
		HERO_LEAD:
			"React, TypeScript, apps móviles y backends, con IA y automatizaciones cuando de verdad simplifican el día a día de equipos y negocios. Me mueven los retos difíciles, la comunicación clara y el código que sigue siendo útil dentro de un año.",
		LOCATION: "Remoto",
		TIMEZONE: "UTC−5",
		STACK_TITLE: "Stack principal",
		ABOUT:
			"Soy <strong>desarrollador de software</strong> con foco en React y TypeScript. Construyo <strong>aplicaciones web y móviles, backends, integraciones con IA y automatizaciones</strong> para que la gente dedique menos tiempo a tareas manuales y más a crear valor. Me gustan los proyectos exigentes, trabajar en equipo con claridad y resolver problemas de fondo.",
		CTA_LABEL:
			"¿Producto nuevo, IA o automatizar un proceso? Escríbeme: hola@michaelliendo.com",
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
