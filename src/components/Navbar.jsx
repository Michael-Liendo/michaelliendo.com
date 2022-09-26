import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import Translate from './Translate';

import useTranslation from '../utils/i18n/hooks';

function NavLink({ children, href }) {
  return (
    <Link href={href}>
      <a className="transition ease-in mx-9 py-2 md:mx-4 my-6 hover:text-teal-400 duration-150">
        {children}
      </a>
    </Link>
  );
}

function OpenSVG() {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseSVG() {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Navbar() {
  const t = useTranslation;
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  if (typeof window !== 'undefined') {
    addEventListener('scroll', () => {
      if (window.scrollY > scroll) {
        setHideNavbar(true);
        setScroll(window.scrollY);
      } else if (window.scrollY < scroll) {
        setHideNavbar(false);
        setScroll(window.scrollY);
      }
    });
  }

  return (
    <nav
      className={cn(
        'transition duration-500 fixed top-0 w-[100vw] flex justify-between px-10 pt-4 pb-2 md:px-24',
        {
          'md:-translate-y-16': hideNavbar,
          'bg-[rgba(255, 255, 255, .5)] bg-opacity-20 backdrop-blur-sm drop-shadow-lg':
            typeof window !== 'undefined' ? window.scrollY !== 0 : null,
        },
      )}
    >
      <Link href="/">
        <a className="text-2xl z-0 font-extrabold tracking-wide">
          Michael Liendo
        </a>
      </Link>
      <div className="hidden mt-2 md:block">
        <NavLink href="/#about">{t('about')}</NavLink>
        <NavLink href="/#knowledge">{t('knowledge')}</NavLink>
        <NavLink href="/#work">{t('work')}</NavLink>
        <NavLink href="/#contact">{t('contact')}</NavLink>
      </div>
      <Link href="/blog" passHref>
        <a aria-label="blog">
          <button className="hidden md:block transition ease-in bg-blue-600 hover:scale-110 duration-150 focus:outline-none font-medium rounded-lg px-5 py-2 text-center">
            Blog
          </button>
        </a>
      </Link>
      <div className="block md:hidden z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={cn(
            'bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white',
            {
              'fixed right-10': isOpen,
              block: !isOpen,
            },
          )}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? <OpenSVG /> : <CloseSVG />}
        </button>
        <div
          className={cn(
            'flex flex-col fixed w-9/12 pt-16 h-screen -z-10 top-0 right-0 bg-sky-900 bg-opacity-50',
            {
              block: isOpen,
              hidden: !isOpen,
            },
          )}
        >
          <NavLink href="#about">{t('about')}</NavLink>
          <NavLink href="#work">{t('work')}</NavLink>
          <NavLink href="#knowledge">{t('knowledge')}</NavLink>
          <NavLink href="#contact">{t('contact')}</NavLink>
          <Link href="/blog" passHref>
            <a aria-label="blog" className="mx-auto mt-20">
              <button className="transition ease-in bg-blue-600 hover:scale-110 duration-150 focus:outline-none font-medium rounded-lg w-32 h-12 text-center">
                Blog
              </button>
            </a>
          </Link>
          <div className="mx-auto mt-10">
            <Translate />
          </div>
        </div>
      </div>
    </nav>
  );
}
