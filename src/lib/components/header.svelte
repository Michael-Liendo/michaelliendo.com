<script lang="ts">
import { page } from "$app/state";

import LL, { locale, setLocale } from "$i18n/i18n-svelte";
import type { Locales } from "$i18n/i18n-types";
import { baseLocale } from "$i18n/i18n-util";
import { cn } from "$lib";
import { clickOutside } from "$lib/actions/clickOutside";
import { removeLocaleFromPath, replaceLocaleInUrl } from "$lib/utils/locale";
import { PublicRoutesEnum } from "$lib/utils/routes";
import { Briefcase, Home, Languages, Notebook, Trophy } from "@lucide/svelte";

let currentUrl = $state(removeLocaleFromPath(page.url.pathname));

$effect(() => {
	currentUrl = removeLocaleFromPath(page.url.pathname);
});

const activeLocale = $locale;

const baseLocaleUrl = $locale === baseLocale ? "" : `/${$locale}`;

let isLangMenuOpen = $state(false);

function toggleLanguageMenu(): void {
	isLangMenuOpen = !isLangMenuOpen;
}

function changeLanguage(locale: Locales): void {
	const lang = activeLocale;

	if (lang === locale) {
		isLangMenuOpen = false;
		return;
	}

	const next = replaceLocaleInUrl(new URL(window.location.href), locale);

	setLocale(locale);
	window.location.href = next;
}
</script>

<header
  class="sticky top-0 z-30 border-b border-border/80 bg-surface/80 py-4 backdrop-blur-md supports-backdrop-filter:bg-surface/70"
>
  <div class="relative flex w-full items-center justify-center sm:min-h-[2.5rem]">
    <a
      href="{baseLocaleUrl}{PublicRoutesEnum.Home}"
      class="absolute left-0 top-1/2 z-10 hidden max-w-[42%] -translate-y-1/2 truncate text-sm font-semibold tracking-tight text-ink transition hover:text-link sm:block sm:max-w-[min(14rem,36vw)] sm:text-base"
    >
      Michael Liendo
    </a>

    <nav class="flex">
      <!-- DESKTOP -->
      <ul
        class="hidden items-center gap-0.5 rounded-full border border-border bg-surface-elevated/90 p-1 shadow-soft sm:flex"
        aria-label="Main navigation"
      >
        <li>
          <a
            title="Go to the main page"
            href="{baseLocaleUrl}{PublicRoutesEnum.Home}"
            class={cn(
              'rounded-full px-3 py-1.5 text-sm font-medium transition',
              currentUrl === PublicRoutesEnum.Home
                ? 'bg-accent-muted text-ink shadow-sm'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}>{$LL.LAYOUT.NAV.HOME()}</a
          >
        </li>
        <li>
          <a
            title="Read about Michael's notes"
            href="{baseLocaleUrl}{PublicRoutesEnum.Notes}"
            class={cn(
              'rounded-full px-3 py-1.5 text-sm font-medium transition',
              currentUrl === PublicRoutesEnum.Notes
                ? 'bg-accent-muted text-ink shadow-sm'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}>{$LL.LAYOUT.NAV.NOTES()}</a
          >
        </li>
        <li>
          <a
            title="View Michael's Projects"
            href="{baseLocaleUrl}{PublicRoutesEnum.Projects}"
            class={cn(
              'rounded-full px-3 py-1.5 text-sm font-medium transition',
              currentUrl === PublicRoutesEnum.Projects
                ? 'bg-accent-muted text-ink shadow-sm'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}>{$LL.LAYOUT.NAV.PROJECTS()}</a
          >
        </li>
        <li>
          <a
            title="Automations for teams"
            href="{baseLocaleUrl}{PublicRoutesEnum.Automations}"
            class={cn(
              'rounded-full px-3 py-1.5 text-sm font-medium transition',
              currentUrl === PublicRoutesEnum.Automations
                ? 'bg-accent-muted text-ink shadow-sm'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}>{$LL.LAYOUT.NAV.AUTOMATIONS()}</a
          >
        </li>
      </ul>
      <!-- MOBILE -->
      <ul
        class="flex items-center gap-1 rounded-full border border-border bg-surface-elevated/90 p-1 shadow-soft sm:hidden"
        aria-label="Main navigation"
      >
        <li>
          <a
            title="Go to the main page"
            href="{baseLocaleUrl}{PublicRoutesEnum.Home}"
            class={cn(
              'flex rounded-full p-2.5 transition',
              currentUrl === PublicRoutesEnum.Home
                ? 'bg-accent-muted text-ink'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}
            aria-label="Home"><Home class="h-5 w-5" /></a
          >
        </li>
        <li>
          <a
            title="Read about Michael's notes"
            href="{baseLocaleUrl}{PublicRoutesEnum.Notes}"
            class={cn(
              'flex rounded-full p-2.5 transition',
              currentUrl === PublicRoutesEnum.Notes
                ? 'bg-accent-muted text-ink'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}
            aria-label="Notes"><Notebook class="h-5 w-5" /></a
          >
        </li>
        <li>
          <a
            title="View Michael's Projects"
            href="{baseLocaleUrl}{PublicRoutesEnum.Projects}"
            class={cn(
              'flex rounded-full p-2.5 transition',
              currentUrl === PublicRoutesEnum.Projects
                ? 'bg-accent-muted text-ink'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}
            aria-label="Projects"><Trophy class="h-5 w-5" /></a
          >
        </li>
        <li>
          <a
            title="Automations for teams"
            href="{baseLocaleUrl}{PublicRoutesEnum.Automations}"
            class={cn(
              'flex rounded-full p-2.5 transition',
              currentUrl === PublicRoutesEnum.Automations
                ? 'bg-accent-muted text-ink'
                : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
            )}
            aria-label={$LL.LAYOUT.NAV.AUTOMATIONS()}
            ><Briefcase class="h-5 w-5" /></a
          >
        </li>
      </ul>
    </nav>

    <div
      class="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center"
    >
      <button
        class="rounded-full border border-border bg-surface-elevated p-2 text-ink-muted shadow-sm transition hover:border-accent/40 hover:bg-accent-muted/40 hover:text-ink"
        onclick={toggleLanguageMenu}
        aria-expanded={isLangMenuOpen}
        aria-label="Toggle language menu"
        title="Toggle language menu"
      >
        <Languages class="h-5 w-5" />
      </button>
      <div class="flex items-center justify-center" use:clickOutside={() => (isLangMenuOpen = false)}>
        {#if isLangMenuOpen}
          <ul
            class="absolute right-0 top-full z-40 mt-2 min-w-40 space-y-1 rounded-xl border border-border bg-surface-elevated p-2 shadow-soft-lg"
          >
            <li>
              <button
                type="button"
                aria-label="Change language to English"
                class={cn(
                  'w-full rounded-lg px-3 py-2 text-left text-sm transition',
                  activeLocale === 'en'
                    ? 'bg-accent-muted font-medium text-ink'
                    : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
                )}
                onclick={() => changeLanguage('en')}
              >
                English
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label="Cambiar language a Spanish"
                class={cn(
                  'w-full rounded-lg px-3 py-2 text-left text-sm transition',
                  activeLocale === 'es'
                    ? 'bg-accent-muted font-medium text-ink'
                    : 'text-ink-muted hover:bg-accent-muted/50 hover:text-ink',
                )}
                onclick={() => changeLanguage('es')}
              >
                Español
              </button>
            </li>
          </ul>
        {/if}
      </div>
    </div>
  </div>
</header>
