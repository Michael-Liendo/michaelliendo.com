
<script lang="ts">
import { Home, Languages, Notebook, Trophy } from "lucide-svelte";

import LL, { locale, setLocale } from "$i18n/i18n-svelte";
import { replaceLocaleInUrl } from "$lib/utils/locale";
import { baseLocale } from "$i18n/i18n-util";

import type { Locales } from "$i18n/i18n-types";
import { clickOutside } from "$lib/actions/clickOutside";

const baseLocaleUrl = $locale === baseLocale ? "" : `/${$locale}`;

let isLangMenuOpen = $state(false);

function toggleLanguageMenu(): void {
	isLangMenuOpen = !isLangMenuOpen;
}

function changeLanguage(locale: Locales): void {
	const next = replaceLocaleInUrl(new URL(window.location.href), locale);

	setLocale(locale);
	window.location.href = next;
}
</script>

<header class="px-5 sm:px-10 md:px-20 py-4 flex justify-between items-center">
  <h1 class="text-xl">michaelliendo.com</h1>

  <div class="flex space-x-4">

  <nav class="flex">
    <!-- DESKTOP -->
    <ul
      class="hidden sm:flex  items-center space-x-5 px-5 py-2"
    >
      <li>
        <a title="Go to the main page" href="{baseLocaleUrl}/"
          >{$LL.LAYOUT.NAV.HOME()}</a
        >
      </li>
      <li>
        <a title="Read about Michael's notes" href="{baseLocaleUrl}/notes"
          >{$LL.LAYOUT.NAV.NOTES()}</a
        >
      </li>
      <li>
        <a title="View Michael's Projects" href="{baseLocaleUrl}/projects"
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
        <a title="Go to the main page" href="{baseLocaleUrl}/" aria-label="Home"
          ><Home /></a
        >
      </li>
      <li>
        <a
          title="Read about Michael's notes"
          href="{baseLocaleUrl}/notes"
          aria-label="Notes"><Notebook /></a
        >
      </li>
      <li>
        <a
          title="View Michael's Projects"
          href="{baseLocaleUrl}/projects"
          aria-label="Projects"><Trophy /></a
        >
      </li>
    </ul>
  </nav>


  <div
    class="flex  items-center "
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
                  class:lang-active={$locale === 'en'}
                  onclick={() => changeLanguage('en')}
                >
                  🇺🇸&nbsp;English
                </button>
              </li>
              <li>
                <button
                  aria-label="Cambiar language a Spanish"
                  class:lang-active={$locale === 'es'}
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
