import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';

import type { LayoutLoad } from './$types';
import type { Locales } from '$i18n/i18n-types';

export const load: LayoutLoad<{ locale: Locales }> = async ({
  data: { locale },
}) => {
  // Load dictionary into memory
  await loadLocaleAsync(locale);

  // You always need to call `setLocale` right before you access the `LL` store
  setLocale(locale);

  // Pass locale to the "render context"
  return { locale };
};
