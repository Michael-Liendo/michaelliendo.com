<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#3bd6cf" />

  <link rel="canonical" href={`https://michaelliendo.com/`} />

  <meta name="author" content="Michael Liendo" />
  <meta name="publisher" content="Michael Liendo" />
  <meta name="copyright" content="Michael Liendo" />
  <meta name="robots" content="index, follow" />

  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
</svelte:head>

<div class="bg-white dark:bg-black">
  <div class="min-h-screen">
    <Header />
    <main class="px-5 sm:px-10 md:px-20">{@render children?.()}</main>
  </div>
  <Footer />
</div>
