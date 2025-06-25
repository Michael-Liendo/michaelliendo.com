<script lang="ts" module>
import a from "./custom/a.svelte";
import blockquote from "./custom/blockquote.svelte";
import h2 from "./custom/h2.svelte";
import h3 from "./custom/h3.svelte";
import img from "./custom/img.svelte";
import table from "./custom/table.svelte";
import td from "./custom/td.svelte";
import th from "./custom/th.svelte";

export { a, blockquote, h2, h3, img, table, th, td };
</script>

<script lang="ts">
  import { CalendarIcon, TagIcon } from 'lucide-svelte';
  import { locale } from '$i18n/i18n-svelte';
  import Tag from '../tag.svelte';

  import './styles/note.css';
  import './styles/prism-one-dark.css';
  import { formatDate } from '$lib/utils';

  let { title, description, date, preview_image_url, tags, children } =
    $props();
</script>

<svelte:head>
  <title>{title} | Michael Liendo</title>
  <meta name="description" content={description} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={preview_image_url} />
  <!-- Open Graph data -->
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://michaelliendo.com/" />
  <meta property="og:image" content={preview_image_url} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="Michael Liendo" />
  <meta property="article:published_time" content={formatDate(date)} />
  <meta property="article:modified_time" content={formatDate(date)} />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@mykeliendo" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:creator" content="@mykeliendo" />
  <meta name="twitter:image:src" content={preview_image_url} />
</svelte:head>

<div class="w-full md:max-w-[800px] mx-auto pb-6">
  {#if preview_image_url}
    <figure
      class="flex justify-center items-center overflow-hidden rounded h-[300px]"
    >
      <img class="w-full" src={preview_image_url} alt={title} />
    </figure>
  {/if}
  <header
    class="border-b border-neutral-300 py-3 dark:border-neutral-800 md:py-5"
  >
    <h1 class="text-3xl py-4 font-semibold text-pretty">{title}</h1>

    <p class="text-neutral-800 dark:text-neutral-400">{description}</p>

    <div class="space-y-3 mt-2">
      <Tag>
        <CalendarIcon size={12} />
        <time datetime={date} title="Published">
          {formatDate(date, undefined, $locale)}
        </time>
      </Tag>
      <div class="flex items-center space-x-[6px]">
        {#each tags as category}
          <Tag>
            <TagIcon size={12} />
            <span>{category}</span>
          </Tag>
        {/each}
      </div>
    </div>
  </header>

  <article class="mt-3 prose w-full md:max-w-[1000px] note-container">
    {@render children()}
  </article>
</div>
