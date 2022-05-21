import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

import useTranslation from '../utils/i18n/hooks';

export default function Layout({ title, description, children }) {
  const t = useTranslation;

  function getTitle() {
    if (title) {
      return title;
    } else {
      return t('title');
    }
  }

  function getDescription() {
    if (description) {
      return description;
    } else {
      return t('description');
    }
  }

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
        <meta name="description" content={getDescription()} />
      </Head>

      <Header />
      <main className="my-20 mx-10 min-h-screen lg:mx-28">{children}</main>
      <Footer />
    </div>
  );
}
