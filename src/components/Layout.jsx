import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, description, children }) {
  function getTitle() {
    if (title) {
      return title;
    } else {
      return 'Michael Liendo';
    }
  }

  function getDescription() {
    if (description) {
      return description;
    } else {
      return "Hi, there 👋 ! I'm Michael a programmer interested in Web Development. Currently programming in Javascript.";
    }
  }

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
        <meta name="description" content={getDescription()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="my-20 mx-28 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
