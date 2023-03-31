import Head from 'next/head';

import Navbar from './Header';
import Footer from './Footer';

export default function Layout({
  title,
  description,
  url,
  image,
  type,
  keywords,
  children,
}) {
  const avatarUrl = 'https://avatars.githubusercontent.com/u/70660410?v=4';
  return (
    <>
      <Head>
        <title>{title ? title : 'Michael Liendo'}</title>
        <meta
          name="description"
          content={description ? description : 'Without description'}
        />
        <meta
          name="keywords"
          content={`${
            keywords ?? ''
          } michael liendo, michael liendo portafolio, michael liendo website, michael liendo developer, michael liendo portfolio, Michael Liendo, Programador web, React, Next.js, JavaScript, TypeScript, Desarrollo Front-End, Desarrollo de aplicaciones web, Portafolio de proyectos, Front-End Development, Web Application Development, Project Portfolio`}
        />

        <link rel="canonical" href={url ? url : 'https://michaelliendo.com/'} />

        <meta name="theme-color" content="#3bd6cf" />
        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="publisher" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />

        <meta property="og:title" content={title ? title : 'Michael Liendo'} />
        <meta property="og:type" content={type ? type : 'website'} />
        <meta
          property="og:url"
          content={url ? url : 'https://michaelliendo.com/'}
        />
        <meta property="og:image" content={image ? image : avatarUrl} />
        <meta
          property="og:description"
          content={description ? description : 'Without og description'}
        />
        <meta
          property="og:site_name"
          content={title ? title : 'Michael Liendo'}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MichaelMLiendo" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@MichaelMLiendo" />
        <meta name="twitter:image:src" content={avatarUrl} />
      </Head>
      <div className="text-black dark:text-white ">
        <div className="min-h-screen">
          <Navbar />
          <main className="max-w-4xl m-auto py-4">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
