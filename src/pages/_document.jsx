import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Michael Liendo" />

        <meta
          property="og:description"
          content="Hi, there 👋 ! I'm Michael a programmer interested in Web Development. Currently programming in Javascript."
        />
        <meta name="theme-color" content="#3bd6cf" />

        <meta property="og:site_name" content="Michael Liendo" />
        <meta property="og:url" content="https://michaelliendo.com" />
        <meta
          property="og:image"
          content="https://cdn.michaelliendo.com/michael/profile-pic.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
