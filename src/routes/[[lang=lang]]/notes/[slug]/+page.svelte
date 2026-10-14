<script lang="ts">
import { page } from "$app/state";
import LL, { locale } from "$i18n/i18n-svelte";
import SeoMeta from "$lib/seo/SeoMeta.svelte";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "$lib/seo/site";
import { baseLocale } from "$i18n/i18n-util";

const { data } = $props();

const note = $derived(data.note);

const publishedIso = $derived(new Date(note.date).toJSON());

const noteKeywords = $derived(
	`${note.title}, ${note.description}, ${note.tags.join(", ")}`,
);

// Notes without a cover fall back to the site share card.
const image = $derived(note.preview_image_url ?? OG_IMAGE[$locale]);
const prefix = $derived($locale === baseLocale ? "" : `/${$locale}`);

const noteJsonLd = $derived({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "BlogPosting",
			headline: note.title,
			description: note.description,
			image,
			inLanguage: $locale,
			datePublished: publishedIso,
			dateModified: publishedIso,
			author: {
				"@type": "Person",
				"@id": `${SITE_ORIGIN}/#person`,
				name: "Michael Liendo",
				url: `${SITE_ORIGIN}/`,
			},
			publisher: { "@id": `${SITE_ORIGIN}/#person`, name: SITE_NAME },
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": `${SITE_ORIGIN}${page.url.pathname}`,
			},
			keywords: note.tags.join(", "),
		},
		{
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Michael Liendo", item: `${SITE_ORIGIN}${prefix}/` },
				{ "@type": "ListItem", position: 2, name: $LL.NOTES.NOTES(), item: `${SITE_ORIGIN}${prefix}/notes` },
				{ "@type": "ListItem", position: 3, name: note.title, item: `${SITE_ORIGIN}${page.url.pathname}` },
			],
		},
	],
});
</script>

<SeoMeta
	title={$LL.SEO.NOTE.TITLE({ title: note.title })}
	description={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
	{image}
	ogType="article"
	keywords={$LL.SEO.NOTE.KEYWORDS({ keywords: noteKeywords })}
	locale={$locale}
	publishedTime={publishedIso}
	modifiedTime={publishedIso}
	articleTags={note.tags}
	imageAlt={note.title}
	jsonLd={noteJsonLd}
/>

{#if note}
  {@const Component = note.content}
  <Component />
{/if}
