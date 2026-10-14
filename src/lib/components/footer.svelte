<script lang="ts">
import { locale } from "$i18n/i18n-svelte";
import { cn } from "$lib";

const { wide = false }: { wide?: boolean } = $props();

const currentYear = new Date().getFullYear();
const startYear = 2021;
</script>

<footer
  class={cn(
    'mx-auto flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 pb-12 pt-6 font-mono text-[13px] text-ink-muted',
    wide ? 'max-w-5xl' : 'max-w-[760px]',
  )}
>
  <p>
    © {startYear}–{currentYear} Michael Liendo · {$locale === 'en'
      ? 'handmade in Caracas'
      : 'hecho a mano en Caracas'}
  </p>
  <a
    class="link-underline text-ink-muted"
    href="https://github.com/Michael-Liendo/michaelliendo.com"
    rel="noreferrer"
    >{$locale === 'en' ? 'Source code' : 'Código fuente'}</a
  >
</footer>
