<script lang="ts">
import { page } from "$app/state";
import LL, { locale } from "$i18n/i18n-svelte";
import Entry from "$lib/components/entry.svelte";
import SeoMeta from "$lib/seo/SeoMeta.svelte";
import { SITE_NAME, SITE_ORIGIN } from "$lib/seo/site";
import type { PageProps } from "./$types";

const { data }: PageProps = $props();

const notesJsonLd = $derived({
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: $LL.SEO.NOTES.TITLE(),
	description: $LL.SEO.NOTES.DESCRIPTION(),
	url: `${SITE_ORIGIN}${page.url.pathname}`,
	isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_ORIGIN}/` },
});
</script>

<SeoMeta
	title={$LL.SEO.NOTES.TITLE()}
	description={$LL.SEO.NOTES.DESCRIPTION()}
	image={$LL.SEO.IMAGE()}
	ogType="website"
	keywords={$LL.SEO.NOTES.KEYWORDS()}
	locale={$locale}
	imageAlt={$LL.SEO.NOTES.TITLE()}
	jsonLd={notesJsonLd}
/>

<div class="mt-4 w-full">
  <h1
    class="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
  >
    {$LL.NOTES.NOTES()}
  </h1>

  <p class="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted sm:mt-4">
    {$LL.NOTES.DESCRIPTION()}
  </p>

  <ul class="mt-12 flex flex-col sm:mt-16">
  {#each data.notes as note}
    <Entry
      title={note.title}
      description={note.description}
      date={note.date}
      tags={note.tags}
      slug={note.slug!}
      previewImageUrl={note.preview_image_url}
    />
  {/each}
  </ul>
</div>
