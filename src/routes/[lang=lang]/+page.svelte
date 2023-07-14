<script lang="ts">
	import Calendar from '~icons/mdi/calendar-month';
	import { page } from '$app/stores';
	import LL, { locale } from '$i18n/i18n-svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';

	import type { Note } from '$lib/utils/Notion/Notes/types';

	export let data: {
		notes: Note[];
	};

	let title = 'Michael Liendo | Software Developer';
	let description = 'A Software Developer interested in Systems Programming and Web Development.';
	let keywords =
		'michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving';
	let avatarUrl = 'https://avatars.githubusercontent.com/u/70660410?v=4';

	$: {
		switch ($locale) {
			case 'en':
				title = 'Michael Liendo | Software Developer';
				description = 'A Software Developer interested in Systems Programming and Web Development.';
				keywords =
					'michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving';

				break;
			case 'es':
				title = 'Michael Liendo | Desarrollador de Software';
				description =
					'Un Desarrollador de Software interesado en Programación de Sistemas y Desarrollo Web.';
				keywords =
					'michael liendo, inicio, notas, portafolio, desarrollador de software, svelte, typescript, desarrollo web, proyectos desafiantes, colaboración, resolución de problemas';
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
	<meta property="og:site_name" content="MIchael Liendo" />
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@MichaelMLiendo" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:creator" content="@MichaelMLiendo" />
	<meta name="twitter:image:src" content={avatarUrl} />
</svelte:head>

<section
	class="flex flex-col justify-center items-center md:flex-row md:mx-auto md:justify-evenly md:items-center"
>
	<div class="flex md:items-center md:justify-center py-4 w-[300px]">
		<figure class="w-[300px]">
			<img
				class="rounded-full"
				src={avatarUrl}
				height="500"
				width="500"
				alt="A selfie of Michael Liendo"
			/>
		</figure>
	</div>
	<article class="flex flex-col py-4 md:w-3/6 w-4/6">
		<strong class="text-3xl md:text-4xl py-4 text-center md:text-left">
			{$LL.HOMEPAGE.HI({ name: 'Michael', surname: 'Liendo' })}
		</strong>
		<p class="text-center md:text-left">{$LL.HOMEPAGE.ABOUT()}</p>
		<SocialMedia />
	</article>
</section>
<section class="flex flex-col mx-4 my-4">
	<div>
		<h2 class="text-xl font-bold mb-4">{$LL.HOMEPAGE.LATEST_NOTES()}</h2>
		<ul class="space-y-2">
			{#each data.notes.filter( (note) => note.tags?.some((tag) => tag.name === 'programming' || tag.name == 'programación') ) as note}
				<li>
					<a
						href="/{$page.params.lang}/notes/{note.slug}"
						class="py-2 flex items-center justify-between rounded hover:bg-light-background dark:hover:bg-dark-background cursor-pointer mb-4 last-of-type:mb-0"
					>
						<div class="pl-2 flex items-center">
							<figure class="w-[18px] h-[18px] self-center">
								{#if note.icon?.external?.url}
									<img src={note.icon?.external?.url} width="50" alt={note.icon?.external?.url} />
								{:else}
									{note.icon?.emoji || ' '}
								{/if}
							</figure>
							<span class="px-4">
								{note.title?.slice(0, 60)}
							</span>
						</div>
						<span class="hidden md:flex items-center md:w-[220px] text-left">
							<figure class="pr-2">
								<Calendar class="text-gray-800 dark:text-white w-[18px] h-[18px]" />
							</figure>
							<time class="text-sm mr-2" dateTime={new Date(note.date).toString()}>
								{new Date(note.date).toLocaleDateString(`${$page.data.locale}-us`, {
									month: 'long',
									day: '2-digit',
									year: 'numeric'
								})}
							</time></span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
