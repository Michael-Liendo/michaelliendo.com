<script lang="ts">
const { children } = $props();
</script>

<blockquote
  class="p-2 text-black bg-yellow-100 border-l-yellow-600 border-l-[4px] rounded-tr-md rounded-br-md my-4"
>
  {@render children()}
</blockquote>
