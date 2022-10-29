import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({
  title,
  description,
  url,
  type,
  keywords,
  children,
}) {
  return (
    <div>
      <Head>
        <title>{title ? title : 'Without title'}</title>
        <meta
          name="description"
          content={description ? description : 'Without description'}
        />
        <meta
          property="og:title"
          content={title ? title : 'Without og title'}
        />

        <meta
          property="og:description"
          content={description ? description : 'Without og description'}
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
        <meta property="og:type" content={type ? type : 'portfolio.website'} />

        <meta name="keywords" content={keywords} />

        <meta rel="canonical" href="https://michaelliendo.com/" />

        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />
      </Head>

      <Navbar />
      <main className="mx-10 min-h-screen md:mx-24">{children}</main>
      <Footer />
    </div>
  );
}
