import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta
          property="og:title"
          content="Michael Liendo - Front-end Developer. Aprendiendiendo, programando y enseñando"
        />

        <meta
          property="og:description"
          content="Michael Liendo es un desarrollador Frontend apasionado por aprender, programar y enseñar. Trabaja en equipo y está dispuesto a aprender cualquier tecnología que se necesite para llegar a su objetivo."
        />
        <meta name="theme-color" content="#3bd6cf" />

        <meta property="og:site_name" content="Michael Liendo" />
        <meta property="og:url" content="https://michaelliendo.com" />
        <meta
          property="og:image"
          content="https://cdn.michaelliendo.com/michael/profile-pic.png"
        />
        <meta property="og:url" content="https://michaelliendo.com/" />
        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="michael liendo, liendo, michael, michaelliendo, michael liendo portafolio, michael liendo website, michael liendo developer, michael liendo portfolio, michael liendo portafolio, michael liendo biography, michael liendo biografia, liendo michael, who is michael liendo?, ¿quien es michael liendo?, publicaciones michael liendo, posts michael liendo"
        />

        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />

        <link href="/favicon.ico" rel="shortcut icon" />
        <link
          href="/images/seo-images/apple-icon-180x180.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/images/seo-images/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/images/seo-images/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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
