import type { BaseTranslation } from "../i18n-types";

const es = {
	SEO: {
		TITLE: "Michael Liendo | Desarrollador de Software",
		DESCRIPTION:
			"Un Desarrollador de Software interesado en Programación de Sistemas y Desarrollo Web.",
		KEYWORDS:
			"michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas",
		IMAGE: "https://avatars.githubusercontent.com/u/70660410?v=4",
		NOTES: {
			TITLE: "Notas | Michael Liendo",
			DESCRIPTION: "Notas sobre aprendizajes y experiencias",
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
			DESCRIPTION: "Proyectos en los que he trabajado",
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
		ABOUT:
			"Soy un <strong>Desarrollador de Software</strong> enfocado en React.js y TypeScript apasionado por el <strong>Desarrollo de Aplicaciones Móviles y Páginas Web</strong>. Disfruto trabajar en proyectos desafiantes, valoro la colaboración y la resolución de problemas.",
		CTA_LABEL: '¿Te interesa trabajar conmigo o colaborar en un proyecto? hola@michaelliendo.com',
		CTA_BUTTON:'Contácteme por email',
		LATEST_NOTES: "Últimas notas",
	},
	NOTES: {
		NOTES: "Notas",
		DESCRIPTION: "Notas sobre aprendizajes, marcadores y experiencias",
		READ_MORE: "Leer más",
	},
	PROJECTS: {
		PROJECTS: "Proyectos",
		DESCRIPTION: "Proyectos en los que he trabajado.",
	},
} satisfies BaseTranslation;

export default es;
