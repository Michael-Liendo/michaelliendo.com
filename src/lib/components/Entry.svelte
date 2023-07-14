<script lang="ts">
	import { page } from '$app/stores';
	import type { MultiSelectEntity } from '$lib/utils/Notion/Notes/types';
	import Calendar from '~icons/mdi/calendar-month';

	export let title: string = '';
	export let description: string = '';
	export let publishDate: Date;
	export let tags: MultiSelectEntity[] = [];
	export let slug: string = '';
	export let previewImageUrl: string | null = '';

	const LANGUAGE_COLOR: {
		[lang: string]: string;
	} = {
		python: '#3572A5',
		rust: '#dea584',
		svelte: '#ff3e00',
		typescript: '#2b7489'
	};
	const langTags = Object.keys(LANGUAGE_COLOR);

	let formattedDate = new Date(publishDate).toLocaleDateString(`${$page.data.locale}-us`, {
		month: 'long',
		day: '2-digit',
		year: 'numeric'
	});
	let displayTags = tags?.sort((a, b) => (langTags.includes(a.name) ? 1 : 0));
</script>

<li class="mb-4 md:mb-0 last-of-type:mb-0">
	<figure class="rounded overflow-hidden pb-4 flex justify-center items-center h-[150px]">
		<img alt={title} src={previewImageUrl} />
	</figure>
	<header>
		<h1 class="text-xl py-4 font-extrabold cursor-pointer hover:text-link hover:underline">
			<a href="/{$page.params.lang}/notes/{slug}">
				{title}
			</a>
		</h1>
	</header>
	<main class="pb-4">
		<p>{description}</p>
	</main>
	<footer class="flex flex-col">
		<div class="flex mb-2">
			<span class="flex items-center mr-2">
				<figure class="mr-2">
					<Calendar class="text-gray-800 dark:text-white h-4 w-4" />
				</figure>
				<time class="text-sm mr-2" datetime={publishDate.toString()}>{formattedDate}</time>
			</span>
		</div>
		<ul class="flex flex-wrap">
			{#each tags as tag}
				<li class="text-sm mr-2 mb-2 bg-light-background dark:bg-dark-background rounded py-1 px-2">
					<span
						class="inline-block mr-1 rounded-full h-2 w-2"
						style="background-color: {tag.color};"
					/>
					{tag.name}
				</li>
			{/each}
		</ul>
	</footer>
</li>
