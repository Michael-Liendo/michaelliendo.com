<script lang="ts">
  import { page } from '$app/stores';
  import type { MultiSelectEntity } from '$lib/services/Notion/Notes/notes';
  import Calendar from '~icons/mdi/calendar-month';

  export let title = '';
  export let description = '';
  export let publishDate: Date;
  export let tags: MultiSelectEntity[] = [];
  export let slug = '';
  export let previewImageUrl: string | null = '';

  let formattedDate = new Date(publishDate).toLocaleDateString(
    `${$page.data.locale}-us`,
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }
  );
</script>

<li class="mb-4 md:mb-0 last-of-type:mb-0">
  <a href="/{$page.params.lang}/notes/{slug}">
    <figure
      class="rounded overflow-hidden pb-4 flex justify-center items-center h-[150px]"
    >
      <img alt={title} src={previewImageUrl} width="350" height="100" />
    </figure>
    <header>
      <h1
        class="text-xl py-4 font-extrabold cursor-pointer hover:text-link hover:underline"
      >
        {title}
      </h1>
    </header>
    <main class="pb-4">
      <p>{description}</p>
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
            />
            {tag.name}
          </li>
        {/each}
      </ul>
    </footer>
  </a>
</li>
