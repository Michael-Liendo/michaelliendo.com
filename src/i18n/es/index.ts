import type { BaseTranslation } from '../i18n-types';

const es = {
  LAYOUT: {
    NAV: {
      HOME: 'Inicio',
      NOTES: 'Notas',
      PROJECTS: 'Proyectos',
    },
    FOOTER: {
      COPYRIGHT: 'Hecho con ❤️ por Michael Liendo © {year:number}',
    },
  },
  HOMEPAGE: {
    HI: 'Hola soy {name:string} {surname:string},',
    ABOUT:
      'Soy un Desarrollador de Software enfocado en Svelte y TypeScript apasionado por el Desarrollo Web. Disfruto trabajar en proyectos desafiantes y valoro la colaboración y la resolución de problemas.',
    LATEST_NOTES: 'Últimas notas',
  },
} satisfies BaseTranslation;

export default es;
