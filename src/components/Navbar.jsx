import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export default function Home() {
  let route = useRouter().pathname;
  return (
    <nav className="text-cyan-500 text-xl font-thin font-mono">
      <Link href="/">
        <a
          className={cn('font-medium', {
            'text-cyan-600 font-semibold': route === '/',
          })}
        >
          Home
        </a>
      </Link>
      <Link href="/michael-liendo">
        <a
          className={cn('ml-5 font-medium', {
            'text-cyan-600 font-semibold': route === '/michael-liendo',
          })}
        >
          Biography
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={cn('ml-5 font-medium', {
            'text-cyan-600 font-semibold': route === '/portfolio',
          })}
        >
          Portfolio
        </a>
      </Link>
      <Link href="mailto:me@michaelliendo.com">
        <a className="ml-5 font-medium">Contact</a>
      </Link>
    </nav>
  );
}
