import Head from 'next/head';

import Navbar from './Navbar';

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
      <main>{children}</main>
    </div>
  );
}
