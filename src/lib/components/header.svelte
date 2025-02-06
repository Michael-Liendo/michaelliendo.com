
<script lang="ts">
import { Home, Languages, Notebook, Trophy } from "lucide-svelte";

import LL, { locale, setLocale } from "$i18n/i18n-svelte";
import { removeLocaleFromPath, replaceLocaleInUrl } from "$lib/utils/locale";
import { baseLocale } from "$i18n/i18n-util";

import type { Locales } from "$i18n/i18n-types";
import { clickOutside } from "$lib/actions/clickOutside";
import { PublicRoutesEnum } from "$lib/utils/routes";
import { cn } from "$lib";
import { page } from "$app/state";

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

<header class="px-5 sm:px-10 md:px-20 py-4 flex justify-between items-center">
  <h1 class="text-xl">Michael Liendo</h1>

  <div class="flex">

  <nav class="flex">
    <!-- DESKTOP -->
    <ul
      class="hidden sm:flex  items-center space-x-5 px-5 py-2"
    >
      <li>
        <a title="Go to the main page" href="{baseLocaleUrl}{PublicRoutesEnum.Home}"
        class={cn({
          "underline": currentUrl === PublicRoutesEnum.Home,
        })}
          >{$LL.LAYOUT.NAV.HOME()}</a
        >
      </li>
      <li>
        <a title="Read about Michael's notes" href="{baseLocaleUrl}{PublicRoutesEnum.Notes}"
        class={cn({
          "underline": currentUrl === PublicRoutesEnum.Notes,
        })}
          >{$LL.LAYOUT.NAV.NOTES()}</a
        >
      </li>
      <li>
        <a title="View Michael's Projects" href="{baseLocaleUrl}{PublicRoutesEnum.Projects}"
        class={cn({
          "underline": currentUrl === PublicRoutesEnum.Projects,
        })}
          >{$LL.LAYOUT.NAV.PROJECTS()}</a
        >
      </li>
    </ul>
    <!-- MOBILE -->
    <ul
      class="text-xl flex sm:hidden items-center space-x-6 px-5 py-2  border border-black rounded-full"
      aria-label="Main navigation"
    >
      <li>
        <a title="Go to the main page" href="{baseLocaleUrl}{PublicRoutesEnum.Home}" aria-label="Home"
          ><Home /></a
        >
      </li>
      <li>
        <a
          title="Read about Michael's notes"
          href="{baseLocaleUrl}{PublicRoutesEnum.Notes}"
          aria-label="Notes"><Notebook /></a
        >
      </li>
      <li>
        <a
          title="View Michael's Projects"
          href="{baseLocaleUrl}{PublicRoutesEnum.Projects}"
          aria-label="Projects"><Trophy /></a
        >
      </li>
    </ul>
  </nav>


  <div
    class="flex items-center"
  >
  
    <button
      class="p-1.5 rounded-full"
      onclick={toggleLanguageMenu}
      aria-label="Toggle language menu"
      title="Toggle language menu"
    >
      <Languages class="h-5 w-5" />
    </button>
    <div class="flex justify-center items-center" use:clickOutside={() => isLangMenuOpen = false}>
      <figure>
        {#if isLangMenuOpen}
          <div class="relative z-20">
            <ul
              class="absolute right-0 flex flex-col space-y-2 p-4 shadow-xl border-1 border-gray-400 bg-white rounded-lg"
            >
              <li class="lang-opt">
                <button
                  aria-label="Change language to English"
                  class:lang-active={activeLocale === 'en'}
                  onclick={() => changeLanguage('en')}
                >
                  🇺🇸&nbsp;English
                </button>
              </li>
              <li>
                <button
                  aria-label="Cambiar language a Spanish"
                  class:lang-active={activeLocale === 'es'}
                  onclick={() => changeLanguage('es')}
                >
                  🇪🇸&nbsp;Español
                </button>
              </li>
            </ul>
          </div>
        {/if}
      </figure>
    </div>
  </div>
</div>

</header>
