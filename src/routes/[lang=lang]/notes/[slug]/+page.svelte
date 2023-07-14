<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	export let data;
</script>

<svelte:head>
	<title>{data.note.title}</title>
	<meta name="description" content={data.note.description} />
	<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content={data.note.title} />
	<meta itemprop="description" content={data.note.description} />
	<meta itemprop="image" content={data.note.cover} />
	<!-- Open Graph data -->
	<meta property="og:title" content={data.note.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://michaelliendo.com/" />
	<meta property="og:image" content={data.note.cover} />
	<meta property="og:description" content={data.note.description} />
	<meta property="og:site_name" content="Michael Liendo" />
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@MichaelMLiendo" />
	<meta name="twitter:title" content={data.note.title} />
	<meta name="twitter:description" content={data.note.description} />
	<meta name="twitter:creator" content="@MichaelMLiendo" />
	<meta name="twitter:image:src" content={data.note.cover} />
</svelte:head>

<article
	class="my-2 prose max-w-full dark:prose-p:text-white prose-strong:text-green-500 dark:prose-headings:text-white prose-green dark:prose-code:text-white"
>
	<img src={data.note.cover} alt={data.note.title} class="h-96 w-full object-cover" />
	<Markdown md={data.markdown.parent} />
</article>
