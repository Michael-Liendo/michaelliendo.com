import type { BaseTranslation } from '../i18n-types';

const es = {
	LAYOUT: {
		NAV: {
			HOME: 'Inicio',
			NOTES: 'Notas'
		},
		FOOTER: {
			COPYRGHT: `Hecho por Michael Liendo © {start:number} - {end:number}`
		}
	},
	HOMEPAGE: {
		HI: `Hola soy {name:string} {surname:string},`,
		ABOUT: `Soy un Desarrollador de Software enfocado en React y TypeScript apasionado por el Desarrollo Web. Disfruto trabajar en proyectos desafiantes y valoro la colaboración y la resolución de problemas.`,
		LATEST_NOTES: 'Últimas notas'
	}
} satisfies BaseTranslation;

export default es;
