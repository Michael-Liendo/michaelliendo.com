<script lang="ts">
import { locale } from "$i18n/i18n-svelte";
import { baseLocale } from "$i18n/i18n-util";
import { formatDate } from "$lib/utils";
import { Calendar, TagIcon } from "lucide-svelte";
import Tag from "./tag.svelte";

interface Props {
	title?: string;
	description?: string;
	date: string;
	tags?: string[];
	slug?: string;
	previewImageUrl?: string | null;
}

const {
	title = "",
	description = "",
	date,
	tags = [],
	slug = "",
	previewImageUrl = "",
}: Props = $props();

const baseLocaleUrl = $locale === baseLocale ? "" : `/${$locale}`;
</script>

<li class="mb-4 md:mb-0 last-of-type:mb-0">
  <a href="{baseLocaleUrl}/notes/{slug}">
    <figure class="rounded-md mb-4">
      {#if previewImageUrl}
        <img
          alt={title}
          class="rounded-md object-cover h-[220px]"
          src={previewImageUrl}
        />
      {/if}
    </figure>
    <header>
      <h1 class="text-xl font-extrabold hover:text-link hover:underline">
        {title}
      </h1>
    </header>
    <main class="pb-4">
      <p>{description || ''}</p>
    </main>
    <footer class="flex flex-col">
      <div class="flex mb-2">
        <span class="flex items-center mr-2">
          <figure class="mr-2">
            <Calendar class="text-gray-800 h-4 w-4" />
          </figure>
          <time
            class="text-sm mr-2"
            datetime={formatDate(date, undefined, $locale)}
            >{formatDate(date, undefined, $locale)}</time
          >
        </span>
      </div>
      <div class="flex items-center space-x-1.5">
        {#each tags as tag}
          <Tag>
            <TagIcon size={12} />
            <span>{tag}</span>
          </Tag>
        {/each}
      </div>
    </footer>
  </a>
</li>
