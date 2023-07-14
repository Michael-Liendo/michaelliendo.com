<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	export let data;
</script>

<article
	class="my-2 prose max-w-3xl dark:prose-p:text-white prose-strong:text-green-500 dark:prose-headings:text-white prose-green dark:prose-code:text-white"
>
	<Markdown md={data.markdown.parent} />
</article>
