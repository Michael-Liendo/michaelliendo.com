<script lang="ts">
const { href, children } = $props();
</script>

<a class="text-blue-600" {href}>
  {@render children()}
</a>
