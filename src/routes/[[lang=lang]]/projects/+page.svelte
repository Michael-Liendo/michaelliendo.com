<script lang="ts">
import { page } from "$app/state";
import en_projects from "$i18n/en/project";
import es_projects from "$i18n/es/project";
import LL, { locale } from "$i18n/i18n-svelte";
import type { Project } from "$lib/types/Project";
import SeoMeta from "$lib/seo/SeoMeta.svelte";
import { SITE_NAME, SITE_ORIGIN, WHATSAPP_URL } from "$lib/seo/site";

const initials = (name: string) =>
	name
		.replace(/^U\.E\.\s*/, "")
		.split(/\s+/)
		.slice(0, 2)
		.map((word) => word[0])
		.join("")
		.toUpperCase();

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

<header class="pb-4 pt-14 sm:pt-20">
  <p class="m-0 text-[14px] font-medium text-accent">{$LL.PROJECTS.PROJECTS()}</p>
  <h1
    class="mb-0 mt-3 max-w-[760px] text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-[3.5rem]"
  >
    {$locale === 'en'
      ? 'Products, clients and side projects.'
      : 'Productos, clientes y proyectos propios.'}
  </h1>
  <p class="mb-0 mt-5 max-w-[620px] text-[18px] leading-[1.55] text-ink-muted">
    {$LL.PROJECTS.DESCRIPTION()}
  </p>
</header>

{#snippet logo(project: Project, size: string)}
  {#if project.image_url}
    <img
      src={project.image_url}
      alt=""
      width="48"
      height="48"
      loading="lazy"
      decoding="async"
      class="{size} shrink-0 rounded-xl border border-border bg-white object-contain p-1.5"
    />
  {:else}
    <span
      aria-hidden="true"
      class="{size} grid shrink-0 place-items-center rounded-xl bg-ink text-[14px] font-semibold tracking-[-0.02em] text-white"
      >{initials(project.name)}</span
    >
  {/if}
{/snippet}

{#snippet links(project: Project)}
  {#if project.preview_url || project.repo_url}
    <div class="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-[15px] font-medium">
      {#if project.preview_url}
        <a
          href={project.preview_url}
          target="_blank"
          rel="noopener noreferrer"
          class="group/link inline-flex items-center gap-1 text-ink no-underline hover:text-accent"
          aria-label="{$LL.PROJECTS.LIVE_SITE()}: {project.name}"
        >
          {$LL.PROJECTS.LIVE_SITE()}
          <span aria-hidden="true" class="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
        </a>
      {/if}
      {#if project.repo_url}
        <a
          href={project.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          class="group/link inline-flex items-center gap-1 text-ink-muted no-underline hover:text-accent"
          aria-label="{$LL.PROJECTS.SOURCE_CODE()}: {project.name}"
        >
          {$LL.PROJECTS.SOURCE_CODE()}
          <span aria-hidden="true" class="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
        </a>
      {/if}
    </div>
  {/if}
{/snippet}

{#snippet tags(project: Project, max: number)}
  <ul class="m-0 mt-5 flex list-none flex-wrap gap-1.5 p-0">
    {#each project.tags.slice(0, max) as tag (tag)}
      <li class="rounded-full bg-white px-2.5 py-1 text-[13px] text-ink-soft">{tag}</li>
    {/each}
  </ul>
{/snippet}

{#if featuredProjects.length > 0}
  <section class="pt-10" aria-labelledby="featured">
    <h2 id="featured" class="m-0 text-[1.5rem] font-semibold tracking-[-0.03em] text-ink">
      {$LL.PROJECTS.FEATURED()}
    </h2>
    <div class="mt-6 grid gap-4 md:grid-cols-2">
      {#each featuredProjects as project (project.name + project.date + (project.role ?? ""))}
        <article class="flex flex-col rounded-[24px] bg-surface-sunken p-6 sm:p-8">
          <div class="flex items-start gap-4">
            {@render logo(project, 'size-12')}
            <div class="min-w-0">
              <h3 class="m-0 text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-ink">
                {project.name}
              </h3>
              {#if project.role}
                <p class="m-0 mt-1 text-[14.5px] leading-snug text-ink-muted">{project.role}</p>
              {/if}
            </div>
          </div>
          {#if project.period}
            <p class="m-0 mt-4 text-[13.5px] text-ink-muted">{project.period}</p>
          {/if}
          <p class="m-0 mt-3 line-clamp-5 text-[15.5px] leading-[1.6] text-ink-soft">
            {project.description}
          </p>
          {@render tags(project, 5)}
          {@render links(project)}
        </article>
      {/each}
    </div>
  </section>
{/if}

{#if moreProjects.length > 0}
  <section class="pt-20" aria-labelledby="more-projects">
    <h2 id="more-projects" class="m-0 text-[1.5rem] font-semibold tracking-[-0.03em] text-ink">
      {$LL.PROJECTS.MORE()}
    </h2>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each moreProjects as project (project.name + project.date + (project.role ?? ""))}
        <article class="flex flex-col rounded-[20px] border border-border p-6 transition-colors hover:border-ink">
          <div class="flex items-center gap-3">
            {@render logo(project, 'size-10')}
            <h3 class="m-0 text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink">
              {project.name}
            </h3>
          </div>
          <p class="m-0 mt-4 text-[15px] leading-[1.55] text-ink-muted">{project.description}</p>
          <p class="m-0 mt-4 text-[13px] text-ink-muted">{project.tags.slice(0, 3).join(' · ')}</p>
          {@render links(project)}
        </article>
      {/each}
    </div>
  </section>
{/if}

<section
  id="contacto-proyectos"
  class="mt-24 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-ink px-6 py-12 text-white sm:flex-row sm:items-center sm:px-12"
  aria-label={$locale === 'en' ? 'Contact' : 'Contacto'}
>
  <div>
    <h2 class="m-0 text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] sm:text-[2.1rem]">
      {$locale === 'en' ? 'Want something like this?' : '¿Quieres algo así para tu negocio?'}
    </h2>
    <p class="m-0 mt-2 text-[#A3A3A3]">
      {$locale === 'en' ? 'Tell me about it. I reply within a day.' : 'Cuéntamelo. Respondo en menos de un día.'}
    </p>
  </div>
  <a
    href={WHATSAPP_URL}
    rel="noreferrer"
    class="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-white px-5 text-[15.5px] font-medium text-ink no-underline transition-colors hover:bg-accent hover:text-white"
  >
    {$locale === 'en' ? 'Message me on WhatsApp' : 'Escríbeme por WhatsApp'}
  </a>
</section>
