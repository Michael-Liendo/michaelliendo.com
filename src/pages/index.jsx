import HomeComponent from '../components/Home';
import Layout from '../components/Layout';
import TechnologyPosts from '../components/TechnologyPosts';
import { getPublishedBlogPosts } from '../lib/notion';

import useTranslation from '../utils/i18n/hooks';

export default function Home({ posts }) {
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
      <div className="lg:flex lg:space-x-6 lg:space-y-0 space-y-5">
        <HomeComponent />
        <TechnologyPosts posts={posts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const posts = await getPublishedBlogPosts(locale);

  const postWithTagTechnology = posts.filter((post) =>
    post.tags.some((tag) => tag.name === 'technology'),
  );
  return {
    props: {
      posts: postWithTagTechnology,
      locale,
    },
  };
}
