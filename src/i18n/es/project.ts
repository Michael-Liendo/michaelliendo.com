import type { Project } from "$lib/types/Project";

export default [
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
