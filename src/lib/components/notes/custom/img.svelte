<script lang="ts">
  const { alt, src } = $props();
</script>

<figure class="flex justify-center items-center w-full">
  <img {src} {alt} />
</figure>
