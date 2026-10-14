<script lang="ts">
  import LL, { locale } from '$i18n/i18n-svelte';
  import { baseLocale } from '$i18n/i18n-util';
  import enHome from '$i18n/en/home';
  import esHome from '$i18n/es/home';
  import SeoMeta from '$lib/seo/SeoMeta.svelte';
  import {
    KNOWS_ABOUT,
    OG_IMAGE,
    PROFILE_IMAGE,
    SAME_AS,
    SITE_NAME,
    SITE_ORIGIN,
    WHATSAPP_NUMBER,
    WHATSAPP_URL,
  } from '$lib/seo/site';
  import type { HomeContent } from '$lib/types/Home';
  import { PublicRoutesEnum } from '$lib/utils/routes';

  const { data } = $props();

  const t: HomeContent = $derived($locale === 'en' ? enHome : esHome);
  const prefix = $derived($locale === baseLocale ? '' : `/${$locale}`);
  const notes = $derived(data.notes.slice(0, 3));
  const testimonials = $derived(t.testimonials.items);

  function initials(name: string) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');
  }

  function noteDate(date: string) {
    return new Intl.DateTimeFormat($locale, {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(date));
  }

  // Services described on the page, exposed to search engines as offers.
  const SERVICES = {
    es: [
      'Automatización de atención al cliente por WhatsApp con IA',
      'Desarrollo de software a medida para negocios',
      'Desarrollo de aplicaciones web y móviles',
    ],
    en: [
      'AI customer service automation on WhatsApp',
      'Custom software development for businesses',
      'Web and mobile app development',
    ],
  } as const;

  const homeUrl = $derived(`${SITE_ORIGIN}${prefix}/`);

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
        telephone: `+${WHATSAPP_NUMBER}`,
        jobTitle:
          $locale === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack',
        description: $LL.SEO.DESCRIPTION(),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Caracas',
          addressCountry: 'VE',
        },
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
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'Platzi', url: 'https://platzi.com' },
          { '@type': 'EducationalOrganization', name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
        ],
        makesOffer: SERVICES[$locale].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name, areaServed: ['VE', 'Worldwide'] },
        })),
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

