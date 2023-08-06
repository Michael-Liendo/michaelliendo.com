<script lang="ts">
	let data: HTMLElement;
	let href = '';
	let id = '';

	export let depth: number;
	export let text: string;

	$: {
		if (typeof data?.innerText === 'string') {
			id = data?.innerText?.toLowerCase().trim().split(' ').join('-');
			href = `#${id}`;
		}
	}

	const focusElement = () => {
		data.scrollIntoView();
	};
</script>

{#if depth === 1}
	<h1 {id} class="font-body relative group py-2" bind:this={data}>
		<slot />
	</h1>
{:else if depth === 2}
	<a class="no-underline" {href} on:click={focusElement}>
		<h2 {id} class="font-body relative group py-2" bind:this={data}>
			<span>
				<slot />
			</span>
			<span
				class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
			>
				#
			</span>
		</h2>
	</a>
{:else if depth === 3}
	<a class="no-underline" {href} on:click={focusElement}>
		<h3 {id} class="font-body relative group py-2" bind:this={data}>
			<span>
				<slot />
			</span>
			<span
				class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
			>
				#
			</span>
		</h3>
	</a>
{:else if depth === 4}
	<a class="no-underline" {href} on:click={focusElement}>
		<h4 {id} class="font-body relative group py-2" bind:this={data}>
			<span>
				<slot />
			</span>
			<span
				class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
			>
				#
			</span>
		</h4>
	</a>
{:else if depth === 5}
	<a class="no-underline" {href} on:click={focusElement}>
		<h5 {id} class="font-body relative group py-2" bind:this={data}>
			<span>
				<slot />
			</span>
			<span
				class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
			>
				#
			</span>
		</h5>
	</a>
{:else if depth === 6}
	<a class="no-underline" {href} on:click={focusElement}>
		<h6 {id} class="font-body relative group py-2" bind:this={data}>
			<span>
				<slot />
			</span>
			<span
				class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
			>
				#
			</span>
		</h6>
	</a>
{:else}
	{text}
{/if}
