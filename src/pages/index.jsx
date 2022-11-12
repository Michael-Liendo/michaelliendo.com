import { getProjects } from '../lib/notion';

import About from '../components/About';
import Hero from '../components/Hero';
import Knowledge from '../components/Knowledge';
import Layout from '../components/Layout';
import Work from '../components/Work';
import Contact from '../components/Contact';
import useTranslation from '../utils/i18n/hooks';

export default function Home({ projects }) {
  const t = useTranslation;
  return (
    <Layout
      title={t('title')}
      description={t('description')}
      url={
        t('locale') === 'es'
          ? 'https://michaelliendo.com/es/'
          : 'https://michaelliendo.com/'
      }
      keywords="michael liendo, michaelliendo, michael liendo portafolio, michael liendo website, michael liendo developer, michael liendo portfolio, liendo michael"
      type="portfolio.website"
    >
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
