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
  import { CalendarIcon, TagIcon } from '@lucide/svelte';
  import { locale } from '$i18n/i18n-svelte';
  import Tag from '../tag.svelte';

  import './styles/note.css';
  import './styles/prism-one-dark.css';
  import { formatDate } from '$lib/utils';

  let { title, description, date, preview_image_url, tags, children } =
    $props();
</script>

<div class="mx-auto w-full pb-12 pt-2">
  {#if preview_image_url}
    <figure
      class="mb-8 flex max-h-[320px] justify-center overflow-hidden rounded-2xl shadow-soft ring-1 ring-border md:max-h-[380px]"
    >
      <img
        class="h-full w-full object-cover"
        src={preview_image_url}
        alt={title}
      />
    </figure>
  {/if}
  <header
    class="border-b border-border pb-8 md:pb-10"
  >
    <h1 class="py-2 text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
      {title}
    </h1>

    <p class="mt-3 text-lg leading-relaxed text-ink-muted">
      {description}
    </p>

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

  <article
    class="note-container prose prose-invert prose-lg mt-8 max-w-none text-ink prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-ink-muted prose-strong:text-ink prose-a:text-link prose-a:no-underline hover:prose-a:underline"
  >
    {@render children()}
  </article>
</div>
