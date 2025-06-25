<script lang="ts">
import LL, { locale } from "$i18n/i18n-svelte";
import { formatDate } from "$lib/utils";
import { CalendarIcon, ChevronRightIcon, TagIcon } from "lucide-svelte";
import Tag from "./tag.svelte";

const { title, description, date, tags, slug } = $props();

const note = { title, description, date, tags, slug };

const langTags = ["python", "rust", "svelte", "typescript"];

const displayTags = tags
	.sort((a: string, _: string) => (langTags.includes(a) ? 0 : 1))
	.slice(0, 3);
</script>

<article
  class="w-full rounded-md border border-neutral-300 p-3 dark:border-neutral-800"
>
  <div class="mb-3 flex flex-col space-y-1">
    <a
      href="/{$locale}/notes/{slug}"
      class="text-md flex items-center space-x-2 font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] duration-150 hover:underline hover:opacity-80 md:text-lg"
    >
      <span>{note.title}</span>
      <ChevronRightIcon
        size={14}
        class="block flex-shrink-0 text-neutral-500 dark:text-neutral-400 md:hidden"
      />
    </a>
    <p class="text-pretty text-sm dark:text-neutral-400">
      {note.description}
    </p>
  </div>
  <div class="flex w-full items-center justify-between">
    <div class="flex items-center space-x-1.5">
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
      class="group hidden items-center space-x-[4px] text-sm tracking-tight opacity-70 transition-opacity duration-100 hover:opacity-100 md:flex"
    >
      <span>{$LL.NOTES.READ_MORE()}</span>
      <ChevronRightIcon
        size={16}
        class="duration-150 group-hover:translate-x-[2px]"
      />
    </a>
  </div>
</article>
