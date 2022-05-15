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
      <main className="my-20 mx-10 min-h-screen lg:mx-28">{children}</main>
      <Footer />
    </div>
  );
}
