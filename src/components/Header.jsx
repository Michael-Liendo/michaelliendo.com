import Link from 'next/link';
import useTranslation from '../utils/i18n/hooks';
import { useEffect, useState } from 'react';
import SunIcon from '~icons/mdi/white-balance-sunny';
import MoonIcon from '~icons/mdi/moon-waning-crescent';

function NavLink({ children, href }) {
  return (
    <li className="mx-2 font-extrabold">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function Navbar() {
  const [useDarkMode, setUseDarkMode] = useState(true);

  const t = useTranslation;
  useEffect(() => {
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setUseDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (useDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [useDarkMode]);

  function toggleDarkMode() {
    if (useDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setUseDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setUseDarkMode(true);
    }
  }

  return (
    <header className="flex items-center justify-between sm:justify-evenly md:justify-around h-[70px] px-2  bg-light-background  dark:bg-dark-background">
      <Link href="/">
        <h1 className="font-extrabold">Michael Liendo</h1>
      </Link>
      <nav className="flex flex-wrap items-center">
        <ul className="flex pr-4">
          <NavLink href="/">{t('home')}</NavLink>
          <NavLink href="/projects">{t('projects')}</NavLink>
          <NavLink href="/notes">{t('notes')}</NavLink>
        </ul>
        <button
          className="flex justify-center items-center h-5 w-5"
          onClick={toggleDarkMode}
        >
          <span>
            {useDarkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </span>
        </button>
      </nav>
    </header>
  );
}
