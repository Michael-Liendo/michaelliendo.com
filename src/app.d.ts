// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { Locales, TranslationFunctions } from "$i18n/i18n-types";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: Locales;
			LL: TranslationFunctions;
		}
		interface PageData {
			locale: Locales;
			LL: TranslationFunctions;
		} // interface PageState {}
		// interface Platform {}
	}
}

// biome-ignore lint/complexity/noUselessEmptyExport: <explanation>
export {};
