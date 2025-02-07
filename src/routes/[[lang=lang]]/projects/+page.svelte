<script>
  import en_projects from '$i18n/en/project';
  import es_projects from '$i18n/es/project';
  import LL, { locale } from '$i18n/i18n-svelte';
  import Tag from '$lib/components/tag.svelte';
  import { Github } from 'lucide-svelte';

  const projects = $locale === 'en' ? en_projects : es_projects;
</script>

<svelte:head>
  <title>{$LL.SEO.PROJECT.TITLE()}</title>
  <meta name="description" content={$LL.SEO.PROJECT.DESCRIPTION()} />
  <meta name="keywords" content={$LL.SEO.PROJECT.KEYWORDS()} />
  <link rel="canonical" href={`https://michaelliendo.com/projects`} />

  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={$LL.SEO.PROJECT.TITLE()} />
  <meta itemprop="description" content={$LL.SEO.PROJECT.DESCRIPTION()} />
  <meta itemprop="image" content={$LL.SEO.IMAGE()} />
  <!-- Open Graph data -->
  <meta property="og:title" content={$LL.SEO.PROJECT.TITLE()} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://michaelliendo.com/projects" />
  <meta property="og:image" content={$LL.SEO.IMAGE()} />
  <meta property="og:description" content={$LL.SEO.PROJECT.DESCRIPTION()} />
  <meta property="og:site_name" content="Michael Liendo" />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@mykeliendo" />
  <meta name="twitter:title" content={$LL.SEO.PROJECT.TITLE()} />
  <meta name="twitter:description" content={$LL.SEO.PROJECT.DESCRIPTION()} />
  <meta name="twitter:creator" content="@mykeliendo" />
  <meta name="twitter:image:src" content={$LL.SEO.IMAGE()} />
</svelte:head>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each projects as project}
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          {project.name}
        </h2>
        <p class="mt-1 text-sm text-gray-600">
          {project.description}
        </p>
        <ul class="mt-4 flex flex-wrap gap-2">
          {#each project.tags as tag}
            <Tag title={tag} />
          {/each}
        </ul>
      </div>
      <div class="px-4 py-4 sm:px-6 flex justify-between">
        {#if project.repo_url}
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            aria-label="GitHub Repository"
          >
            <Github aria-hidden="true" />
            <span class="sr-only">GitHub Repository</span>
          </a>
        {/if}
        {#if project.preview_url}
          <a
            href={project.preview_url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            aria-label="Live Demo"
          >
            Live Demo
            <span class="sr-only">opens in a new tab</span>
          </a>
        {/if}
      </div>
    </div>
  {/each}
</div>
