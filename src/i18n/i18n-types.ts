// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'es'

export type Locales =
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	SEO: {
		/**
		 * M​i​c​h​a​e​l​ ​L​i​e​n​d​o​ ​|​ ​D​e​s​a​r​r​o​l​l​a​d​o​r​ ​d​e​ ​S​o​f​t​w​a​r​e
		 */
		TITLE: string
		/**
		 * U​n​ ​D​e​s​a​r​r​o​l​l​a​d​o​r​ ​d​e​ ​S​o​f​t​w​a​r​e​ ​i​n​t​e​r​e​s​a​d​o​ ​e​n​ ​P​r​o​g​r​a​m​a​c​i​ó​n​ ​d​e​ ​S​i​s​t​e​m​a​s​ ​y​ ​D​e​s​a​r​r​o​l​l​o​ ​W​e​b​.
		 */
		DESCRIPTION: string
		/**
		 * m​i​c​h​a​e​l​ ​l​i​e​n​d​o​,​ ​i​n​i​c​i​o​,​ ​n​o​t​a​s​,​ ​p​o​r​t​a​f​o​l​i​o​,​ ​d​e​s​a​r​r​o​l​l​a​d​o​r​ ​d​e​ ​s​o​f​t​w​a​r​e​,​ ​s​v​e​l​t​e​,​ ​t​y​p​e​s​c​r​i​p​t​,​ ​d​e​s​a​r​r​o​l​l​o​ ​w​e​b​,​ ​p​r​o​y​e​c​t​o​s​ ​d​e​s​a​f​i​a​n​t​e​s​,​ ​c​o​l​a​b​o​r​a​c​i​ó​n​,​ ​r​e​s​o​l​u​c​i​ó​n​ ​d​e​ ​p​r​o​b​l​e​m​a​s
		 */
		KEYWORDS: string
		/**
		 * h​t​t​p​s​:​/​/​a​v​a​t​a​r​s​.​g​i​t​h​u​b​u​s​e​r​c​o​n​t​e​n​t​.​c​o​m​/​u​/​7​0​6​6​0​4​1​0​?​v​=​4
		 */
		IMAGE: string
		NOTES: {
			/**
			 * N​o​t​a​s​ ​|​ ​M​i​c​h​a​e​l​ ​L​i​e​n​d​o
			 */
			TITLE: string
			/**
			 * N​o​t​a​s​ ​s​o​b​r​e​ ​a​p​r​e​n​d​i​z​a​j​e​s​ ​y​ ​e​x​p​e​r​i​e​n​c​i​a​s
			 */
			DESCRIPTION: string
			/**
			 * m​i​c​h​a​e​l​ ​l​i​e​n​d​o​,​ ​n​o​t​a​s​,​ ​a​p​r​e​n​d​i​z​a​j​e​s​,​ ​e​x​p​e​r​i​e​n​c​i​a​s​,​ ​s​v​e​l​t​e​,​ ​t​y​p​e​s​c​r​i​p​t​,​ ​d​e​s​a​r​r​o​l​l​o​ ​w​e​b​,​ ​c​o​l​a​b​o​r​a​c​i​ó​n​,​ ​r​e​s​o​l​u​c​i​ó​n​ ​d​e​ ​p​r​o​b​l​e​m​a​s
			 */
			KEYWORDS: string
		}
		NOTE: {
			/**
			 * {​t​i​t​l​e​}​ ​|​ ​N​o​t​a​s​ ​d​e​ ​M​i​c​h​a​e​l​ ​L​i​e​n​d​o
			 * @param {string} title
			 */
			TITLE: RequiredParams<'title'>
			/**
			 * {​d​e​s​c​r​i​p​t​i​o​n​}
			 * @param {string} description
			 */
			DESCRIPTION: RequiredParams<'description'>
			/**
			 * {​k​e​y​w​o​r​d​s​}
			 * @param {string} keywords
			 */
			KEYWORDS: RequiredParams<'keywords'>
		}
	}
	LAYOUT: {
		NAV: {
			/**
			 * I​n​i​c​i​o
			 */
			HOME: string
			/**
			 * N​o​t​a​s
			 */
			NOTES: string
			/**
			 * P​r​o​y​e​c​t​o​s
			 */
			PROJECTS: string
		}
		FOOTER: {
			/**
			 * H​e​c​h​o​ ​c​o​n​ ​❤​️​ ​p​o​r​ ​M​i​c​h​a​e​l​ ​L​i​e​n​d​o​ ​©​ ​{​s​t​a​r​t​Y​e​a​r​}​ ​-​ ​{​c​u​r​r​e​n​t​Y​e​a​r​}
			 * @param {number} currentYear
			 * @param {number} startYear
			 */
			COPYRIGHT: RequiredParams<'currentYear' | 'startYear'>
		}
	}
	HOMEPAGE: {
		/**
		 * H​o​l​a​ ​s​o​y​ ​{​n​a​m​e​}​ ​{​s​u​r​n​a​m​e​}​,
		 * @param {string} name
		 * @param {string} surname
		 */
		HI: RequiredParams<'name' | 'surname'>
		/**
		 * S​o​y​ ​u​n​ ​<​s​t​r​o​n​g​>​D​e​s​a​r​r​o​l​l​a​d​o​r​ ​d​e​ ​S​o​f​t​w​a​r​e​<​/​s​t​r​o​n​g​>​ ​e​n​f​o​c​a​d​o​ ​e​n​ ​S​v​e​l​t​e​ ​y​ ​T​y​p​e​S​c​r​i​p​t​ ​a​p​a​s​i​o​n​a​d​o​ ​p​o​r​ ​e​l​ ​<​s​t​r​o​n​g​>​D​e​s​a​r​r​o​l​l​o​ ​d​e​ ​A​p​l​i​c​a​c​i​o​n​e​s​ ​M​ó​v​i​l​e​s​ ​y​ ​P​á​g​i​n​a​s​ ​W​e​b​<​/​s​t​r​o​n​g​>​.​ ​D​i​s​f​r​u​t​o​ ​t​r​a​b​a​j​a​r​ ​e​n​ ​p​r​o​y​e​c​t​o​s​ ​d​e​s​a​f​i​a​n​t​e​s​,​ ​v​a​l​o​r​o​ ​l​a​ ​c​o​l​a​b​o​r​a​c​i​ó​n​ ​y​ ​l​a​ ​r​e​s​o​l​u​c​i​ó​n​ ​d​e​ ​p​r​o​b​l​e​m​a​s​.
		 */
		ABOUT: string
		/**
		 * Ú​l​t​i​m​a​s​ ​n​o​t​a​s
		 */
		LATEST_NOTES: string
	}
}

