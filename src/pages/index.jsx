import About from '../components/About';
import Hero from '../components/Hero';
import Knowledge from '../components/Knowledge';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Knowledge />
    </Layout>
  );
}
