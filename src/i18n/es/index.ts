import type { BaseTranslation } from "../i18n-types";

const es = {
	SEO: {
		TITLE: "Michael Liendo | Desarrollador de Software",
		DESCRIPTION:
			"Un Desarrollador de Software interesado en Programación de Sistemas y Desarrollo Web.",
		KEYWORDS:
			"michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas",
		IMAGE: "https://avatars.githubusercontent.com/u/70660410?v=4",
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
			"Soy un <strong>Desarrollador de Software</strong> enfocado en Svelte y TypeScript apasionado por el <strong>Desarrollo de Aplicaciones Móviles y Páginas Web</strong>. Disfruto trabajar en proyectos desafiantes, valoro la colaboración y la resolución de problemas.",
		LATEST_NOTES: "Últimas notas",
	},
} satisfies BaseTranslation;

export default es;
