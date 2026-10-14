<script lang="ts">
import { page } from "$app/state";
import Footer from "$lib/components/footer.svelte";
import Header from "$lib/components/header.svelte";
import { cn } from "$lib";
import { removeLocaleFromPath } from "$lib/utils/locale";
import { PublicRoutesEnum } from "$lib/utils/routes";
// Self-hosted fonts (latin + latin-ext covers es/en).
import "@fontsource/inter-tight/latin-400.css";
import "@fontsource/inter-tight/latin-ext-400.css";
import "@fontsource/inter-tight/latin-500.css";
import "@fontsource/inter-tight/latin-ext-500.css";
import "@fontsource/inter-tight/latin-600.css";
import "@fontsource/inter-tight/latin-ext-600.css";
import "@fontsource/inter-tight/latin-700.css";
import "@fontsource/inter-tight/latin-ext-700.css";
import "@fontsource/inter-tight/latin-400-italic.css";
import "@fontsource/inter-tight/latin-ext-400-italic.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-ext-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "@fontsource/jetbrains-mono/latin-ext-500.css";
import "../app.css";
const { children } = $props();

// Notes are read in a narrow column; home and projects use the full width.
const wide = $derived(
	!removeLocaleFromPath(page.url.pathname).startsWith(PublicRoutesEnum.Notes),
);
</script>

<svelte:head>
  <meta name="theme-color" content="#FFFFFF" />

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

<div class="flex min-h-screen flex-col bg-surface text-[17px] leading-[1.6] text-ink">
  <div
    class={cn(
      'mx-auto w-full flex-1 px-6',
      wide ? 'max-w-[1080px]' : 'max-w-[760px]',
    )}
  >
    <Header />
    <main id="main" class="pb-16">{@render children()}</main>
  </div>
  <Footer {wide} />
</div>
