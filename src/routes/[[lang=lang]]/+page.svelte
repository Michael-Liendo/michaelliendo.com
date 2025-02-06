<script lang="ts">
import { run } from "svelte/legacy";

import LL, { locale } from "$i18n/i18n-svelte";
import { baseLocale, locales } from "$i18n/i18n-util";

const baseLocaleUrl = $locale === baseLocale ? "" : `/${$locale}`;
const currentPageLocale = $locale;

let title = $state("Michael Liendo | Software Developer");
let description = $state(
	"A Software Developer interested in Systems Programming and Web Development.",
);
let keywords = $state(
	"michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving",
);
const avatarUrl = "https://avatars.githubusercontent.com/u/70660410?v=4";

run(() => {
	switch ($locale) {
		case "en":
			title = "Michael Liendo | Software Developer";
			description =
				"A Software Developer interested in Systems Programming and Web Development.";
			keywords =
				"michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving";
			break;
		case "es":
			title = "Michael Liendo | Desarrollador de Software";
			description =
				"Un Desarrollador de Software interesado en Programación de Sistemas y Desarrollo Web.";
			keywords =
				"michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas";
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
      <!-- <SocialMedia /> -->
    </div>
  </div>
  <div class="w-full md:flex justify-end">
    <figure itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
      <img
        src={avatarUrl}
        loading="lazy"
        alt="Michael Liendo Avatar"
        title="Michael Liendo profile picture at GitHub."
        class="rounded-2xl w-full xl:w-96 h-96 object-cover"
      />
    </figure>
  </div>
  <div
    class="gradient absolute bottom-40 left-0 w-1/5 h-1/3 -z-20 bg-[rgba(102,199,216,0.47)] dark:bg-[rgba(65,153,211,0.3)] -rotate-12"
  ></div>
  <div
    class="gradient absolute bottom-20 left-64 w-1/5 h-1/3 -z-20 bg-[rgba(100,202,233,0.3)] dark:bg-[rgba(48,96,136,0.3)] -rotate-12"
  ></div>
</section>

<section>
  <h2 class="text-3xl sm:text-4xl font-bold my-7">
    {$LL.HOMEPAGE.LATEST_NOTES()}
  </h2>

</section>

<style>
  .gradient {
    filter: blur(100px);
  }
</style>
