<script lang="ts">
  import LL, { locale } from '$i18n/i18n-svelte';
  import enStackSections from '$i18n/en/home-stack';
  import esStackSections from '$i18n/es/home-stack';
  import Entry from '$lib/components/entry.svelte';
  import HomeStackCard from '$lib/components/home-stack-card.svelte';
  import SocialMedia from '$lib/components/social-media.svelte';
  import SeoMeta from '$lib/seo/SeoMeta.svelte';
  import { SAME_AS, SITE_NAME, SITE_ORIGIN } from '$lib/seo/site';
  import { Clock, MapPin } from '@lucide/svelte';

  const { data } = $props();

  const stackSections = $derived(
    $locale === 'en' ? enStackSections : esStackSections,
  );

  const homeJsonLd = $derived({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Michael Liendo',
        url: `${SITE_ORIGIN}/`,
        image: $LL.SEO.IMAGE(),
        sameAs: [...SAME_AS],
        jobTitle: 'Software Developer',
        email: 'hello@michaelliendo.com',
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        description: $LL.SEO.DESCRIPTION(),
        inLanguage: ['es', 'en'],
        publisher: { '@type': 'Person', name: 'Michael Liendo' },
      },
    ],
  });
</script>

<SeoMeta
  title={$LL.SEO.TITLE()}
  description={$LL.SEO.DESCRIPTION()}
  image={$LL.SEO.IMAGE()}
  ogType="website"
  keywords={$LL.SEO.KEYWORDS()}
  locale={$locale}
  imageAlt="Michael Liendo"
  jsonLd={homeJsonLd}
/>

<section
  id="about"
  class="relative z-10 mt-8 md:mt-14"
  itemscope
  itemtype="https://schema.org/Person"
>
  <div class="flex flex-col items-start gap-5">
    <img
      src={$LL.SEO.IMAGE()}
      width="56"
      height="56"
      loading="eager"
      decoding="async"
      alt="Michael Liendo"
      itemprop="image"
      class="h-14 w-14 rounded-full object-cover ring-2 ring-border shadow-soft"
    />

    <h1
      class="max-w-3xl text-pretty text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.5rem] md:leading-tight"
      itemprop="name"
    >
      {$LL.HOMEPAGE.HERO_HEADLINE()}
    </h1>

    <p
      class="max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
      itemprop="description"
    >
      {$LL.HOMEPAGE.HERO_LEAD()}
    </p>

    <div
      class="flex w-full max-w-2xl flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6"
    >
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <SocialMedia />
      </div>
      <ul
        class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted"
        aria-label="Location and time"
      >
        <!--  <li class="flex items-center gap-1.5">
          <MapPin class="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
          <span>{$LL.HOMEPAGE.LOCATION()}</span>
        </li> -->
        <!--         <li class="flex items-center gap-1.5">
          <Clock class="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
          <span>{$LL.HOMEPAGE.TIMEZONE()}</span>
        </li> -->
      </ul>
    </div>

    <p class="text-xs font-medium uppercase tracking-wider text-ink-muted">
      {$LL.HOMEPAGE.CTA_LABEL()}
    </p>
    <a
      href="mailto:hello@michaelliendo.com"
      class="text-sm font-semibold text-link underline-offset-4 transition hover:text-link-hover hover:underline"
    >
      {$LL.HOMEPAGE.CTA_BUTTON()}
    </a>
  </div>
</section>

<section
  class="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_min(22rem,38%)] lg:items-start lg:gap-14 xl:gap-16"
  aria-labelledby="recent-notes-heading"
>
  <div class="min-w-0">
    <h2
      id="recent-notes-heading"
      class="mb-8 text-xl font-bold tracking-tight text-ink sm:text-2xl"
    >
      {$LL.HOMEPAGE.LATEST_NOTES()}
    </h2>
    <ul class="animate-fade-in-up [animation-delay:80ms]">
      {#each data.notes as note (note.slug)}
        <Entry
          title={note.title}
          description={note.description}
          date={note.date}
          slug={note.slug!}
        />
      {/each}
    </ul>
  </div>

  <div
    class="flex flex-col gap-5 lg:sticky lg:top-28 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-1"
    aria-label={$LL.HOMEPAGE.STACK_TITLE()}
  >
    {#each stackSections as section (section.title)}
      <HomeStackCard
        title={section.title}
        icon={section.icon}
        items={section.items}
      />
    {/each}
  </div>
</section>
