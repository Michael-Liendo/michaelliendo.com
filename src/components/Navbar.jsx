import Link from 'next/link';
import Card from './Card';
import SocialMedia from './SocialMedia';

function NavLink({ children, href }) {
  return (
    <Link
      title={children}
      className="transition ease-in py-2 hover:text-teal-400 duration-150"
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <Card className="flex justify-between items-center p-4 my-5">
      <div className="space-x-3 sm:space-x-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/hire-me">Hire me</NavLink>
      </div>
      <SocialMedia />
    </Card>
  );
}
