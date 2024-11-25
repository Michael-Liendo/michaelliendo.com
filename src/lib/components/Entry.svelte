<script lang="ts">
  import { page } from '$app/stores';
  import { locale } from '$i18n/i18n-svelte';
  import Calendar from '~icons/mdi/calendar-month';
  import { baseLocale } from '$i18n/i18n-util';

  import type { MultiSelectEntity } from '$lib/services/Notion/Notes/notes';

  interface Props {
    title?: string;
    description?: string;
    publishDate: Date;
    tags?: MultiSelectEntity[];
    slug?: string;
    previewImageUrl?: string | null;
  }

  let {
    title = '',
    description = '',
    publishDate,
    tags = [],
    slug = '',
    previewImageUrl = '',
  }: Props = $props();

  const baseLocaleUrl = $locale === baseLocale ? '' : `/${$locale}`;

  let formattedDate = new Date(publishDate).toLocaleDateString(
    `${$page.data.locale}-us`,
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    },
  );
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
            <Calendar class="text-gray-800 dark:text-white h-4 w-4" />
          </figure>
          <time class="text-sm mr-2" datetime={publishDate.toString()}
            >{formattedDate}</time
          >
        </span>
      </div>
      <ul class="flex flex-wrap">
        {#each tags as tag}
          <li
            class="text-sm mr-2 mb-2 bg-light-background dark:bg-dark-background rounded py-1 px-2"
          >
            <span
              class="inline-block mr-1 rounded-full h-2 w-2"
              style="background-color: {tag.color};"
            ></span>
            {tag.name}
          </li>
        {/each}
      </ul>
    </footer>
  </a>
</li>
