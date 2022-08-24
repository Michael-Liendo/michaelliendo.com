import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import SocialMedia from '../components/SocialMedia';
import Email from '../components/Email';

import useTranslation from '../utils/i18n/hooks';

export default function Layout({ title, description, url, children }) {
  const t = useTranslation;

  let keywords = [
    'michael liendo',
    'liendo',
    'michael',
    'michaelliendo',
    'michael liendo portafolio',
    'michael liendo website',
    'michael liendo developer',
    'michael liendo portfolio',
    'michael liendo portafolio',
    'michael liendo biography',
    'michael liendo biografia',
    'liendo michael',
    'who is michael liendo?',
    '¿quien es michael liendo?',
    'publicaciones michael liendo',
    'posts michael liendo',
    'frontend developer michael',
  ];

  return (
    <div>
      <Head>
        <title>{title ? title : t('title')}</title>
        <meta
          name="description"
          content={description ? description : t('description')}
        />
        <meta property="og:title" content={title ? title : t('title')} />

        <meta
          property="og:description"
          content={description ? description : t('description')}
        />
        <meta name="theme-color" content="#3bd6cf" />

        <meta property="og:site_name" content="Michael Liendo" />
        <meta
          property="og:image"
          content="https://cdn.michaelliendo.com/michael/profile-pic.png"
        />
        <meta
          property="og:url"
          content={url ? url : 'https://michaelliendo.com/'}
        />
        <meta property="og:type" content={title ? 'article' : 'website'} />

        <meta name="keywords" content={keywords.join(', ')} />

        <meta rel="canonical" href="https://michaelliendo.com/" />

        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />
      </Head>

      <Navbar />
      <main className="mx-10 min-h-screen md:mx-24">{children}</main>
      <SocialMedia />
      <Email />
      <Footer />
    </div>
  );
}
