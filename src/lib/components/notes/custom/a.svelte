<script lang="ts">
const { href, children } = $props();
</script>

<a class="text-accent" {href}>
  {@render children()}
</a>
