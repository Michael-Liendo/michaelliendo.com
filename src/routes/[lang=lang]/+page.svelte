<script lang="ts">
  import Calendar from '~icons/mdi/calendar-month';
  import { page } from '$app/stores';
  import LL, { locale } from '$i18n/i18n-svelte';
  import SocialMedia from '$lib/components/SocialMedia.svelte';

  import type { Note } from '$lib/utils/Notion/Notes/types';

  export let data: {
    notes: Note[];
  };

  let title = 'Michael Liendo | Software Developer';
  let description =
    'A Software Developer interested in Systems Programming and Web Development.';
  let keywords =
    'michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving';
  let avatarUrl = 'https://avatars.githubusercontent.com/u/70660410?v=4';

  $: {
    switch ($locale) {
      case 'en':
        title = 'Michael Liendo | Software Developer';
        description =
          'A Software Developer interested in Systems Programming and Web Development.';
        keywords =
          'michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving';

        break;
      case 'es':
        title = 'Michael Liendo | Desarrollador de Software';
        description =
          'Un Desarrollador de Software interesado en Programación de Sistemas y Desarrollo Web.';
        keywords =
          'michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas';
        break;
    }
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={avatarUrl} />
  <!-- Open Graph data -->
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://michaelliendo.com/" />
  <meta property="og:image" content={avatarUrl} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="Michael Liendo" />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MichaelMLiendo" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:creator" content="@MichaelMLiendo" />
  <meta name="twitter:image:src" content={avatarUrl} />
</svelte:head>

<section
  class="flex flex-col-reverse md:flex-row md:justify-between md:items-center mt-10"
  itemscope
  itemtype="http://schema.org/Person"
>
  <div class="space-y-3 w-full">
    <h1
      class="mt-4 md:mt-0 text-4xl xl:text-7xl text-ellipsis font-bold"
      itemprop="name"
    >
      Michael Liendo
    </h1>
    <p
      class="md:text-xl xl:text-2xl xl:w-[50rem] text-pretty"
      itemprop="description"
    >
      {@html $LL.HOMEPAGE.ABOUT()}
    </p>
    <div class="flex justify-between">
      <SocialMedia />
      <!-- Call to action
        <a
        href="/"
        class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Call Action
      </a> -->
    </div>
  </div>
  <div class="w-full md:flex justify-end">
    <figure>
      <img
        src={avatarUrl}
        alt="Michael Liendo Avatar"
        width="384"
        height="384"
        title="Michael Liendo profile picture at GitHub."
        class="rounded w-full xl:w-96 h-96 object-cover"
        itemprop="image"
      />
    </figure>
  </div>
</section>

<section class="flex flex-col mx-4 my-4">
  <div>
    <h2 class="text-xl font-bold mb-4">{$LL.HOMEPAGE.LATEST_NOTES()}</h2>
    <ul class="space-y-2">
      {#each data.notes.filter( (note) => note.tags?.some((tag) => tag.name === 'programming' || tag.name == 'programación') ) as note}
        <li title={note.title}>
          <a
            href="/{$page.params.lang}/notes/{note.slug}"
            class="py-2 flex items-center justify-between rounded hover:bg-light-background dark:hover:bg-dark-background cursor-pointer mb-4 last-of-type:mb-0"
          >
            <div class="pl-2 flex items-center">
              <figure class="w-[18px] h-[18px] self-center">
                {#if note.icon?.external?.url}
                  <img
                    src={note.icon?.external?.url}
                    width="40"
                    height="40"
                    alt={note.icon?.external?.url}
                  />
                {:else}
                  {note.icon?.emoji || ' '}
                {/if}
              </figure>
              <span class="px-4">
                {note.title}
              </span>
            </div>
            <span class="hidden md:flex items-center md:w-[220px] text-left">
              <figure class="pr-2">
                <Calendar
                  class="text-gray-800 dark:text-white w-[18px] h-[18px]"
                />
              </figure>
              <time
                class="text-sm mr-2"
                dateTime={new Date(note.date).toString()}
              >
                {new Date(note.date).toLocaleDateString(
                  `${$page.data.locale}-us`,
                  {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                  }
                )}
              </time></span
            >
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .text-pretty {
    text-wrap: pretty;
  }
</style>
