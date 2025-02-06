<script lang="ts">
import "../app.css";
const { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#3bd6cf" />

  <link rel="canonical" href={`https://michaelliendo.com/`} />

  <meta name="author" content="Michael Liendo" />
  <meta name="publisher" content="Michael Liendo" />
  <meta name="copyright" content="Michael Liendo" />
  <meta name="robots" content="index, follow" />

  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
</svelte:head>

{@render children()}
