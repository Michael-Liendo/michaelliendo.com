<script lang="ts">
	import { onMount } from 'svelte';
	import Markdown from 'svelte-markdown';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark-dimmed.css';
	import Heading from '$lib/components/notes/custom/Heading.svelte';

	export let data;

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<title>{data.note.title}</title>
	<meta name="description" content={data.note.description} />
	<meta
		name="keywords"
		content={`${data.note.title}, ${data.note.description}, ${data.note.tags
			.map((tag) => tag.name)
			.join(', ')}`}
	/>
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
	<meta property="article:published_time" content={new Date(data.note.date).toJSON()} />
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@MichaelMLiendo" />
	<meta name="twitter:title" content={data.note.title} />
	<meta name="twitter:description" content={data.note.description} />
	<meta name="twitter:creator" content="@MichaelMLiendo" />
	<meta name="twitter:image:src" content={data.note.cover} />
</svelte:head>

<div
	class="my-2 prose max-w-full dark:prose-p:text-white prose-strong:text-green-500 dark:prose-headings:text-white prose-green prose-code:text-white dark:prose-li:text-slate-100 prose-li:text-slate-900 prose-code:!bg-dark-background prose-pre:bg-dark-background"
>
	<figure class="flex justify-center items-center overflow-hidden rounded">
		<img src={data.note.cover} alt={data.note.title} class="h-96 w-full object-cover" />
	</figure>
	<header class="">
		<div class="flex mb-2">
			<span class="flex items-center mr-2">
				<time class="text-sm mr-2" datetime={data.note.date}
					>{new Date(data.note.date).toLocaleDateString(`${data.locale}-us`, {
						month: 'long',
						day: '2-digit',
						year: 'numeric'
					})}</time
				>
			</span>
		</div>
	</header>
	<article>
		<Markdown source={data.markdown.parent} renderers={{ heading: Heading }} />
	</article>
</div>
