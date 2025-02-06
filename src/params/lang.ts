import { isLocale } from "$i18n/i18n-util";
import type { ParamMatcher } from "@sveltejs/kit";

// Validate the param to accept only valid locales
export const match: ParamMatcher = (param) => {
	console.log(param);
	return isLocale(param);
};
