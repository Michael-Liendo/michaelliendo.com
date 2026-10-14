<script lang="ts">
import type { Snippet } from "svelte";

const {
	id,
	label,
	children,
}: { id: string; label: string; children: Snippet } = $props();
</script>

<section
  aria-labelledby={id}
  class="flex flex-wrap gap-x-10 gap-y-4 border-t border-border py-12"
>
  <h2
    {id}
    class="m-0 shrink-0 grow-0 basis-[140px] pt-1 font-mono text-[13.5px] font-normal text-ink-muted"
  >
    {label}
  </h2>
  <div class="min-w-0 flex-[1_1_400px]">
    {@render children()}
  </div>
</section>
