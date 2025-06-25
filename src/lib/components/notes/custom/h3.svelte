<script lang="ts">
const { children } = $props();

// biome-ignore lint/style/useConst: svelte doesnt support const
let data = $state<HTMLHeadingElement | null>(null);
let href = $state("");
let id = $state("");

$effect(() => {
	if (typeof data?.innerText === "string") {
		id = data?.innerText?.toLowerCase().trim().split(" ").join("-");
		href = `#${id}`;
	}
});

const focusElement = () => {
	data?.scrollIntoView();
};
</script>

<h3 {id} class="text-xl font-display relative group py-4" bind:this={data}>
  <a class="flex items-center no-underline" {href} onclick={focusElement}>
    <span class="mr-2">
      {@render children()}
    </span>
    <span
      class="h-8 w-8 invisible flex justify-center items-center group-hover:visible bg-gray-200 font-bold rounded-full dark:bg-gray-600 dark:text-gray-200"
      >#
    </span>
  </a>
</h3>
