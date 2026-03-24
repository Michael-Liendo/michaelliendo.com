<script lang="ts">
import LL from "$i18n/i18n-svelte";

const currentYear = new Date().getFullYear();
const startYear = 2021;
</script>

<footer
  class="mt-auto w-full border-t border-border bg-surface-elevated/50 px-4 py-10 backdrop-blur-sm"
>
  <div class="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center sm:px-10 md:px-14">
    <p class="text-sm text-ink-muted">
      {$LL.LAYOUT.FOOTER.COPYRIGHT({ currentYear, startYear })}
    </p>
    <p>
      <a
        title="Source code"
        class="text-sm font-medium text-link underline-offset-4 transition hover:text-link-hover hover:underline"
        href="https://github.com/Michael-Liendo/michaelliendo.com"
        >Source code</a
      >
    </p>
  </div>
</footer>
