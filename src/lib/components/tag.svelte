<script lang="ts">
import { cn } from "$lib";

const { children } = $props();
</script>

<span
  class={cn(
    'inline-flex cursor-default items-center gap-1.5 rounded-lg border border-border bg-accent-muted/80 px-2.5 py-1 font-mono text-xs font-medium text-ink/90'
  )}
>
  {@render children?.()}
</span>
