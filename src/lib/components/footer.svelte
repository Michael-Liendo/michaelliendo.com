<script lang="ts">
import LL from "$i18n/i18n-svelte";

const currentYear = new Date().getFullYear();
const startYear = 2021;
</script>

<footer class="w-full mt-5 px-4 py-5">
  <div class=" flex items-center justify-center">
    <small>
      {$LL.LAYOUT.FOOTER.COPYRIGHT({ currentYear, startYear })}
    </small>
  </div>
  <div class="flex justify-center">
    <small
      ><a
        title="Source code"
        class="underline"
        href="https://github.com/Michael-Liendo/michaelliendo.com"
        >Source code</a
      ></small
    >
  </div>
</footer>
