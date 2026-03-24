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
      class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 font-bold text-neutral-200 invisible group-hover:visible"
      >#
    </span>
  </a>
</h3>
