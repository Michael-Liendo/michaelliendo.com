<script lang="ts">
import type { PageProps } from "./$types";

const { data }: PageProps = $props();
</script>

<div id="notes-container">  
  {#each data.notes as note}
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold">{note.title}</h2>
      <p class="text-xl">{note.description}</p>
    </div>
    <hr />
  {/each}

</div>