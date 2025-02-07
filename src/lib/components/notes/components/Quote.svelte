<script lang="ts">
  const { children } = $props();
</script>

<blockquote class="relative p-6 font-body">
  <figure
    class="text-2xl bg-orange-700 dark:bg-gray-700 rounded-full h-10 w-10 flex justify-center items-center absolute left-0 top-[25%] text-"
  >
    💭
  </figure>
  <p
    class="note-quote-content bg-orange-900 text-white dark:bg-gray-900 p-8 rounded-xl"
  >
    {@render children()}
  </p>
</blockquote>
