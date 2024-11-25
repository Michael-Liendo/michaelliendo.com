<script lang="ts">
  import { run } from 'svelte/legacy';

  import { locale } from '$i18n/i18n-svelte';
  import Calendar from '~icons/mdi/calendar-month';

  import type { Project } from '$lib/services/Notion/Projects/project';

  interface Props {
    data: {
    projects: Project[];
  };
  }

  let { data }: Props = $props();

  let title = $state('Projects | Michael Liendo');
  let description =
    $state('projects taken while reading about computer science and software development.');
  let keywords =
    $state('projects, blog, articles, writing, content, topics, tips, insights, experiences, knowledge');
  let avatarUrl = 'https://avatars.githubusercontent.com/u/70660410?v=4';

  function formattedDate(date: Date): string {
    return new Date(date).toLocaleDateString(`${$locale}-us`, {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
  }

  run(() => {
    switch ($locale) {
      case 'en':
        title = 'Projects | Michael Liendo';
        description =
          'projects taken while reading about computer science and software development.';
        keywords =
          'projects, blog, articles, writing, content, topics, tips, insights, experiences, knowledge';
        break;
      case 'es':
        title = 'Proyectos | Michael Liendo';
        description =
          'Notas tomadas mientras leo sobre ciencias de la computación y desarrollo de software.';
        keywords =
          'notas, blog, artículos, escritura, contenido, temas, consejos, perspectivas, experiencias, conocimiento';
        break;
    }
  });
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

<ul
  class="max-w-6xl m-auto mt-10 flex flex-col md:grid md:grid-cols-3 md:gap-6 px-4 md:px-0"
>
  {#each data.projects as project}
    <li class="mb-4 md:mb-0 last-of-type:mb-0">
      <figure
        class="rounded overflow-hidden pb-4 flex justify-center items-center h-[250px]"
      >
        <img alt={project.title} src={project.cover} width="450" height="100" />
      </figure>
      <header>
        <h1
          class="text-xl mt-2 font-extrabold cursor-pointer hover:text-link hover:underline"
        >
          {project.title}
        </h1>
      </header>
      <main class="pb-2">
        <p>{project.description}</p>
      </main>
      <footer class="flex flex-col">
        <div class="flex mb-2">
          <span class="flex items-center mr-2">
            <figure class="mr-2">
              <Calendar class="text-gray-800 dark:text-white h-4 w-4" />
            </figure>
            <time class="text-sm mr-2" datetime={project.date.toString()}
              >{formattedDate(project.date)}</time
            >
          </span>
        </div>
        <ul class="flex flex-wrap">
          {#each project.tags as tag}
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
    </li>
  {/each}
</ul>
