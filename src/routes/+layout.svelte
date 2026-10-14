<script lang="ts">
import { page } from "$app/state";
import Footer from "$lib/components/footer.svelte";
import Header from "$lib/components/header.svelte";
import { cn } from "$lib";
import { removeLocaleFromPath } from "$lib/utils/locale";
import { PublicRoutesEnum } from "$lib/utils/routes";
import "../app.css";
const { children } = $props();

// Reading pages use a narrow editorial column; catalog pages need more room.
const wide = $derived(
	[PublicRoutesEnum.Projects, PublicRoutesEnum.Automations].includes(
		removeLocaleFromPath(page.url.pathname) as PublicRoutesEnum,
	),
);
</script>

<svelte:head>
  <meta name="theme-color" content="#FBFAF7" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Schibsted+Grotesk:wght@400;500;600&display=swap"
    rel="stylesheet"
  />

  <meta name="author" content="Michael Liendo" />
  <meta name="publisher" content="Michael Liendo" />
  <meta name="copyright" content="Michael Liendo" />
  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />
  <meta name="geo.region" content="VE-A" />
  <meta name="geo.placename" content="Caracas" />

  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
  <link rel="apple-touch-icon" href="/images/michael-liendo.jpg" />
  <link rel="manifest" href="/manifest.json" />
</svelte:head>

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-surface"
  >Skip to content</a
>

<div class="flex min-h-screen flex-col bg-surface text-[17px] leading-[1.65] text-ink">
  <div
    class={cn(
      'mx-auto w-full flex-1 px-6',
      wide ? 'max-w-5xl' : 'max-w-[760px]',
    )}
  >
    <Header />
    <main id="main" class="pb-16">{@render children()}</main>
  </div>
  <Footer {wide} />
</div>
