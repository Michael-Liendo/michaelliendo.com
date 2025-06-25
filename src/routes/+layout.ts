import { setLocale } from "$i18n/i18n-svelte";
import { loadLocaleAsync } from "$i18n/i18n-util.async";

export const load = async ({ data: { locale } }) => {
	// Load dictionary into memory
	await loadLocaleAsync(locale);

	// You always need to call `setLocale` right before you access the `LL` store
	setLocale(locale);

	// Pass locale to the "render context"
	return { locale };
};
