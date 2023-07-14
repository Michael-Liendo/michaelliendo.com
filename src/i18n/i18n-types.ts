// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
	BaseTranslation as BaseTranslationType,
	LocalizedString,
	RequiredParams
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType;
export type BaseLocale = 'en';

export type Locales = 'en' | 'es';

export type Translation = RootTranslation;

export type Translations = RootTranslation;

type RootTranslation = {
	LAYOUT: {
		NAV: {
			/**
			 * H​o​m​e
			 */
			HOME: string;
			/**
			 * N​o​t​e​s
			 */
			NOTES: string;
		};
		FOOTER: {
			/**
			 * M​a​d​e​ ​w​i​t​h​ ​❤​️​ ​b​y​ ​M​i​c​h​a​e​l​ ​L​i​e​n​d​o​ ​©​ ​{​y​e​a​r​}
			 * @param {number} year
			 */
			COPYRIGHT: RequiredParams<'year'>;
		};
	};
	HOMEPAGE: {
		/**
		 * H​i​ ​I​'​m​ ​{​n​a​m​e​}​ ​{​s​u​r​n​a​m​e​}​,
		 * @param {string} name
		 * @param {string} surname
		 */
		HI: RequiredParams<'name' | 'surname'>;
		/**
		 * I​'​m​ ​a​ ​S​o​f​t​w​a​r​e​ ​D​e​v​e​l​o​p​e​r​ ​f​o​c​u​s​e​d​ ​o​n​ ​S​v​e​l​t​e​ ​a​n​d​ ​T​y​p​e​S​c​r​i​p​t​ ​w​i​t​h​ ​a​ ​p​a​s​s​i​o​n​ ​f​o​r​ ​W​e​b​ ​D​e​v​e​l​o​p​m​e​n​t​.​ ​I​ ​e​n​j​o​y​ ​w​o​r​k​i​n​g​ ​o​n​ ​c​h​a​l​l​e​n​g​i​n​g​ ​p​r​o​j​e​c​t​s​ ​a​n​d​ ​v​a​l​u​e​ ​c​o​l​l​a​b​o​r​a​t​i​o​n​ ​a​n​d​ ​p​r​o​b​l​e​m​-​s​o​l​v​i​n​g​.
		 */
		ABOUT: string;
		/**
		 * L​a​t​e​s​t​ ​N​o​t​e​s
		 */
		LATEST_NOTES: string;
	};
};

export type TranslationFunctions = {
	LAYOUT: {
		NAV: {
			/**
			 * Home
			 */
			HOME: () => LocalizedString;
			/**
			 * Notes
			 */
			NOTES: () => LocalizedString;
		};
		FOOTER: {
			/**
			 * Made with ❤️ by Michael Liendo © {year}
			 */
			COPYRIGHT: (arg: { year: number }) => LocalizedString;
		};
	};
	HOMEPAGE: {
		/**
		 * Hi I'm {name} {surname},
		 */
		HI: (arg: { name: string; surname: string }) => LocalizedString;
		/**
		 * I'm a Software Developer focused on Svelte and TypeScript with a passion for Web Development. I enjoy working on challenging projects and value collaboration and problem-solving.
		 */
		ABOUT: () => LocalizedString;
		/**
		 * Latest Notes
		 */
		LATEST_NOTES: () => LocalizedString;
	};
};

export type Formatters = {};
