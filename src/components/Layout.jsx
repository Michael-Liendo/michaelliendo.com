import Head from 'next/head';

import Navbar from './Navbar';
import Translate from './Translate';

export default function Layout({
  title,
  description,
  url,
  image,
  type,
  keywords,
  children,
}) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Michael Liendo'}</title>
        <meta
          name="description"
          content={description ? description : 'Without description'}
        />
        <meta property="og:title" content={title ? title : 'Michael Liendo'} />

        <meta
          property="og:description"
          content={description ? description : 'Without og description'}
        />
        <meta name="theme-color" content="#3bd6cf" />

        <meta
          property="og:site_name"
          content={title ? title : 'Michael Liendo'}
        />
        <meta
          property="og:image"
          content={
            image
              ? image
              : 'https://cdn.michaelliendo.com/michael/profile-pic.png'
          }
        />
        <meta
          property="og:url"
          content={url ? url : 'https://michaelliendo.com/'}
        />
        <meta property="og:type" content={type ? type : 'website'} />

        <meta
          name="keywords"
          content={`${
            keywords ?? ''
          } michael liendo, michael liendo portafolio, michael liendo website, michael liendo developer, michael liendo portfolio, Michael Liendo, Programador web, React, Next.js, JavaScript, TypeScript, Desarrollo Front-End, Desarrollo de aplicaciones web, Portafolio de proyectos, Front-End Development, Web Application Development, Project Portfolio`}
        />

        <link rel="canonical" href={url ? url : 'https://michaelliendo.com/'} />

        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="publisher" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />
      </Head>

      <div className="m-0 sm:m-10 md:m-16 lg:m-20 xl:m-28">
        <div className="fixed top-0 sm:top-2 right-3 ">
          <Translate />
        </div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
