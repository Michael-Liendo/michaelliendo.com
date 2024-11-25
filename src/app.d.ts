/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app

import type { Locales, TranslationFunctions } from '$i18n/i18n-types';

// for information about these interfaces
declare global {
  /**
   * Timestamp Generated during building date
   */
  declare const __BUILD_DATE__: string;
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
