// See https://kit.svelte.dev/docs/types#app

import type { Locales, TranslationFunctions } from '$i18n/i18n-types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: Locales;
			LL: TranslationFunctions;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
