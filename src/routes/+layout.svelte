<script lang="ts">
import Footer from "$lib/components/footer.svelte";
import Header from "$lib/components/header.svelte";
import "../app.css";
const { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#3bd6cf" />

  <meta name="author" content="Michael Liendo" />
  <meta name="publisher" content="Michael Liendo" />
  <meta name="copyright" content="Michael Liendo" />
  <meta name="robots" content="index, follow" />

  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
</svelte:head>

<div class="bg-white">
  <div class="min-h-screen px-5 sm:px-10 md:px-20">
    <Header />
    <main>{@render children()}</main>
  </div>
  <Footer />
</div>
