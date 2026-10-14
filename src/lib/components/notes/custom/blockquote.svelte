<script lang="ts">
const { children } = $props();
</script>

<blockquote
  class="my-6 rounded-r-xl border-l-[3px] border-accent bg-surface-sunken px-5 py-4 text-ink not-italic [&_p]:m-0 [&_p]:text-ink"
>
  {@render children()}
</blockquote>
