<script lang="ts">
import { page } from "$app/state";

import LL, { locale } from "$i18n/i18n-svelte";
import { baseLocale } from "$i18n/i18n-util";
import { cn } from "$lib";
import { removeLocaleFromPath, replaceLocaleInUrl } from "$lib/utils/locale";
import { PublicRoutesEnum } from "$lib/utils/routes";

const currentUrl = $derived(removeLocaleFromPath(page.url.pathname));
const prefix = $derived($locale === baseLocale ? "" : `/${$locale}`);

const otherLocale = $derived($locale === "en" ? "es" : "en");
const otherLocaleHref = $derived(replaceLocaleInUrl(page.url, otherLocale));

const links = $derived([
	{ href: PublicRoutesEnum.Projects, label: $LL.LAYOUT.NAV.PROJECTS() },
	{ href: PublicRoutesEnum.Notes, label: $LL.LAYOUT.NAV.NOTES() },
]);
</script>

<header
  class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-8"
>
  <a
    href="{prefix}{PublicRoutesEnum.Home}"
    class="font-semibold text-ink no-underline transition-colors hover:text-accent"
    aria-current={currentUrl === PublicRoutesEnum.Home ? 'page' : undefined}
  >
    Michael Liendo
  </a>

  <nav aria-label={$locale === 'en' ? 'Main' : 'Principal'}>
    <ul class="flex flex-wrap items-center gap-x-[22px] gap-y-1 text-[15px]">
      {#each links as link (link.href)}
        <li>
          <a
            href="{prefix}{link.href}"
            aria-current={currentUrl.startsWith(link.href) ? 'page' : undefined}
            class={cn(
              'link-underline',
              currentUrl.startsWith(link.href) &&
                'text-accent decoration-accent',
            )}>{link.label}</a
          >
        </li>
      {/each}
      <li>
        <a href="{prefix}/#contacto" class="link-underline"
          >{$locale === 'en' ? 'Contact' : 'Contacto'}</a
        >
      </li>
      <li>
        <a
          href={otherLocaleHref}
          hreflang={otherLocale}
          lang={otherLocale}
          class="rounded-md border border-border px-2 py-0.5 font-mono text-[13px] text-ink-muted no-underline transition-colors hover:border-accent hover:text-accent"
          title={otherLocale === 'en' ? 'Read in English' : 'Leer en español'}
          data-sveltekit-reload
          >{otherLocale.toUpperCase()}</a
        >
      </li>
    </ul>
  </nav>
</header>
