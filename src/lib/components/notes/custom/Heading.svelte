<script lang="ts">
  import { run } from 'svelte/legacy';

  let data: HTMLElement | undefined = $state();
  let href = $state('');
  let id = $state('');

  interface Props {
    depth: number;
    text: string;
    children?: import('svelte').Snippet;
  }

  let { depth, text, children }: Props = $props();

  run(() => {
    if (typeof data?.innerText === 'string') {
      id = data?.innerText?.toLowerCase().trim().split(' ').join('-');
      href = `#${id}`;
    }
  });

  const focusElement = () => {
    data?.scrollIntoView();
  };
</script>

{#if depth === 1}
  <h1 {id} class="font-body relative group py-2" bind:this={data}>
    {@render children?.()}
  </h1>
{:else if depth === 2}
  <a class="no-underline" {href} onclick={focusElement}>
    <h2 {id} class="font-body relative group py-2" bind:this={data}>
      <span>
        {@render children?.()}
      </span>
      <span
        class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
      >
        #
      </span>
    </h2>
  </a>
{:else if depth === 3}
  <a class="no-underline" {href} onclick={focusElement}>
    <h3 {id} class="font-body relative group py-2" bind:this={data}>
      <span>
        {@render children?.()}
      </span>
      <span
        class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
      >
        #
      </span>
    </h3>
  </a>
{:else if depth === 4}
  <a class="no-underline" {href} onclick={focusElement}>
    <h4 {id} class="font-body relative group py-2" bind:this={data}>
      <span>
        {@render children?.()}
      </span>
      <span
        class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
      >
        #
      </span>
    </h4>
  </a>
{:else if depth === 5}
  <a class="no-underline" {href} onclick={focusElement}>
    <h5 {id} class="font-body relative group py-2" bind:this={data}>
      <span>
        {@render children?.()}
      </span>
      <span
        class="invisible inline p-1 group-hover:visible bg-gray-200 font-bold rounded h-8 w-8 dark:bg-gray-600 dark:text-gray-200"
      >
        #
      </span>
    </h5>
  </a>
{:else if depth === 6}
  <a class="no-underline" {href} onclick={focusElement}>
    <h6 {id} class="font-body relative group py-2" bind:this={data}>
      <span>
        {@render children?.()}
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