export type TranslationFunctions = {
	SEO: {
		/**
		 * Michael Liendo | Desarrollador de Software
		 */
		TITLE: () => LocalizedString
		/**
		 * Un Desarrollador de Software interesado en Programación de Sistemas y Desarrollo Web.
		 */
		DESCRIPTION: () => LocalizedString
		/**
		 * michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas
		 */
		KEYWORDS: () => LocalizedString
		/**
		 * https://avatars.githubusercontent.com/u/70660410?v=4
		 */
		IMAGE: () => LocalizedString
		NOTES: {
			/**
			 * Notas | Michael Liendo
			 */
			TITLE: () => LocalizedString
			/**
			 * Notas sobre aprendizajes y experiencias
			 */
			DESCRIPTION: () => LocalizedString
			/**
			 * michael liendo, notas, aprendizajes, experiencias, svelte, typescript, desarrollo web, colaboración, resolución de problemas
			 */
			KEYWORDS: () => LocalizedString
		}
		NOTE: {
			/**
			 * {title} | Notas de Michael Liendo
			 */
			TITLE: (arg: { title: string }) => LocalizedString
			/**
			 * {description}
			 */
			DESCRIPTION: (arg: { description: string }) => LocalizedString
			/**
			 * {keywords}
			 */
			KEYWORDS: (arg: { keywords: string }) => LocalizedString
		}
	}
	LAYOUT: {
		NAV: {
			/**
			 * Inicio
			 */
			HOME: () => LocalizedString
			/**
			 * Notas
			 */
			NOTES: () => LocalizedString
			/**
			 * Proyectos
			 */
			PROJECTS: () => LocalizedString
		}
		FOOTER: {
			/**
			 * Hecho con ❤️ por Michael Liendo © {startYear} - {currentYear}
			 */
			COPYRIGHT: (arg: { currentYear: number, startYear: number }) => LocalizedString
		}
	}
	HOMEPAGE: {
		/**
		 * Hola soy {name} {surname},
		 */
		HI: (arg: { name: string, surname: string }) => LocalizedString
		/**
		 * Soy un <strong>Desarrollador de Software</strong> enfocado en Svelte y TypeScript apasionado por el <strong>Desarrollo de Aplicaciones Móviles y Páginas Web</strong>. Disfruto trabajar en proyectos desafiantes, valoro la colaboración y la resolución de problemas.
		 */
		ABOUT: () => LocalizedString
		/**
		 * Últimas notas
		 */
		LATEST_NOTES: () => LocalizedString
	}
}

export type Formatters = {}
