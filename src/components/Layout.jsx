import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, children }) {
  let route = useRouter().pathname;

  function getTitle() {
    if (route === '/') {
      return 'Michael Liendo - Developer';
    } else if (route === '/about-me') {
      return 'Michael Liendo - About Me';
    } else if (route === '/portfolio') {
      return 'Michael Liendo - Portfolio';
    } else if (title) {
      return title;
    } else {
      return 'Michael Liendo';
    }
  }

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
        <meta name="description" content="Michael Liendo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="my-20 mx-28 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
