import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export default function Home() {
  let route = useRouter().pathname;
  return (
    <div className="text-cyan-500 text-xl font-thin font-mono">
      <Link href="/">
        <a className={cn({ 'text-cyan-600 font-semibold': route === '/' })}>
          Home
        </a>
      </Link>
      <Link href="/about-me">
        <a
          className={cn('ml-5', {
            'text-cyan-600 font-semibold': route === '/about-me',
          })}
        >
          About Me
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={cn('ml-5', {
            'text-cyan-600 font-semibold': route === '/portfolio',
          })}
        >
          Portfolio
        </a>
      </Link>
      <Link href="mailto:me@michaelliendo.com">
        <a className="ml-5">Contact</a>
      </Link>
    </div>
  );
}
