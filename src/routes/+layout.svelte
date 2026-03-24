<script lang="ts">
import Footer from "$lib/components/footer.svelte";
import Header from "$lib/components/header.svelte";
import "../app.css";
const { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#121212" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
    rel="stylesheet"
  />

  <meta name="author" content="Michael Liendo" />
  <meta name="publisher" content="Michael Liendo" />
  <meta name="copyright" content="Michael Liendo" />
  <meta name="robots" content="index, follow" />

  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
</svelte:head>

<div class="relative min-h-screen bg-surface text-ink">
  <div
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div
      class="absolute -left-1/4 top-0 h-[min(70vh,520px)] w-[min(70vw,480px)] rounded-full bg-accent/12 blur-3xl"
    ></div>
    <div
      class="absolute -right-1/4 bottom-0 h-[min(60vh,420px)] w-[min(65vw,420px)] rounded-full bg-white/5 blur-3xl"
    ></div>
  </div>
  <div class="mx-auto min-h-screen max-w-6xl px-5 sm:px-10 md:px-14">
    <Header />
    <main class="pb-16">{@render children()}</main>
  </div>
  <Footer />
</div>
