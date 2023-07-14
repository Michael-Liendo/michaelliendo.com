<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import Entry from '$lib/components/Entry.svelte';

	import type { Note } from '$lib/utils/Notion/Notes/types';

	export let data: {
		notes: Note[];
	};

	let title = 'Notes | Michael Liendo';
	let description = 'Notes taken while reading about computer science and software development.';
	let keywords =
		'notes, blog, articles, writing, content, topics, tips, insights, experiences, knowledge';
	let avatarUrl = 'https://avatars.githubusercontent.com/u/70660410?v=4';

	$: {
		switch ($locale) {
			case 'en':
				title = 'Notes | Michael Liendo';
				description = 'Notes taken while reading about computer science and software development.';
				keywords =
					'notes, blog, articles, writing, content, topics, tips, insights, experiences, knowledge';
				break;
			case 'es':
				title = 'Notas | Michael Liendo';
				description =
					'Notas tomadas mientras leo sobre ciencias de la computación y desarrollo de software.';
				keywords =
					'notas, blog, artículos, escritura, contenido, temas, consejos, perspectivas, experiencias, conocimiento';
				break;
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={avatarUrl} />
	<!-- Open Graph data -->
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://michaelliendo.com/" />
	<meta property="og:image" content={avatarUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Michael Liendo" />
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@MichaelMLiendo" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:creator" content="@MichaelMLiendo" />
	<meta name="twitter:image:src" content={avatarUrl} />
</svelte:head>

<ul class="flex flex-col md:grid md:grid-cols-3 md:gap-6 px-4 md:px-0">
	{#each data.notes as note}
		<Entry
			title={note.title}
			description={note.description}
			publishDate={new Date(note.date)}
			tags={note.tags}
			slug={note.slug}
			previewImageUrl={note.cover}
		/>
	{/each}
</ul>
