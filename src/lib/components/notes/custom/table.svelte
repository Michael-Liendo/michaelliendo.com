<script lang="ts">
const { children } = $props();
</script>

<div class="overflow-x-scroll">
  <table class="w-full border">
    {@render children()}
  </table>
</div>
