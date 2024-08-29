<script lang="ts">
  import { onMount } from 'svelte';
  import Translate from '~icons/mdi/translate';
  import Moon from '~icons/mdi/weather-night';
  import Sun from '~icons/mdi/weather-sunny';
  import Home from '~icons/mdi/home';
  import Notebook from '~icons/mdi/book';
  import PodiumGold from '~icons/mdi/podium-gold';

  import LL, { locale, setLocale } from '$i18n/i18n-svelte';
  import { page } from '$app/stores';
  import { replaceLocaleInUrl } from '$lib/utils/locale';
  import { baseLocale } from '$i18n/i18n-util';

  import type { Locales } from '$i18n/i18n-types';

  const baseLocaleUrl = $locale === baseLocale ? '' : `/${$locale}`;

  let useDarkMode = false;
  let isLangMenuOpen = false;

  onMount(() => {
    useDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (useDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  });

  function toggleDarkMode(): void {
    if (useDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      useDarkMode = false;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      useDarkMode = true;
    }
  }

  function toggleLanguageMenu(): void {
    isLangMenuOpen = !isLangMenuOpen;
  }

  function changeLanguage(locale: Locales): void {
    const lang = $locale;

    if (lang === locale) {
      isLangMenuOpen = false;
      return;
    }

    const next = replaceLocaleInUrl($page.url, locale);

    setLocale(locale);
    window.location.href = next;
  }
</script>

<header class="px-5 sm:px-10 md:px-20 py-4 flex justify-between items-center">
  <h1 class="text-xl hidden sm:block">Michael Liendo</h1>
  <h1 class="text-xl block sm:hidden">Michael L</h1>

  <!-- only desktop -->
  <nav class="flex">
    <ul
      class="hidden sm:flex text-xl items-center sm:space-x-10 md:space-x-16 px-10 py-2 bg-[#f5f5f5] dark:bg-slate-900 border border-black dark:border-white rounded-full"
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
    <ul
      class="text-xl flex sm:hidden items-center space-x-6 px-5 py-2 bg-[#f5f5f5] dark:bg-slate-900 border border-black dark:border-white rounded-full"
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
          aria-label="Projects"><PodiumGold /></a
        >
      </li>
    </ul>
  </nav>
  <div
    class="flex sm:space-x-4 items-center text-[#313131] dark:text-[#dddddd]"
  >
    <button
      class="mr-2 p-1.5 rounded-full"
      title="Change website into dark or white mode"
      on:click={toggleDarkMode}
    >
      {#if useDarkMode}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
    <button
      class="p-1.5 rounded-full"
      on:click={toggleLanguageMenu}
      aria-label="Toggle language menu"
      title="Toggle language menu"
    >
      <Translate class="h-5 w-5" />
    </button>
    <div class="flex justify-center items-center">
      <figure>
        {#if isLangMenuOpen}
          <div class="relative z-20">
            <ul
              class="absolute right-0 flex flex-col space-y-2 p-4 shadow-xl border-1 border-gray-400 dark:border-gray-900 bg-white dark:bg-slate-800 rounded-lg"
            >
              <li class="lang-opt">
                <button
                  aria-label="Change language to English"
                  class:lang-active={$locale === 'en'}
                  on:click={() => changeLanguage('en')}
                >
                  🇺🇸&nbsp;English
                </button>
              </li>
              <li>
                <button
                  aria-label="Cambiar language a Spanish"
                  class:lang-active={$locale === 'es'}
                  on:click={() => changeLanguage('es')}
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
</header>
