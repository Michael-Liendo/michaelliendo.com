<script lang="ts">
import { page } from "$app/state";
import LL, { locale } from "$i18n/i18n-svelte";
import SeoMeta from "$lib/seo/SeoMeta.svelte";
import { SITE_NAME, SITE_ORIGIN } from "$lib/seo/site";

const { data } = $props();

const note = $derived(data.note);

const publishedIso = $derived(new Date(note.date).toJSON());

const noteKeywords = $derived(
	`${note.title}, ${note.description}, ${note.tags.join(", ")}`,
);

const noteJsonLd = $derived({
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: note.title,
	description: note.description,
	image: note.preview_image_url,
	datePublished: publishedIso,
	dateModified: publishedIso,
	author: {
		"@type": "Person",
		name: "Michael Liendo",
		url: SITE_ORIGIN,
	},
	publisher: { "@type": "Person", name: SITE_NAME },
	mainEntityOfPage: {
		"@type": "WebPage",
		"@id": `${SITE_ORIGIN}${page.url.pathname}`,
	},
	keywords: note.tags.join(", "),
});
</script>

<SeoMeta
	title={$LL.SEO.NOTE.TITLE({ title: note.title })}
	description={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
	image={note.preview_image_url}
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
