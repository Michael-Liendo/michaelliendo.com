<script lang="ts">
  import { locale } from '$i18n/i18n-svelte';
  import { baseLocale } from '$i18n/i18n-util';
  import { Calendar } from 'lucide-svelte';
  import Tag from './tag.svelte';

  interface Props {
    title?: string;
    description?: string;
    publishDate: Date;
    tags?: string[];
    slug?: string;
    previewImageUrl?: string | null;
  }

  const {
    title = '',
    description = '',
    publishDate,
    tags = [],
    slug = '',
    previewImageUrl = '',
  }: Props = $props();

  const baseLocaleUrl = $locale === baseLocale ? '' : `/${$locale}`;

  const formattedDate = new Date(publishDate).toLocaleDateString(
    `${$locale}-us`,
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
            <Calendar class="text-gray-800 h-4 w-4" />
          </figure>
          <time class="text-sm mr-2" datetime={publishDate.toString()}
            >{formattedDate}</time
          >
        </span>
      </div>
      <ul class="flex flex-wrap">
        {#each tags as tag}
          <Tag title={tag} />
        {/each}
      </ul>
    </footer>
  </a>
</li>
