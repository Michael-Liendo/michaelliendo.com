<script lang="ts">
  import { onMount } from 'svelte';
  import Translate from '~icons/mdi/translate';
  import Moon from '~icons/mdi/weather-night';
  import Sun from '~icons/mdi/weather-sunny';
  import Home from '~icons/mdi/home';
  import Notebook from '~icons/mdi/book';
  import PodiumGold from '~icons/mdi/podium-gold';

  import LL, { setLocale } from '$i18n/i18n-svelte';
  import { page } from '$app/stores';
  import { replaceLocaleInUrl } from '$lib/utils/locale';

  import type { Locales } from '$i18n/i18n-types';

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
    const lang = $page.params.lang;

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
      class="hidden sm:flex text-xl items-center sm:space-x-10 md:space-x-16 px-10 py-2 bg-white dark:bg-black border border-black dark:border-white rounded-full"
    >
      <li>
        <a href="/{$page.params.lang ?? 'en'}/">{$LL.LAYOUT.NAV.HOME()}</a>
      </li>
      <li>
        <a href="/{$page.params.lang ?? 'en'}/notes">{$LL.LAYOUT.NAV.NOTES()}</a
        >
      </li>
      <li>
        <a href="/{$page.params.lang ?? 'en'}/projects"
          >{$LL.LAYOUT.NAV.PROJECTS()}</a
        >
      </li>
    </ul>
    <ul
      class="text-xl flex sm:hidden items-center space-x-6 px-5 py-2 bg-white dark:bg-black border border-black dark:border-white rounded-full"
    >
      <li><a href="/{$page.params.lang ?? 'en'}/"><Home /></a></li>
      <li><a href="/{$page.params.lang ?? 'en'}/notes"><Notebook /></a></li>
      <li>
        <a href="/{$page.params.lang ?? 'en'}/projects"><PodiumGold /></a>
      </li>
    </ul>
  </nav>
  <div class="flex sm:space-x-4 items-center">
    <button
      class="mr-2"
      title="Change website into dark o white mode"
      on:click={toggleDarkMode}
    >
      {#if useDarkMode}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
    <div class="flex justify-center items-center space-x-4">
      <figure class="h-6 w-6">
        <button
          class="h-6 w-6"
          on:click={toggleLanguageMenu}
          aria-label="Toggle language menu"
          title="Toggle language menu"
        >
          <Translate class="h-6 w-6" />
        </button>
        {#if isLangMenuOpen}
          <div class="relative">
            <ul
              class="absolute right-0 flex flex-col space-y-2 p-2 shadow-xl border-1 border-gray-400 dark:border-gray-900 bg-white dark:bg-black rounded-lg"
            >
              <li class="lang-opt">
                <button
                  class:lang-active={$page.params.lang === 'en'}
                  on:click={() => changeLanguage('en')}
                >
                  🇺🇸&nbsp;English
                </button>
              </li>
              <li>
                <button
                  class:lang-active={$page.params.lang === 'es'}
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
