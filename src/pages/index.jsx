import { getProjects } from '../lib/notion';

import About from '../components/About';
import Hero from '../components/Hero';
import Knowledge from '../components/Knowledge';
import Layout from '../components/Layout';
import Work from '../components/Work';
import Contact from '../components/Contact';

export default function Home({ projects }) {
  return (
    <Layout>
      <Hero />
      <About />
      <Knowledge />
      <Work projects={projects} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}
