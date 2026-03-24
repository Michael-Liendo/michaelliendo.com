<script lang="ts">
import { page } from "$app/state";
import type { Locales } from "$i18n/i18n-types";
import { baseLocale, locales } from "$i18n/i18n-util";
import { replaceLocaleInUrl } from "$lib/utils/locale";
import {
	PROFILE_IMAGE,
	SITE_NAME,
	SITE_ORIGIN,
	TWITTER_SITE,
} from "./site";

let {
	title,
	description,
	image = PROFILE_IMAGE,
	ogType = "website",
	keywords,
	publishedTime,
	modifiedTime,
	articleTags,
	imageAlt,
	jsonLd,
	locale,
}: {
	title: string;
	description: string;
	image?: string;
	ogType?: "website" | "article";
	keywords?: string;
	publishedTime?: string;
	modifiedTime?: string;
	articleTags?: string[];
	imageAlt?: string;
	jsonLd?: object | object[];
	locale: Locales;
} = $props();

const ogLocale = $derived(locale === "es" ? "es_ES" : "en_US");
const ogLocaleAlternate = $derived(locale === "es" ? "en_US" : "es_ES");

const pathname = $derived(
	page.url.pathname === "" ? "/" : page.url.pathname,
);

const canonical = $derived(`${SITE_ORIGIN}${pathname}`);

function alternateHref(lang: Locales): string {
	return `${SITE_ORIGIN}${replaceLocaleInUrl(page.url, lang, false)}`;
}

function safeJsonLd(data: object | object[]): string {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}

  <link rel="canonical" href={canonical} />

  {#each locales as lang}
    <link
      rel="alternate"
      hreflang={lang}
      href={alternateHref(lang as Locales)}
    />
  {/each}
  <link rel="alternate" hreflang="x-default" href={alternateHref(baseLocale)} />

  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={image} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={ogType} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  {#if imageAlt}
    <meta property="og:image:alt" content={imageAlt} />
  {/if}
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content={ogLocale} />
  <meta property="og:locale:alternate" content={ogLocaleAlternate} />

  {#if publishedTime}
    <meta property="article:published_time" content={publishedTime} />
  {/if}
  {#if modifiedTime}
    <meta property="article:modified_time" content={modifiedTime} />
  {/if}
  {#if articleTags}
    {#each articleTags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={TWITTER_SITE} />
  <meta name="twitter:creator" content={TWITTER_SITE} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  {#if imageAlt}
    <meta name="twitter:image:alt" content={imageAlt} />
  {/if}

  {#if jsonLd}
    {@html `<script type="application/ld+json">${safeJsonLd(jsonLd)}</script>`}
  {/if}
</svelte:head>
