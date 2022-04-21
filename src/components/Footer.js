import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="relative h-20 bg-black inset-x-0 bottom-0">
      <p className="text-white ml-16 pt-7 font-light">
        <Link href="https://michaelliendo.com">
          <a className="transition transform delay-150 text-white hover:text-sky-200 duration-300">
            Michael Liendo{' '}
          </a>
        </Link>{' '}
        &copy; 2022
      </p>
    </footer>
  );
}
