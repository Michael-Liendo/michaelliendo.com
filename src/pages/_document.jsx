import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html className="scroll-smooth">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
          }}
        />

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
        className="text-white bg-[#0A192F]"
        style={{ backgroundImage: `url("./wiggle.svg")` }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
