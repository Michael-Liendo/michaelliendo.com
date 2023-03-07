import Link from 'next/link';
import useTranslation from '../utils/i18n/hooks';
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
  const t = useTranslation;
  return (
    <Card className="flex justify-between items-center p-4 my-5">
      <div className="space-x-3 sm:space-x-6">
        <NavLink href="/">{t('home')}</NavLink>
        <NavLink href="/projects">{t('projects')}</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/hire-me">{t('workWithMe')}</NavLink>
      </div>
      <SocialMedia />
    </Card>
  );
}
