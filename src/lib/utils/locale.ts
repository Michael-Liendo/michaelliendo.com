// Replaces the locale slug in a URL.
//
// If the `full` argument is set to `true`, the full URL is returned as a string.
// e.g. https://mywebsite.com/en/blog/article-1 => https://mywebsite.com/de/blog/article-1
//
// Otherwise (default) the URL relative to the base is returned.

import { baseLocale, locales } from "$i18n/i18n-util";

// e.g. https://mywebsite.com/en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = (
	url: URL,
	locale: string,
	full = false,
): string => {
	const [, ...rest] = url.pathname.split("/");
	const restPath = rest.filter(Boolean).join("/");

	let new_pathname: string;
	if (locale === baseLocale) {
		if ((locales as string[]).includes(rest[0])) {
			const withoutLocale = rest.slice(1).filter(Boolean).join("/");
			new_pathname = withoutLocale ? `/${withoutLocale}` : "/";
		} else {
			new_pathname = restPath ? `/${restPath}` : "/";
		}
	} else {
		if (rest[0] === locale) {
			new_pathname = restPath ? `/${restPath}` : `/${locale}`;
		} else {
			new_pathname = restPath ? `/${locale}/${restPath}` : `/${locale}`;
		}
	}

	if (!full) {
		return `${new_pathname}${url.search}`;
	}

	const newUrl = new URL(url.toString());
	newUrl.pathname = new_pathname;
	return newUrl.toString();
};

export const removeLocaleFromPath = (path: string): string => {
	const segments = path.split("/").filter(Boolean);

	if (segments.length > 0 && (segments[0] === "en" || segments[0] === "es")) {
		segments.shift();
	}

	return `/${segments.join("/")}`;
};