{#snippet whatsappIcon(size: number)}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.45-9.45 9.45m8.04-17.49A11.3 11.3 0 0 0 12.05.68C5.78.68.68 5.78.68 12.05c0 2 .52 3.96 1.52 5.68L.58 23.32l5.73-1.5a11.33 11.33 0 0 0 5.73 1.47h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.04"/></svg>
{/snippet}

<!-- Hero -->
<section id="inicio" class="pb-4 pt-16 sm:pt-24">
  <p class="m-0 inline-flex items-center gap-2 text-[14px] text-ink-muted">
    <span class="relative flex size-2">
      <span class="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60"></span>
      <span class="relative inline-flex size-2 rounded-full bg-success"></span>
    </span>
    {t.hero.availability}
  </p>

  <h1
    class="mb-0 mt-6 max-w-[920px] text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[4.5rem]"
  >
    {t.hero.headlineStart}<span class="text-accent">{t.hero.headlineHighlight}</span>
  </h1>

  <p class="mb-0 mt-7 max-w-[600px] text-[19px] leading-[1.5] text-ink-muted sm:text-[20px]">
    {t.hero.lead}
  </p>

  <div class="mt-9 flex flex-wrap gap-2.5">
    <a href={WHATSAPP_URL} rel="noreferrer" class="btn btn-dark">
      {@render whatsappIcon(18)}
      {t.hero.ctaPrimary}
    </a>
    <a href="#casos" class="btn btn-light">{t.hero.ctaSecondary} →</a>
  </div>

  <div
    class="mt-16 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border py-7 text-[14px] text-ink-muted"
  >
    <span>{t.hero.trustedLabel}</span>
    {#each t.clients as client (client.name)}
      <span class="flex items-center gap-2 text-[16px] font-medium text-ink">
        {#if client.logo}
          <img src={client.logo} alt="" width="24" height="24" class="size-6 rounded-md" />
        {/if}
        {client.name}
      </span>
    {/each}
  </div>
</section>

<!-- Case studies -->
<section id="casos" class="pt-12" aria-labelledby="casos-t">
  <p class="label">{t.cases.label}</p>
  <h2 id="casos-t" class="section-title">{t.cases.title}</h2>

  <div class="mt-12 flex flex-col gap-4">
    {#each t.cases.items as item, i (item.tag)}
      <article
        class="grid items-center gap-8 rounded-[28px] bg-surface-sunken p-6 sm:p-10 md:grid-cols-[1fr_1.1fr] md:gap-12"
      >
        <div class={i % 2 === 1 ? 'md:order-2' : ''}>
          <span
            class="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3 text-[14px] font-medium"
          >
            <img src={item.logo} alt="" width="24" height="24" class="size-6 rounded-full" />
            {item.tag}
          </span>
          <h3
            class="mb-3.5 mt-5 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-[2rem]"
          >
            {item.title}
          </h3>
          <p class="m-0 leading-[1.6] text-ink-muted">{item.body}</p>
          <dl class="m-0 mt-7 flex flex-wrap gap-x-8 gap-y-4">
            {#each item.metrics as metric}
              <div class="flex flex-col-reverse">
                <dt class="mt-1.5 text-[14px] text-ink-muted">{metric.label}</dt>
                <dd class="m-0 text-[2.4rem] font-semibold leading-none tracking-[-0.04em]">
                  {metric.value}
                </dd>
              </div>
            {/each}
          </dl>
          <a
            href={item.link.href}
            rel="noreferrer"
            class="group mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink no-underline hover:text-accent"
          >
            {item.link.label}
            <span aria-hidden="true" class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>

        <div
          class="overflow-hidden rounded-[18px] bg-white shadow-soft-lg {i % 2 === 1
            ? 'md:order-1'
            : ''}"
        >
          {#if item.chat}
            <div class="flex items-center gap-2.5 border-b border-border px-4 py-3.5 font-medium">
              <img src={item.logo} alt="" width="30" height="30" class="size-[30px] rounded-full" />
              <div class="leading-tight">
                {item.chat.name}
                <span class="block text-[12.5px] font-normal text-[#22A05A]">{item.chat.status}</span>
              </div>
            </div>
            <div class="flex flex-col gap-2 bg-[#EFEAE2] p-4 text-[14.5px] leading-[1.4]">
              {#each item.chat.messages as m}
                <div
                  class={m.from === 'customer'
                    ? 'max-w-[80%] self-end rounded-[12px_12px_3px_12px] bg-[#DCF8C6] px-3 py-2'
                    : 'max-w-[82%] self-start rounded-[12px_12px_12px_3px] bg-white px-3 py-2'}
                >
                  {m.text}
                </div>
              {/each}
            </div>
          {:else if item.image}
            <img
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
              decoding="async"
              class="block h-auto w-full"
            />
          {/if}
        </div>
      </article>
    {/each}
  </div>

  <ul class="m-0 mt-4 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
    {#each t.cases.more as item (item.name)}
      <li class="flex">
        <svelte:element
          this={item.href ? 'a' : 'div'}
          href={item.href}
          rel={item.href ? 'noreferrer' : undefined}
          class="flex w-full flex-col rounded-[20px] border border-border p-6 text-ink no-underline transition-colors {item.href
            ? 'hover:border-ink'
            : ''}"
        >
          <span class="mb-2 flex items-center gap-2.5 text-[19px] font-semibold tracking-[-0.02em]">
            {#if item.logo}
              <img
                src={item.logo}
                alt=""
                width="28"
                height="28"
                loading="lazy"
                class="size-7 rounded-lg border border-border bg-white object-contain"
              />
            {/if}
            {item.name}{item.href ? ' ↗' : ''}
          </span>
          <span class="text-[15.5px] leading-[1.5] text-ink-muted">{item.description}</span>
          <span class="mt-auto pt-5 text-[13.5px] text-ink-muted">{item.meta}</span>
        </svelte:element>
      </li>
    {/each}
  </ul>
  <a
    href="{prefix}{PublicRoutesEnum.Projects}"
    class="btn btn-light mt-6">{t.cases.allProjects} →</a
  >
</section>

<!-- Testimonials: hidden until src/i18n/*/home.ts has items -->
{#if testimonials.length}
  <section id="testimonios" class="pt-28" aria-labelledby="testimonios-t">
    <p class="label">{t.testimonials.label}</p>
    <h2 id="testimonios-t" class="section-title">{t.testimonials.title}</h2>
    <ul
      class="m-0 mt-11 grid list-none grid-cols-1 gap-4 p-0 {testimonials.length === 1
        ? ''
        : testimonials.length === 2 || testimonials.length === 4
          ? 'md:grid-cols-2'
          : 'md:grid-cols-2 lg:grid-cols-3'}"
    >
      {#each testimonials as item (item.name)}
        <li class="flex">
          <figure class="m-0 flex w-full flex-col rounded-[24px] bg-surface-sunken p-7 sm:p-8">
            <span aria-hidden="true" class="text-[40px] font-semibold leading-none text-accent">“</span>
            <!-- A single testimonial spans the row, so it gets a larger quote. -->
            <blockquote
              class="m-0 mt-2 leading-[1.45] tracking-[-0.01em] text-ink {testimonials.length === 1
                ? 'max-w-[900px] text-[22px] sm:text-[28px] sm:leading-[1.35]'
                : 'text-[20px]'}"
            >
              {item.quote}
            </blockquote>
            <figcaption class="mt-auto flex items-center gap-3 pt-7">
              {#if item.photo || item.logo}
                <img
                  src={item.photo ?? item.logo}
                  alt=""
                  width="44"
                  height="44"
                  loading="lazy"
                  class="size-11 shrink-0 bg-white object-cover {item.photo ? 'rounded-full' : 'rounded-[12px]'}"
                />
              {:else}
                <span
                  aria-hidden="true"
                  class="inline-grid size-11 shrink-0 place-items-center rounded-[12px] bg-white text-[15px] font-semibold text-accent"
                  >{initials(item.name)}</span
                >
              {/if}
              <span class="leading-tight">
                <span class="block font-semibold">{item.name}</span>
                <span class="mt-1 block text-[14px] text-ink-muted">{item.role} · {item.company}</span>
              </span>
            </figcaption>
          </figure>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<!-- Process -->
<section id="proceso" class="pt-28" aria-labelledby="proceso-t">
  <p class="label">{t.process.label}</p>
  <h2 id="proceso-t" class="section-title">{t.process.title}</h2>
  <ol class="m-0 mt-11 grid list-none gap-10 p-0 md:grid-cols-3">
    {#each t.process.steps as step, i (step.title)}
      <li>
        <span
          class="inline-grid size-9 place-items-center rounded-[10px] bg-accent font-semibold text-white"
          >{i + 1}</span
        >
        <h3 class="mb-2 mt-[18px] text-[21px] font-semibold tracking-[-0.02em]">{step.title}</h3>
        <p class="m-0 leading-[1.55] text-ink-muted">{step.body}</p>
      </li>
    {/each}
  </ol>
</section>

<!-- About -->
<section id="sobre-mi" class="pt-28" aria-labelledby="sobre-mi-t">
  <div class="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-14">
    <img
      src="/images/michael-liendo.jpg"
      alt={t.about.photoAlt}
      width="500"
      height="500"
      loading="lazy"
      class="aspect-square w-full max-w-[220px] rounded-3xl object-cover md:max-w-none"
    />
    <div>
      <p class="label">{t.about.label}</p>
      <h2 id="sobre-mi-t" class="section-title">{t.about.title}</h2>
      {#each t.about.paragraphs as p}
        <p class="mb-0 mt-4 text-[18px] leading-[1.6] text-ink-soft">{p}</p>
      {/each}
      <ul class="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
        {#each t.about.stack as tech (tech.name)}
          <li
            class="inline-flex items-center gap-2 rounded-full border border-border py-1.5 pl-2 pr-3 text-[14px]"
          >
            <img src={tech.icon} alt="" width="18" height="18" class="size-[18px]" loading="lazy" />
            {tech.name}
          </li>
        {/each}
      </ul>
      <p class="mb-0 mt-6 text-[15px] font-medium text-ink">{t.about.integrationsLabel}</p>
      <ul class="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
        {#each t.about.integrations as tool (tool.name)}
          <li
            class="inline-flex items-center gap-2 rounded-full bg-surface-sunken py-1.5 pl-2 pr-3 text-[14px]"
          >
            <img src={tool.icon} alt="" width="18" height="18" class="size-[18px]" loading="lazy" />
            {tool.name}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Notes -->
{#if notes.length}
  <section id="notas" class="pt-28" aria-labelledby="notas-t">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="label">{t.notes.label}</p>
        <h2 id="notas-t" class="section-title">{t.notes.title}</h2>
      </div>
      <a href="{prefix}{PublicRoutesEnum.Notes}" class="btn btn-light">{t.notes.all} →</a>
    </div>
    <ul class="m-0 mt-10 grid list-none gap-4 p-0 md:grid-cols-3">
      {#each notes as note (note.slug)}
        <li class="flex">
          <a
            href="{prefix}/notes/{note.slug}"
            class="flex w-full flex-col rounded-[20px] border border-border p-6 text-ink no-underline transition-colors hover:border-ink"
          >
            <time datetime={note.date} class="text-[13.5px] text-ink-muted">{noteDate(note.date)}</time>
            <span class="mt-3 text-[18px] font-semibold leading-snug tracking-[-0.02em]">{note.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<!-- Contact -->
<section
  id="contacto"
  class="mt-28 rounded-[32px] bg-ink px-6 py-16 text-center text-white sm:px-14 sm:py-20"
  aria-labelledby="contacto-t"
>
  <h2 id="contacto-t" class="section-title mx-auto text-white">{t.contact.title}</h2>
  <p class="mx-auto mb-8 mt-[18px] max-w-[520px] leading-[1.55] text-[#A3A3A3]">{t.contact.body}</p>
  <div class="flex flex-wrap justify-center gap-2.5">
    <a href={WHATSAPP_URL} rel="noreferrer" class="btn bg-white text-ink hover:bg-accent hover:text-white">
      <span class="text-[#25D366]">{@render whatsappIcon(18)}</span>
      {t.contact.whatsappCta}
    </a>
    <a href="mailto:{t.email}" class="btn bg-[#222] text-white hover:bg-[#333]">{t.email}</a>
  </div>
</section>

<style>
  .label {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-accent);
  }
  .section-title {
    margin-top: 12px;
    max-width: 720px;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.04em;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 48px;
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 15.5px;
    font-weight: 500;
    text-decoration: none;
    transition:
      background-color 150ms,
      color 150ms,
      transform 150ms;
  }
  .btn:hover {
    transform: translateY(-1px);
  }
  .btn-dark {
    background: var(--color-ink);
    color: #fff;
  }
  .btn-dark:hover {
    background: var(--color-accent);
  }
  .btn-light {
    background: var(--color-surface-sunken);
    color: var(--color-ink);
  }
  .btn-light:hover {
    background: #e9e9e5;
  }
</style>
