<script lang="ts">
import type { PageProps } from "./$types";

const { data }: PageProps = $props();
</script>

<div id="note-container">
  <!-- svelte-ignore svelte_component_deprecated -->
  <svelte:component this={data.content} />
</div>