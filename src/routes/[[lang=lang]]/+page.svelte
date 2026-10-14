<script lang="ts">
  import { env as publicEnv } from '$env/dynamic/public';
  import LL, { locale } from '$i18n/i18n-svelte';
  import { baseLocale } from '$i18n/i18n-util';
  import enHome from '$i18n/en/home';
  import esHome from '$i18n/es/home';
  import HomeRow from '$lib/components/home-row.svelte';
  import SeoMeta from '$lib/seo/SeoMeta.svelte';
  import {
    KNOWS_ABOUT,
    OG_IMAGE,
    PROFILE_IMAGE,
    SAME_AS,
    SITE_NAME,
    SITE_ORIGIN,
  } from '$lib/seo/site';
  import type {
    HomeContent,
    HomeFeatured,
    HomeMetric,
    HomeSkill,
  } from '$lib/types/Home';
  import { PublicRoutesEnum } from '$lib/utils/routes';

  const { data } = $props();

  const t: HomeContent = $derived($locale === 'en' ? enHome : esHome);
  const prefix = $derived($locale === baseLocale ? '' : `/${$locale}`);
  // Fallback keeps the button working when the env var isn't set on the host.
  const whatsapp = $derived(
    (publicEnv.PUBLIC_WHATSAPP_E164 || '584149409930').replace(/\D/g, ''),
  );

  const notes = $derived(data.notes.slice(0, 4));

  function noteDate(date: string) {
    return new Intl.DateTimeFormat($locale, {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(date));
  }

  const homeUrl = $derived(`${SITE_ORIGIN}${prefix || ''}/`);

  const homeJsonLd = $derived({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_ORIGIN}/#person`,
        name: 'Michael Liendo',
        givenName: 'Michael',
        familyName: 'Liendo',
        url: `${SITE_ORIGIN}/`,
        image: PROFILE_IMAGE,
        email: `mailto:${t.email}`,
        jobTitle:
          $locale === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack',
        description: $LL.SEO.DESCRIPTION(),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Caracas',
          addressCountry: 'VE',
        },
        homeLocation: { '@type': 'Place', name: 'Caracas, Venezuela' },
        knowsLanguage: [
          { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
          { '@type': 'Language', name: 'English', alternateName: 'en' },
        ],
        knowsAbout: [...KNOWS_ABOUT],
        sameAs: [...SAME_AS],
        worksFor: {
          '@type': 'Organization',
          name: 'Engrana',
          url: 'https://engrana.ai',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${homeUrl}#profile`,
        url: homeUrl,
        name: $LL.SEO.TITLE(),
        inLanguage: $locale,
        mainEntity: { '@id': `${SITE_ORIGIN}/#person` },
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        name: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        description: $LL.SEO.DESCRIPTION(),
        inLanguage: ['es', 'en'],
        publisher: { '@id': `${SITE_ORIGIN}/#person` },
      },
    ],
  });
</script>

<SeoMeta
  title={$LL.SEO.TITLE()}
  description={$LL.SEO.DESCRIPTION()}
  image={OG_IMAGE[$locale]}
  ogType="profile"
  keywords={$LL.SEO.KEYWORDS()}
  locale={$locale}
  imageAlt={$LL.SEO.TITLE()}
  jsonLd={homeJsonLd}
/>

