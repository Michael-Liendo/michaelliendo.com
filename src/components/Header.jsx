import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import Translate from './Translate';

import useTranslation from '../utils/i18n/hooks';

export default function Header() {
  const t = useTranslation;

  return (
    <header className="bg-black">
      <div className="pt-5 flex justify-between">
        <h2 className="ml-4 text-3xl font-mono font-black text-white lg:ml-16 sm:text-5xl">
          Michael Liendo
        </h2>
        <div className="mr-16">
          <Navbar />
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:mt-1">
        <aside className="block ml-4 my-3.5 font-sans font-bold text-xs text-white lg:ml-16 lg:text-lg">
          {t('bio')}
        </aside>
        <div className="mr-16">
          <SocialMedia />
        </div>
      </div>
      <div className="ml-4 lg:ml-16 pb-2">
        <Translate />
      </div>
    </header>
  );
}
