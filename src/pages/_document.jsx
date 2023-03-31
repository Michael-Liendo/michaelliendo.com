import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>
      <body className="text-white bg-light-background-alt dark:bg-dark-background-alt">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
