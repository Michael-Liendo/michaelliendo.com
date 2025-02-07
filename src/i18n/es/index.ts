import type { Project } from "$lib/types/Project";
import type { BaseTranslation } from "../i18n-types";
const projects = [
	{
		name: "TownHall",
		description:
			"Es un proyecto colaborativo para desarrolladores de Rust de nivel principiante a intermedio. Estamos aprendiendo haciendo, creando una plataforma comunitaria inspirada en Reddit y la plataforma de microblogging X (anteriormente Twitter).",
		repo_url: "https://github.com/TownHallHQ/TownHall",
		tags: ["rust", "community"],
		date: "2024-11-05",
	},
	{
		name: "Url Status Checker CLI",
		description:
			"Limpia las URL de un archivo de entrada y verifica sus códigos de estado. Las URL limpias y sus códigos de estado se almacenan en un archivo de salida.",
		repo_url: "https://github.com/Michael-Liendo/url-status-checker",
		tags: ["rust", "url", "status"],
		date: "2024-01-13",
	},
	{
		name: "Underground",
		description:
			"Esta es una aplicación de chat que permite a los usuarios crear salas de chat e invitar a otros a unirse.",
		repo_url: "https://github.com/Michael-Liendo/underground",
		preview_url: "https://underground.michaelliendo.com/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-12-10",
	},
	{
		name: "Backust",
		description:
			"Un sistema de respaldo simple para copiar archivos y directorios a un directorio de respaldo.",
		repo_url: "https://github.com/Michael-Liendo/backust",
		tags: ["svelte", "rust", "typescript", "sveltekit", "chat"],
		date: "2023-09-29",
	},
	{
		name: "Cherrie",
		description:
			"Este proyecto es una tienda virtual desarrollada con SvelteKit y TypeScript. En la tienda, los usuarios pueden explorar diferentes categorías de productos, agregar productos a su carrito y completar una compra.",
		repo_url: "https://github.com/Michael-Liendo/cherrie",
		preview_url: "https://cherrie.lat/",
		tags: ["svelte", "rust", "typescript", "sveltekit", "store"],
		date: "2023-02-10",
	},
	{
		name: "Novabits",
		description:
			"La página de aterrizaje para un negocio de desarrollo con una sección de contacto.",
		repo_url: "https://github.com/Michael-Liendo/novabits",
		preview_url: "https://novabits.michaelliendo.com/",
		tags: ["nextjs", "typescript", "landing"],
		date: "2023-05-11",
	},
	{
		name: "CloudHub",
		description:
			"Almacenamiento en la nube personal que te permite guardar, sincronizar y compartir tus archivos de manera segura y accesible desde cualquier lugar.",
		repo_url: "https://github.com/Michael-Liendo/cloudhub",
		tags: ["svelte", "typescript", "sveltekit", "cloud"],
		date: "2022-10-01",
	},
] satisfies Project[];

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
	PROJECT: {
		TITLE: "Proyectos | Michael Liendo",
		DESCRIPTION: "Proyectos en los que he trabajado",
		PROJECTS: projects,
	},
} satisfies BaseTranslation;

export default es;
