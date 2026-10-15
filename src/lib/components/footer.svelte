<script lang="ts">
import { locale } from "$i18n/i18n-svelte";
import { cn } from "$lib";

const { wide = false }: { wide?: boolean } = $props();

const currentYear = new Date().getFullYear();
const startYear = 2021;

const links = [
	{ href: "https://github.com/Michael-Liendo", label: "GitHub" },
	{ href: "https://www.linkedin.com/in/michaelliendo", label: "LinkedIn" },
	{ href: "https://x.com/michaelliendo_", label: "X" },
	{ href: "https://www.instagram.com/michaelliendo_/", label: "Instagram" },
];
</script>

<footer
  class={cn(
    'mx-auto flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 pb-12 pt-10 text-[14px] text-ink-muted',
    wide ? 'max-w-[1080px]' : 'max-w-[760px]',
  )}
>
  <p>
    © {startYear}–{currentYear} Michael Liendo · {$locale === 'en'
      ? 'Made in Caracas'
      : 'Hecho en Caracas'}
  </p>
  <ul class="flex flex-wrap items-center gap-5">
    {#each links as link (link.href)}
      <li>
        <a
          href={link.href}
          rel="me noreferrer"
          class="text-ink-muted no-underline transition-colors hover:text-ink"
          >{link.label}</a
        >
      </li>
    {/each}
    <li>
      <a
        href="https://github.com/Michael-Liendo/michaelliendo.com"
        rel="noreferrer"
        class="text-ink-muted no-underline transition-colors hover:text-ink"
        >{$locale === 'en' ? 'Source code' : 'Código fuente'}</a
      >
    </li>
  </ul>
</footer>
