<script lang="ts">
import { page } from "$app/state";
import en_projects from "$i18n/en/project";
import es_projects from "$i18n/es/project";
import LL, { locale } from "$i18n/i18n-svelte";
import Tag from "$lib/components/tag.svelte";
import type { Project } from "$lib/types/Project";
import SeoMeta from "$lib/seo/SeoMeta.svelte";
import { SITE_NAME, SITE_ORIGIN } from "$lib/seo/site";
import { GitBranch } from "@lucide/svelte";

const byDateDesc = (a: Project, b: Project) => b.date.localeCompare(a.date);

const projects = $derived(
	[...(($locale === "en" ? en_projects : es_projects) as Project[])].sort(
		byDateDesc,
	),
);

const featuredProjects = $derived(
	projects.filter((p) => p.featured).sort(byDateDesc),
);

const moreProjects = $derived(
	projects.filter((p) => !p.featured).sort(byDateDesc),
);

const projectsJsonLd = $derived({
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: $LL.SEO.PROJECT.TITLE(),
	description: $LL.SEO.PROJECT.DESCRIPTION(),
	url: `${SITE_ORIGIN}${page.url.pathname}`,
	isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_ORIGIN}/` },
});
</script>

<SeoMeta
	title={$LL.SEO.PROJECT.TITLE()}
	description={$LL.SEO.PROJECT.DESCRIPTION()}
	image={$LL.SEO.IMAGE()}
	ogType="website"
	keywords={$LL.SEO.PROJECT.KEYWORDS()}
	locale={$locale}
	imageAlt={$LL.SEO.PROJECT.TITLE()}
	jsonLd={projectsJsonLd}
/>

<h1 class="mt-6 text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
  {$LL.PROJECTS.PROJECTS()}
</h1>

<p class="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
  {$LL.PROJECTS.DESCRIPTION()}
</p>

{#snippet projectCard(project: Project)}
  <article
    class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-soft-lg"
  >
    <div class="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
      <div class="flex gap-3">
        {#if project.image_url}
          <img
            src={project.image_url}
            alt=""
            width="40"
            height="40"
            class="mt-0.5 size-10 shrink-0 rounded-lg border border-border bg-surface object-contain p-1"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        {/if}
        <div class="min-w-0 flex-1">
          <h2 class="text-lg font-semibold leading-snug text-ink">
            {project.name}
          </h2>
          {#if project.role}
            <p class="mt-0.5 text-xs font-medium text-ink-muted">
              {project.role}
            </p>
          {/if}
          {#if project.period}
            <p class="mt-1 text-xs tabular-nums text-ink-muted/90">
              {project.period}
            </p>
          {/if}
        </div>
      </div>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>
      <ul class="mt-5 flex list-none flex-wrap gap-2 p-0">
        {#each project.tags as tag (tag)}
          <li>
            <Tag>
              {tag}
            </Tag>
          </li>
        {/each}
      </ul>
    </div>
    <div
      class="flex items-center justify-between gap-3 border-t border-border bg-accent-muted/20 px-5 py-4 sm:px-6"
    >
      {#if project.repo_url}
        <a
          href={project.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-link transition hover:text-link-hover"
          aria-label={$LL.PROJECTS.SOURCE_CODE()}
        >
          <GitBranch class="h-4 w-4" aria-hidden="true" />
          <span class="sr-only">{$LL.PROJECTS.SOURCE_CODE()}</span>
        </a>
      {:else}
        <span></span>
      {/if}
      {#if project.preview_url}
        <a
          href={project.preview_url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-semibold text-link underline-offset-4 transition hover:text-link-hover hover:underline"
          aria-label="{$LL.PROJECTS.LIVE_SITE()} — {project.name}"
        >
          {$LL.PROJECTS.LIVE_SITE()}
        </a>
      {/if}
    </div>
  </article>
{/snippet}

{#if featuredProjects.length > 0}
  <h2
    class="mt-10 text-lg font-semibold tracking-tight text-ink sm:text-xl"
    id="featured"
  >
    {$LL.PROJECTS.FEATURED()}
  </h2>
  <div
    class="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    aria-labelledby="featured"
  >
    {#each featuredProjects as project (project.name + project.date + (project.role ?? ""))}
      {@render projectCard(project)}
    {/each}
  </div>
{/if}

{#if moreProjects.length > 0}
  <h2
    class="mt-12 text-lg font-semibold tracking-tight text-ink sm:text-xl"
    id="more-projects"
  >
    {$LL.PROJECTS.MORE()}
  </h2>
  <div
    class="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    aria-labelledby="more-projects"
  >
    {#each moreProjects as project (project.name + project.date + (project.role ?? ""))}
      {@render projectCard(project)}
    {/each}
  </div>
{/if}
