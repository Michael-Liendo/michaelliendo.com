<script lang="ts">
import LL from "$i18n/i18n-svelte";
import Entry from "$lib/components/entry.svelte";
import type { PageProps } from "./$types";

const { data }: PageProps = $props();
</script>


<svelte:head>
  <title>{$LL.SEO.NOTES.TITLE()}</title>
  <meta name="description" content={$LL.SEO.NOTES.DESCRIPTION()} />
  <meta name="keywords" content={$LL.SEO.NOTES.KEYWORDS()} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={$LL.SEO.NOTES.TITLE()} />
  <meta itemprop="description" content={$LL.SEO.NOTES.DESCRIPTION()} />
  <meta itemprop="image" content={$LL.SEO.IMAGE()} />
  <!-- Open Graph data -->
    <meta property="og:title" content={$LL.SEO.NOTES.TITLE()} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://michaelliendo.com/" />
    <meta property="og:image" content={$LL.SEO.IMAGE()} />
    <meta property="og:description" content={$LL.SEO.NOTES.DESCRIPTION()} />
    <meta property="og:site_name" content="Michael Liendo" />
  <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@mykeliendo" />
    <meta name="twitter:title" content={$LL.SEO.NOTES.TITLE()} />
    <meta name="twitter:description" content={$LL.SEO.NOTES.DESCRIPTION()} />
    <meta name="twitter:creator" content="@mykeliendo" />
    <meta name="twitter:image:src" content={$LL.SEO.IMAGE()} />
</svelte:head>


<ul
  class="max-w-6xl m-auto mt-10 flex flex-col md:grid md:grid-cols-3 md:gap-6 md:px-0"
>
  {#each data.notes as note}
    <Entry
      title={note.title}
      description={note.description}
      publishDate={new Date(note.date)}
      tags={note.tags}
      slug={note.slug!}
      previewImageUrl={note.preview_image_url}
    />
  {/each}
</ul>
