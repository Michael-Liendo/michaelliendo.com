import { useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import Hamburger from '../../public/images/navbar-icons/hamburger-menu.svg';

function NavLink({ children, href }) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          'py-2 pl-3 pr-3 text-cyan-500 text-xl font-medium font-mono ',
          { 'font-semibold text-cyan-600': isActive },
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default function Navbar() {
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <>
      <button
        className="fixed z-20 top-4 mr-4 mb-4 p-2 text-2xl text-cyan-500 font-mono font-semibold active:outline-none md:hidden"
        onClick={() => setNavbarStatus(!navbarStatus)}
      >
        <Image src={Hamburger} alt="Hamburger Menu" />
      </button>
      <nav
        className={cn(
          'fixed w-full top-0 right-0 z-10 bg-gray-800 flex flex-col md:flex-row md:flex md:static md:bg-transparent',
          { block: navbarStatus, hidden: !navbarStatus },
        )}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/michael-liendo">Biography</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="mailto:me@michaelliendo.com">Contact</NavLink>
      </nav>
    </>
  );
}
