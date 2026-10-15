<script lang="ts">
import { page } from "$app/state";

import LL, { locale } from "$i18n/i18n-svelte";
import { baseLocale } from "$i18n/i18n-util";
import { cn } from "$lib";
import ThemeToggle from "$lib/components/theme-toggle.svelte";
import { removeLocaleFromPath, replaceLocaleInUrl } from "$lib/utils/locale";
import { PublicRoutesEnum } from "$lib/utils/routes";

const currentUrl = $derived(removeLocaleFromPath(page.url.pathname));
const prefix = $derived($locale === baseLocale ? "" : `/${$locale}`);

const otherLocale = $derived($locale === "en" ? "es" : "en");
const otherLocaleHref = $derived(replaceLocaleInUrl(page.url, otherLocale));

const links = $derived([
	{
		href: `${prefix}/#casos`,
		label: $locale === "en" ? "Work" : "Casos",
		active: false,
	},
	{
		href: `${prefix}${PublicRoutesEnum.Projects}`,
		label: $LL.LAYOUT.NAV.PROJECTS(),
		active: currentUrl.startsWith(PublicRoutesEnum.Projects),
	},
	{
		href: `${prefix}${PublicRoutesEnum.Notes}`,
		label: $LL.LAYOUT.NAV.NOTES(),
		active: currentUrl.startsWith(PublicRoutesEnum.Notes),
	},
]);
</script>

<header
  class="sticky top-0 z-30 -mx-6 flex items-center justify-between gap-2 bg-surface/85 px-6 py-4 backdrop-blur-md"
>
  <a
    href="{prefix}{PublicRoutesEnum.Home}"
    class="flex shrink-0 items-center gap-2.5 font-semibold text-ink no-underline"
    aria-current={currentUrl === PublicRoutesEnum.Home ? 'page' : undefined}
  >
    <img
      src="/images/michael-liendo.webp"
      alt=""
      width="34"
      height="34"
      class="size-[34px] rounded-full object-cover"
    />
    <span class="hidden sm:inline">Michael Liendo</span>
  </a>

  <nav aria-label={$locale === 'en' ? 'Main' : 'Principal'}>
    <ul
      class="flex items-center gap-1 rounded-full bg-surface-sunken p-1 text-[14.5px]"
    >
      {#each links as link (link.href)}
        <li>
          <a
            href={link.href}
            aria-current={link.active ? 'page' : undefined}
            class={cn(
              'block rounded-full px-2.5 py-1.5 text-ink-muted no-underline transition-colors hover:bg-surface-elevated hover:text-ink sm:px-3.5',
              link.active && 'bg-surface-elevated text-ink shadow-[0_1px_2px_rgb(0_0_0/0.06)]',
            )}>{link.label}</a
          >
        </li>
      {/each}
    </ul>
  </nav>

  <div class="flex shrink-0 items-center gap-1 sm:gap-2">
    <a
      href={otherLocaleHref}
      hreflang={otherLocale}
      lang={otherLocale}
      class="rounded-lg px-1.5 py-1.5 text-[13.5px] sm:px-2 font-medium text-ink-muted no-underline transition-colors hover:text-ink"
      title={otherLocale === 'en' ? 'Read in English' : 'Leer en español'}
      data-sveltekit-reload>{otherLocale.toUpperCase()}</a
    >
    <ThemeToggle />
    <a
      href="{prefix}/#contacto"
      class="hidden rounded-xl bg-ink px-4 py-2.5 text-[14.5px] font-medium text-surface no-underline transition-colors hover:bg-accent hover:text-white sm:inline-flex"
      >{$locale === 'en' ? "Let's talk" : 'Hablemos'}</a
    >
  </div>
</header>
