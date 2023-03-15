import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>
      <body
        className="text-white bg-slate-800"
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
