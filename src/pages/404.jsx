import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 No found - Michael Liendo</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar></Navbar>
      <h1 className="text-7xl text-center mt-52">404 No Found</h1>
    </div>
  );
}