{#snippet skillList(items: HomeSkill[])}
  <ul class="m-0 flex list-none flex-col p-0">
    {#each items as item (item.name)}
      <li
        class="flex items-center gap-4 border-b border-border-soft py-3.5 last:border-b-0"
      >
        <span
          aria-hidden="true"
          class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated shadow-[0_1px_2px_rgb(26_26_26/0.04)]"
        >
          <img src={item.icon} alt="" width="24" height="24" class="size-6" loading="lazy" />
        </span>
        <span class="flex min-w-0 flex-auto flex-col leading-[1.35]">
          <span class="font-semibold">{item.name}</span>
          <span class="text-[14.5px] text-ink-muted">{item.description}</span>
        </span>
        <span
          class="shrink-0 rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 font-mono text-[12px] text-ink-muted"
          >{item.badge}</span
        >
      </li>
    {/each}
  </ul>
{/snippet}

{#snippet metricList(metrics: HomeMetric[])}
  <dl class="m-0 grid grid-cols-1 gap-px sm:grid-cols-3 overflow-hidden rounded-xl border border-border bg-border">
    {#each metrics as metric}
      <div class="flex items-baseline justify-between gap-3 bg-surface px-4 py-3 sm:flex-col-reverse sm:items-stretch sm:justify-end sm:gap-1">
        <dt class="text-[13px] leading-snug text-ink-muted">{metric.label}</dt>
        <dd class="m-0 whitespace-nowrap font-serif text-[1.25rem] leading-tight text-ink">
          {metric.value}
        </dd>
      </div>
    {/each}
  </dl>
{/snippet}

{#snippet stackChips(stack: string)}
  <ul class="m-0 flex list-none flex-wrap gap-1.5 p-0">
    {#each stack.split(', ') as tech}
      <li
        class="rounded-md border border-border-soft bg-surface px-2 py-0.5 font-mono text-[12px] text-ink-muted"
      >
        {tech}
      </li>
    {/each}
  </ul>
{/snippet}

{#snippet projectHeader(project: HomeFeatured)}
  <div class="flex items-center gap-3">
    <img
      src={project.logo}
      alt=""
      width="36"
      height="36"
      loading="lazy"
      class="size-9 rounded-[10px] border border-border bg-white object-contain p-1"
    />
    <span class="font-mono text-[12.5px] leading-tight text-ink-muted">{project.meta}</span>
  </div>
  <h3 class="m-0 font-serif text-[1.9rem] font-medium leading-tight">{project.title}</h3>
{/snippet}

{#snippet projectLink(project: HomeFeatured)}
  <a
    href={project.link.href}
    rel="noreferrer"
    class="group inline-flex items-center gap-1.5 self-start text-[15px] font-medium text-ink no-underline transition-colors hover:text-accent"
  >
    {project.link.label}
    <span
      aria-hidden="true"
      class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >↗</span
    >
  </a>
{/snippet}

<!-- Hero -->
<section id="inicio" class="pb-14 pt-14 sm:pt-20">
  <div class="flex items-center gap-4">
    <img
      src="/images/michael-liendo.jpg"
      alt={t.hero.photoAlt}
      width="64"
      height="64"
      fetchpriority="high"
      class="size-16 rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-surface"
    />
    <div class="flex flex-col leading-snug">
      <span class="font-semibold">Michael Liendo</span>
      <span class="text-[14.5px] text-ink-muted"
        >{t.hero.role} · {t.hero.location}</span
      >
    </div>
  </div>

  <p
    class="mt-9 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated py-1 pl-2.5 pr-3 font-mono text-[12.5px] text-ink-soft"
  >
    <span class="relative flex size-2">
      <span
        class="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-50"
      ></span>
      <span class="relative inline-flex size-2 rounded-full bg-success"></span>
    </span>
    {t.hero.availability}
  </p>

  <h1
    class="mb-0 mt-5 text-balance font-serif text-[2.35rem] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[3.3rem]"
  >
    {t.hero.headlineStart}<em class="text-accent">{t.hero.headlineEm}</em
    >{t.hero.headlineEnd}
  </h1>

  {#each t.hero.paragraphs as p}
    <p
      class="mb-0 mt-6 max-w-[600px] text-[18px] leading-[1.6] text-ink-soft"
    >
      {p}
    </p>
  {/each}

  <div
    class="mt-8 flex flex-wrap items-center gap-2.5"
  >
    <a href="mailto:{t.email}" class="pill pill-primary">
      {t.hero.ctaPrimary}
      <span aria-hidden="true">→</span>
    </a>
    <a href="#trabajo" class="pill">{t.hero.ctaSecondary}</a>
    <span class="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true"></span>
    <a
      href="https://github.com/Michael-Liendo"
      rel="me noreferrer"
      class="pill pill-icon"
      aria-label="GitHub"
      title="GitHub"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4 1.5-4-2-6-2.5"></path><path d="M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.6 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.5 0C6 1.1 4.9 1.4 4.9 1.4a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 3.4 8.5c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V21"></path></svg>
    </a>
    <a
      href="https://www.linkedin.com/in/michaelliendo"
      rel="me noreferrer"
      class="pill pill-icon"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="M8 10v7"></path><path d="M8 7v.01"></path><path d="M12 17v-4a2 2 0 0 1 4 0v4"></path><path d="M12 10v7"></path></svg>
    </a>
    <a
      href="https://x.com/mykeliendo"
      rel="me noreferrer"
      class="pill pill-icon"
      aria-label="X"
      title="X"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
    </a>
    <a
      href="https://wa.me/{whatsapp}"
      rel="noreferrer"
      class="pill pill-icon"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.4z"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
    </a>
  </div>

  <dl
    class="mb-0 mt-12 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-3"
  >
    {#each t.hero.stats as stat}
      <div class="flex flex-col-reverse gap-1">
        <dt class="text-[14px] leading-snug text-ink-muted">{stat.label}</dt>
        <dd class="m-0 font-serif text-[1.65rem] leading-none text-ink">{stat.value}</dd>
      </div>
    {/each}
  </dl>
</section>

<HomeRow id="ahora" label={t.labels.now}>
  <div class="flex flex-col gap-3">
    {#each t.nowHtml as p}
      <!-- Trusted static copy from src/i18n/*/home.ts -->
      <p class="m-0">{@html p}</p>
    {/each}
  </div>
</HomeRow>

<!-- Selected work -->
<section
  id="trabajo"
  aria-labelledby="trabajo-t"
  class="flex flex-col gap-8 border-t border-border py-12"
>
  <h2
    id="trabajo-t"
    class="m-0 font-mono text-[13.5px] font-normal text-ink-muted"
  >
    {t.labels.work}
  </h2>

  <!-- Cards break out of the reading column on large screens -->
  <div class="flex flex-col gap-6 lg:-mx-24">
    {#each t.featured as project (project.title)}
      {#if project.chat}
        <article
          class="grid overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft md:grid-cols-[1.15fr_1fr]"
        >
          <div class="flex flex-col gap-4 p-6 sm:p-8">
            {@render projectHeader(project)}
            <p class="m-0 text-[16px] text-ink-soft">{project.body}</p>
            {#if project.metrics}{@render metricList(project.metrics)}{/if}
            {@render stackChips(project.stack)}
            {@render projectLink(project)}
          </div>

          <figure
            class="m-0 flex flex-col items-center justify-center gap-3 border-t border-border bg-surface-sunken px-5 py-8 md:border-l md:border-t-0"
          >
            <div
              class="w-full max-w-[340px] overflow-hidden rounded-[22px] border border-[#DDD8CC] bg-white shadow-soft-lg"
            >
              <div class="flex items-center gap-2.5 border-b border-border-soft px-4 py-3">
                <img
                  src={project.chat.avatar}
                  alt=""
                  width="34"
                  height="34"
                  loading="lazy"
                  class="size-[34px] rounded-full border border-border-soft bg-white object-contain p-1"
                />
                <span class="flex min-w-0 flex-col leading-tight">
                  <span class="truncate text-[14.5px] font-semibold">{project.chat.name}</span>
                  <span class="inline-flex items-center gap-1 text-[12px] text-success">
                    <span class="size-1.5 rounded-full bg-success"></span>
                    {project.chat.status}
                  </span>
                </span>
              </div>
              <div
                class="chat-bg flex flex-col gap-1.5 px-3 py-4 text-[13.5px] leading-[1.4]"
              >
                {#each project.chat.messages as m}
                  {#if m.attachment}
                    <div
                      class="flex w-[150px] flex-col self-end rounded-[10px] bg-[#D9F2DF] p-1 shadow-[0_1px_1px_rgb(0_0_0/0.06)]"
                    >
                      <div
                        class="flex h-[92px] items-center justify-center rounded-[7px] bg-linear-to-br from-[#E8E2D4] to-[#CFC8B8]"
                      >
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="#1A1A1A" aria-hidden="true"><path d="M7 8V7a5 5 0 0 1 10 0v1h2.2a1 1 0 0 1 1 .9l1 11A2 2 0 0 1 19.2 22H4.8a2 2 0 0 1-2-2.1l1-11a1 1 0 0 1 1-.9zm2 0h6V7a3 3 0 0 0-6 0z"></path></svg>
                      </div>
                      <span class="chat-time self-end px-1 pt-0.5">{m.time} <span class="text-[#53A6E4]">✓✓</span></span>
                    </div>
                  {:else if m.from === 'customer'}
                    <div
                      class="max-w-[80%] self-end rounded-[10px_10px_3px_10px] bg-[#D9F2DF] px-2.5 py-1.5 shadow-[0_1px_1px_rgb(0_0_0/0.06)]"
                    >
                      {m.text}
                      <span class="chat-time float-right ml-2 mt-1.5">{m.time} <span class="text-[#53A6E4]">✓✓</span></span>
                    </div>
                  {:else}
                    <div
                      class="max-w-[84%] self-start rounded-[10px_10px_10px_3px] bg-white px-2.5 py-1.5 shadow-[0_1px_1px_rgb(0_0_0/0.06)]"
                    >
                      {m.text}
                      <span class="chat-time float-right ml-2 mt-1.5">{m.time}</span>
                    </div>
                  {/if}
                {/each}
                <div
                  class="flex items-center gap-1 self-start rounded-[10px_10px_10px_3px] bg-white px-3 py-2.5 shadow-[0_1px_1px_rgb(0_0_0/0.06)]"
                  aria-label={project.chat.typing}
                >
                  <span class="typing-dot"></span>
                  <span class="typing-dot [animation-delay:150ms]"></span>
                  <span class="typing-dot [animation-delay:300ms]"></span>
                </div>
              </div>
            </div>
            <figcaption class="max-w-[340px] text-center font-mono text-[12px] text-ink-muted">
              {project.chat.caption}
            </figcaption>
          </figure>
        </article>
      {:else}
        <article
          class="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft"
        >
          {#if project.image}
            <figure class="m-0 border-b border-border bg-surface-sunken px-5 pt-6 sm:px-10 sm:pt-10">
              <div
                class="overflow-hidden rounded-t-xl border border-b-0 border-[#DDD8CC] bg-white shadow-soft-lg"
              >
                <div class="flex items-center gap-3 border-b border-border-soft px-3.5 py-2.5">
                  <span class="flex gap-1.5" aria-hidden="true">
                    <span class="size-2.5 rounded-full bg-[#E4E0D6]"></span>
                    <span class="size-2.5 rounded-full bg-[#E4E0D6]"></span>
                    <span class="size-2.5 rounded-full bg-[#E4E0D6]"></span>
                  </span>
                  <span
                    class="mx-auto rounded-md bg-surface px-10 py-0.5 font-mono text-[11.5px] text-ink-muted"
                    >{project.link.label}</span
                  >
                  <span class="w-[38px]" aria-hidden="true"></span>
                </div>
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  decoding="async"
                  class="block aspect-[1470/786] w-full object-cover"
                />
              </div>
            </figure>
          {/if}
          <div class="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.15fr_1fr] md:gap-10">
            <div class="flex flex-col gap-4">
              {@render projectHeader(project)}
              <p class="m-0 text-[16px] text-ink-soft">{project.body}</p>
            </div>
            <div class="flex flex-col gap-4 md:pt-1">
              {#if project.metrics}{@render metricList(project.metrics)}{/if}
              {@render stackChips(project.stack)}
              {@render projectLink(project)}
            </div>
          </div>
        </article>
      {/if}
    {/each}

    <ul class="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
      {#each t.more as item (item.name)}
        <li class="flex">
          <svelte:element
            this={item.href ? 'a' : 'div'}
            href={item.href}
            rel={item.href ? 'noreferrer' : undefined}
            class="group flex w-full flex-col gap-1.5 rounded-xl border border-border bg-surface-elevated p-5 text-ink no-underline transition-[border-color,box-shadow] {item.href
              ? 'hover:border-[#C9C4B8] hover:shadow-soft'
              : ''}"
          >
            <span class="flex items-baseline justify-between gap-3">
              <span class="font-semibold transition-colors group-hover:text-accent">{item.name}</span>
              {#if item.href}
                <span
                  aria-hidden="true"
                  class="text-ink-faint transition-[color,translate] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >↗</span
                >
              {/if}
            </span>
            <span class="text-[15px] leading-snug text-ink-soft">{item.description}</span>
            <span class="mt-auto pt-2 font-mono text-[12.5px] text-ink-muted">{item.meta}</span>
          </svelte:element>
        </li>
      {/each}
      <li class="flex">
        <a
          href="{prefix}{PublicRoutesEnum.Projects}"
          class="group flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#C9C4B8] p-5 font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
        >
          {t.labels.allProjects}
          <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </li>
    </ul>
  </div>
</section>

<HomeRow id="experiencia" label={t.labels.experience}>
  <ol class="m-0 flex list-none flex-col gap-[18px] p-0">
    {#each t.experience as job (job.org)}
      <li class="flex flex-wrap justify-between gap-x-4">
        <span><span class="font-semibold">{job.role}</span> · {job.org}</span>
        <span class="font-mono text-[13px] text-ink-muted">{job.period}</span>
      </li>
    {/each}
    <li class="text-[15.5px] text-ink-soft">{t.experienceBefore}</li>
  </ol>
</HomeRow>

<HomeRow id="como-t" label={t.labels.how}>
  <div class="flex flex-col gap-3 text-ink-soft">
    {#each t.how as p}
      <p class="m-0">{p}</p>
    {/each}
  </div>
</HomeRow>

<HomeRow id="lang-t" label={t.labels.languages}>
  {@render skillList(t.languages)}
</HomeRow>

<HomeRow id="fw-t" label={t.labels.frameworks}>
  {@render skillList(t.frameworks)}
</HomeRow>

<HomeRow id="tec-t" label={t.labels.tech}>
  <ul class="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
    {#each t.tech as tool (tool.name)}
      <li
        class="flex min-w-0 flex-col rounded-[10px] border border-border bg-surface-elevated px-4 py-3.5 leading-[1.4]"
      >
        <span class="font-semibold">{tool.name}</span>
        <span class="text-[14.5px] text-ink-muted">{tool.description}</span>
      </li>
    {/each}
  </ul>
</HomeRow>

<HomeRow id="idiomas-t" label={t.labels.spoken}>
  <ul class="m-0 flex list-none flex-col p-0">
    {#each t.spoken as lang (lang.name)}
      <li
        class="flex items-center justify-between gap-4 border-b border-border-soft py-3.5 first:pt-0 last:border-b-0"
      >
        <span class="flex min-w-0 flex-col leading-[1.35]">
          <span class="font-semibold">{lang.name}</span>
          <span class="text-[14.5px] text-ink-muted">{lang.note}</span>
        </span>
        <span
          class="shrink-0 rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 font-mono text-[12px] text-ink-muted"
          >{lang.level}</span
        >
      </li>
    {/each}
  </ul>
</HomeRow>

{#if notes.length}
  <HomeRow id="notas" label={t.labels.notes}>
    <ul class="m-0 flex list-none flex-col gap-3.5 p-0">
      {#each notes as note (note.slug)}
        <li class="flex flex-wrap justify-between gap-x-4">
          <a href="{prefix}/notes/{note.slug}" class="link-underline"
            >{note.title}</a
          >
          <time
            datetime={note.date}
            class="font-mono text-[13px] text-ink-muted">{noteDate(note.date)}</time
          >
        </li>
      {/each}
    </ul>
    <a
      href="{prefix}{PublicRoutesEnum.Notes}"
      class="link-underline mt-4 inline-flex min-h-11 items-center"
      >{t.labels.allNotes} →</a
    >
  </HomeRow>
{/if}

<!-- Contact -->
<section
  id="contacto"
  aria-labelledby="contacto-t"
  class="flex flex-col gap-5 border-t border-border pb-6 pt-16"
>
  <h2
    id="contacto-t"
    class="m-0 text-balance font-serif text-[1.85rem] font-normal leading-[1.2] sm:text-[2.2rem]"
  >
    {t.contact.title}
  </h2>
  <p class="m-0 max-w-[600px] text-ink-soft">{t.contact.bodyHtml}</p>
  <div class="flex flex-wrap items-center gap-2.5">
    <a href="mailto:{t.email}" class="pill pill-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>
      {t.contact.emailCta}
    </a>
    <a href="https://wa.me/{whatsapp}" class="pill" rel="noreferrer">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.4z"></path></svg>
      {t.contact.whatsappCta}
    </a>
  </div>
  <p class="m-0 font-mono text-[13px] text-ink-muted">
    {t.email} · {t.contact.reply}
  </p>
</section>

<style>
  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    padding: 8px 16px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background: var(--color-surface-elevated);
    color: var(--color-ink);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    transition:
      border-color 150ms,
      color 150ms,
      background-color 150ms;
  }
  .pill:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
  .pill-icon {
    width: 44px;
    padding: 0;
    color: var(--color-ink-soft);
  }
  .pill-primary {
    background: var(--color-ink);
    border-color: var(--color-ink);
    color: var(--color-surface);
  }
  .pill-primary:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-accent-foreground);
  }
  .chat-bg {
    background-color: #efeae0;
    background-image: radial-gradient(rgb(26 26 26 / 0.035) 1px, transparent 1px);
    background-size: 14px 14px;
  }
  .chat-time {
    font-size: 10.5px;
    line-height: 1;
    color: #8a857b;
    white-space: nowrap;
  }
  .typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background: #9a958b;
    animation: typing 1.2s infinite ease-in-out;
  }
  @keyframes typing {
    0%,
    60%,
    100% {
      opacity: 0.35;
      transform: translateY(0);
    }
    30% {
      opacity: 1;
      transform: translateY(-3px);
    }
  }
</style>
