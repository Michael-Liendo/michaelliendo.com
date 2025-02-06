<script lang="ts">
import LL, { locale } from "$i18n/i18n-svelte";
import { baseLocale, locales } from "$i18n/i18n-util";

const currentPageLocale = $locale;
</script>

<svelte:head>
  <title>{$LL.SEO.TITLE()}</title>
  <meta name="description" content={$LL.SEO.DESCRIPTION()} />
  <meta name="keywords" content={$LL.SEO.KEYWORDS()} />
  <!-- Schema.org markup for Google+ -->
    <meta itemprop="name" content={$LL.SEO.TITLE()} />
    <meta itemprop="description" content={$LL.SEO.DESCRIPTION()} />
    <meta itemprop="image" content={$LL.SEO.IMAGE()} />
  <!-- Open Graph data -->
    <meta property="og:title" content={$LL.SEO.TITLE()} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://michaelliendo.com/" />
    <meta property="og:image" content={$LL.SEO.IMAGE()} />
    <meta property="og:description" content={$LL.SEO.DESCRIPTION()} />
    <meta property="og:site_name" content="Michael Liendo" />
  <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@MichaelMLiendo" />
    <meta name="twitter:title" content={$LL.SEO.TITLE()} />
    <meta name="twitter:description" content={$LL.SEO.DESCRIPTION()} />
    <meta name="twitter:creator" content="@MichaelMLiendo" />
    <meta name="twitter:image:src" content={$LL.SEO.IMAGE()} />

    {#each locales as locale}
		{#if currentPageLocale !== locale}
			<link
				rel="alternate"
				hreflang={locale}
				href={`https://michaelliendo.com/${locale === baseLocale ? '' : locale}`}
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
        src={$LL.SEO.IMAGE()}
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
