<script lang="ts">
import LL, { locale } from "$i18n/i18n-svelte";
import { formatDate } from "$lib/utils";
import { CalendarIcon, ChevronRightIcon, TagIcon } from "@lucide/svelte";
import Tag from "./tag.svelte";

const { title, description, date, tags, slug } = $props();

const langTags = ["python", "rust", "svelte", "typescript"];

const note = $derived({ title, description, date, tags, slug });

const displayTags = $derived(
	[...tags]
		.sort((a: string, _: string) => (langTags.includes(a) ? 0 : 1))
		.slice(0, 3),
);
</script>

<article
  class="w-full rounded-2xl border border-border bg-surface-elevated p-4 shadow-soft transition hover:border-accent/35 hover:shadow-soft-lg md:p-5"
>
  <div class="mb-3 flex flex-col gap-1">
    <a
      href="/{$locale}/notes/{slug}"
      class="text-md group/title flex items-center gap-2 font-semibold text-ink decoration-dotted underline-offset-4 transition hover:text-link hover:underline md:text-lg"
    >
      <span>{note.title}</span>
      <ChevronRightIcon
        size={14}
        class="block shrink-0 text-ink-muted transition group-hover/title:translate-x-0.5 md:hidden"
      />
    </a>
    <p class="text-pretty text-sm leading-relaxed text-ink-muted">
      {note.description}
    </p>
  </div>
  <div class="flex w-full items-center justify-between gap-3">
    <div class="flex min-w-0 flex-wrap items-center gap-1.5">
      {#each displayTags as tag}
        <Tag>
          <TagIcon size={12} />
          <span>{tag}</span>
        </Tag>
      {/each}

      <Tag>
        <CalendarIcon size={12} />
        <time datetime={formatDate(note.date, undefined, $locale)}>
          {formatDate(note.date, undefined, $locale)}
        </time>
      </Tag>
    </div>
    <a
      href="/{$locale}/notes/{slug}"
      class="group hidden shrink-0 items-center gap-1 text-sm font-medium text-link transition hover:text-link-hover md:flex"
    >
      <span>{$LL.NOTES.READ_MORE()}</span>
      <ChevronRightIcon
        size={16}
        class="transition group-hover:translate-x-0.5"
      />
    </a>
  </div>
</article>
