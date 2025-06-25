<script lang="ts">
import LL from "$i18n/i18n-svelte";

const { data } = $props();

const note = data.note;
</script>

<svelte:head>
  <title>{$LL.SEO.NOTE.TITLE({ title: note.title })}</title>
  <meta
    name="description"
    content={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
  />
  <meta
    name="keywords"
    content={$LL.SEO.NOTE.KEYWORDS({
      keywords: `${note.title}, ${note.description}, ${note.tags.join(', ')}`,
    })}
  />
  <meta itemprop="name" content={$LL.SEO.NOTE.TITLE({ title: note.title })} />
  <meta
    itemprop="description"
    content={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
  />
  <meta itemprop="image" content={note.preview_image_url} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={$LL.SEO.NOTE.TITLE({ title: note.title })} />
  <meta
    itemprop="description"
    content={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
  />
  <meta itemprop="image" content={note.preview_image_url} />
  <!-- Open Graph data -->
  <meta
    property="og:title"
    content={$LL.SEO.NOTE.TITLE({ title: note.title })}
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://michaelliendo.com/" />
  <meta
    property="og:description"
    content={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
  />
  <meta property="og:image" content={note.preview_image_url} />
  <meta property="og:site_name" content="Michael Liendo" />
  <meta
    property="article:published_time"
    content={new Date(note.date).toJSON()}
  />
  <meta
    property="article:modified_time"
    content={new Date(note.date).toJSON()}
  />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@mykeliendo" />
  <meta
    name="twitter:title"
    content={$LL.SEO.NOTE.TITLE({ title: note.title })}
  />
  <meta
    name="twitter:description"
    content={$LL.SEO.NOTE.DESCRIPTION({ description: note.description })}
  />
  <meta name="twitter:creator" content="@mykeliendo" />
  <meta name="twitter:image:src" content={note.preview_image_url} />
</svelte:head>

{#if note}
  {@const Component = note.content}
  <Component />
{/if}
