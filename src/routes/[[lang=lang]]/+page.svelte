<script lang="ts">
  import Calendar from '~icons/mdi/calendar-month';
  import LL, { locale } from '$i18n/i18n-svelte';
  import SocialMedia from '$lib/components/SocialMedia.svelte';
  import { baseLocale, locales } from '$i18n/i18n-util';

  import type { Note } from '$lib/services/Notion/Notes/notes';

  export let data: {
    notes: Note[];
  };

  const baseLocaleUrl = $locale === baseLocale ? '' : `/${$locale}`;
  const currentPageLocale = $locale;

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

  {#each locales as locale}
    {#if locale !== baseLocale && currentPageLocale !== locale}
      <link
        rel="alternate"
        hreflang={locale}
        href={`https://michaelliendo.com/${locale}`}
      />
    {:else if locale === baseLocale && currentPageLocale !== locale}
      <link
        rel="alternate"
        hreflang={locale}
        href={`https://michaelliendo.com/`}
      />
    {/if}
  {/each}
</svelte:head>
<section
  id="about"
  class="relative z-10 flex flex-col-reverse md:flex-row md:justify-between md:items-center mt-5 md:mt-10"
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
    <figure itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
      <img
        src={avatarUrl}
        loading="lazy"
        alt="Michael Liendo Avatar"
        width="384"
        height="384"
        title="Michael Liendo profile picture at GitHub."
        class="rounded-2xl w-full xl:w-96 h-96 object-cover"
      />
    </figure>
  </div>
  <div
    class="gradient absolute bottom-40 left-0 w-1/5 h-1/3 -z-20 bg-[rgba(102,199,216,0.47)] dark:bg-[rgba(65,153,211,0.3)] -rotate-12"
  ></div>
  <div
    class="gradient absolute bottom-20 left-64 w-1/5 h-1/3 -z-20 bg-[rgba(116,233,100,0.3)] dark:bg-[rgba(65,211,121,0.3)] -rotate-12"
  ></div>
</section>

<section>
  <h2 class="text-3xl sm:text-4xl font-bold my-7">
    {$LL.HOMEPAGE.LATEST_NOTES()}
  </h2>

  <div class="grid xl:grid-cols-8 gap-4">
    {#each data.notes as note, index}
      {#if index === 0}
        <a
          title="Read more about {note.title}"
          href={`${baseLocaleUrl}/notes/${note.slug}`}
          class="rounded-2xl flex flex-col justify-between w-full h-full bg-[#f5f5f5] dark:bg-slate-900 xl:col-span-2 xl:row-span-2"
          itemprop="blogPost"
          itemscope
          itemtype="http://schema.org/BlogPosting"
        >
          <figure>
            <img
              src={note.cover}
              class="rounded-t-2xl"
              alt={note.title}
              title={note.title}
              loading="lazy"
              height="200px"
              width="100%"
              itemprop="image"
            />
            <figcaption class="px-5">
              <h3
                class="mt-4 text-2xl font-bold text-balance"
                itemprop="headline"
              >
                {note.title}
              </h3>
              <p class="text-lg h-48 text-truncate mt-2" itemprop="description">
                {note.description}
              </p>
            </figcaption>
          </figure>
          <div class="px-5 pb-4">
            <time
              datetime={new Date(note.date).toISOString()}
              class="flex items-center text-sm mt-2"
              itemprop="datePublished"
            >
              <Calendar class="w-4 h-4 mr-1" />
              {new Date(note.date).toLocaleDateString($locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <ul class="mt-2 flex flex-wrap" itemprop="keywords">
              {#each note.tags as tag}
                <li
                  class="text-sm mr-2 mb-2 bg-[#e0e0e0] dark:bg-black rounded py-1 px-2"
                >
                  <span
                    class="inline-block mr-1 rounded-full h-2 w-2"
                    style="background-color: {tag.color};"
                  />
                  {tag.name}
                </li>
              {/each}
            </ul>
          </div>
        </a>
      {/if}
      {#if index === 1 || index === 4}
        <a
          title="Read more about {note.title}"
          href={`${baseLocaleUrl}/notes/${note.slug}`}
          class="rounded-2xl flex flex-col justify-between w-full h-full px-5 py-4 bg-[#f5f5f5] dark:bg-slate-900 xl:col-span-2"
          itemprop="blogPost"
          itemscope
          itemtype="http://schema.org/BlogPosting"
        >
          <div>
            <h3 class="text-2xl font-bold text-balance" itemprop="headline">
              {note.title}
            </h3>
            <p class="text-lg text-truncate mt-2" itemprop="description">
              {note.description}
            </p>
          </div>

          <div>
            <time
              datetime={new Date(note.date).toISOString()}
              class="flex items-center text-sm"
              itemprop="datePublished"
            >
              <Calendar class="w-4 h-4 mr-1" />
              {new Date(note.date).toLocaleDateString($locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <ul class="mt-2 flex flex-wrap" itemprop="keywords">
              {#each note.tags as tag}
                <li
                  class="text-sm mr-2 mb-2 bg-[#e0e0e0] dark:bg-black rounded py-1 px-2"
                >
                  <span
                    class="inline-block mr-1 rounded-full h-2 w-2"
                    style="background-color: {tag.color};"
                  />
                  {tag.name}
                </li>
              {/each}
            </ul>
          </div>
        </a>
      {/if}
      {#if index === 2 || index === 3}
        <a
          title="Read more about {note.title}"
          href={`${baseLocaleUrl}/notes/${note.slug}`}
          class="block md:flex rounded-2xl w-full h-full bg-[#f5f5f5] dark:bg-slate-900 xl:col-span-4"
          itemprop="blogPost"
          itemscope
          itemtype="http://schema.org/BlogPosting"
        >
          <img
            src={note.cover}
            alt={note.title}
            title={note.title}
            height="200px"
            width="100%"
            loading="lazy"
            class="md:w-2/5 object-cover rounded-l-2xl"
            itemprop="image"
          />
          <div class="flex flex-col justify-between md:w-3/5 p-5">
            <div>
              <h3 class="text-2xl font-bold text-balance" itemprop="headline">
                {note.title}
              </h3>
              <p class="text-lg text-truncate mt-2" itemprop="description">
                {note.description}
              </p>
            </div>

            <div>
              <time
                datetime={new Date(note.date).toISOString()}
                class="flex items-center text-sm"
                itemprop="datePublished"
              >
                <Calendar class="w-4 h-4 mr-1" />
                {new Date(note.date).toLocaleDateString($locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <ul class="mt-2 flex flex-wrap" itemprop="keywords">
                {#each note.tags as tag}
                  <li
                    class="text-sm mr-2 mb-2 bg-[#e0e0e0] dark:bg-black rounded py-1 px-2"
                  >
                    <span
                      class="inline-block mr-1 rounded-full h-2 w-2"
                      style="background-color: {tag.color};"
                    />
                    {tag.name}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </a>
      {/if}
    {/each}
  </div>
</section>

<style>
  .gradient {
    filter: blur(100px);
  }
  /* 
view later
  h1 {
    background-image: linear-gradient(45deg, #f0f0f0 44.71%, #6f00ff 93.29%);
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  } */

  .text-pretty {
    text-wrap: pretty;
  }
  .text-balance {
    text-wrap: balance;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
