<script>
  import { en_projects } from '$i18n/en';
  import { es_projects } from '$i18n/es';
  import LL, { locale } from '$i18n/i18n-svelte';
  import { Github } from 'lucide-svelte';

  const projects = $locale === 'en' ? en_projects : es_projects;
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each projects as project}
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {project.name}
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          {project.description}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each project.tags as tag}
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          {/each}
        </div>
      </div>
      <div class="px-4 py-4 sm:px-6 flex justify-between">
        {#if project.repo_url}
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <Github />
          </a>
        {/if}
        {#if project.preview_url}
          <a
            href={project.preview_url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Live Demo
          </a>
        {/if}
      </div>
    </div>
  {/each}
</div>
