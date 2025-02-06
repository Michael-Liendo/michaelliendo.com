<script lang="ts">
const { data } = $props();

const note = data.note;
</script>

<svelte:head>
  <title>{note.title}</title> 
  <meta name="description" content={note.description} />
  <meta
    name="keywords"
    content={`${note.title}, ${note.description}, ${note.categories.join(', ')}`}
  />
  <meta itemprop="image" content={note.preview_image_url} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={note.title} />
  <meta itemprop="description" content={note.description} />
  <!-- Open Graph data -->
  <meta property="og:title" content={note.title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://michaelliendo.com/" />
  <meta property="og:description" content={note.description} />
  <meta property="og:image" content={note.preview_image_url} />
  <meta property="og:site_name" content="Michael Liendo" />
  <meta
    property="article:published_time"
    content={new Date(note.date).toJSON()}
  />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@mykeliendo" />
  <meta name="twitter:title" content={note.title} />
  <meta name="twitter:description" content={note.description} />
  <meta name="twitter:creator" content="@mykeliendo" />
  <meta name="twitter:image:src" content={note.preview_image_url} />
  
</svelte:head>

<div id="note-container">
  {#if note}
    {@const Component = note.content}
    <Component />
  {/if}
</div>