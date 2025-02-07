<script lang="ts">
  import { locale } from '$i18n/i18n-svelte';
  import Tag from './tag.svelte';

  const { title, description, publishDate, tags, slug } = $props();

  const langTags = ['python', 'rust', 'svelte', 'typescript'];

  const formattedDate = new Date(publishDate).toLocaleDateString(
    `${$locale}-us`,
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    },
  );

  const displayTags = tags
    .sort((a: string, _: string) => (langTags.includes(a) ? 0 : 1))
    .slice(0, 3);
</script>

<article class="self-start flex flex-col justify-start w-full col-span-4">
  <h3 class="text-lg md:text-xl hover:underline">
    <a href="/{$locale}/notes/{slug}">
      {title}
    </a>
  </h3>
  <p aria-label={description} class="py-1 text-sm truncate">
    {description}
  </p>
  <ul class="flex justify-start items-start flex-wrap gap-2 py-2">
    {#each displayTags as category}
      <Tag title={category} />
    {/each}
  </ul>
  <div class="flex">
    <span class="flex items-center">
      <time class="py-2 text-xs uppercase" datetime={publishDate.toString()}>
        {formattedDate}
      </time>
    </span>
  </div>
</article>
