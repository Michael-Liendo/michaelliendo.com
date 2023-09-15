/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app

import type { Locales, TranslationFunctions } from '$i18n/i18n-types';

/**
 * Timestamp Generated during building date
 */
declare const __BUILD_DATE__: string;

// for information about these interfaces
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
    }
    // interface Platform {}
  }
}

export {};
