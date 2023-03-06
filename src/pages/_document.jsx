import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html className="scroll-smooth">
      <Head>
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
      </Head>
      <body
        className="text-white"
        style={{
          backgroundImage: `url("https://media4.giphy.com/media/TxVVB6PfWMjE4/giphy.gif?cid=ecf05e47bar9qnjddk6jmi3knyp0crh6nj4mnwcou98svv96&rid=giphy.gif&ct=g")`,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
