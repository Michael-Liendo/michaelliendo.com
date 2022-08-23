import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import SocialMedia from '../components/SocialMedia';
import Email from '../components/Email';

import useTranslation from '../utils/i18n/hooks';

export default function Layout({ title, children }) {
  const t = useTranslation;

  function getTitle() {
    if (title) {
      return title;
    } else {
      return t('title');
    }
  }

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
      </Head>

      <Navbar />
      <main className="mx-10 min-h-screen md:mx-24">{children}</main>
      <SocialMedia />
      <Email />
      <Footer />
    </div>
  );
}
