import Layout from '../components/Layout';
import { getPublishedBlogPosts } from '../lib/notion.js';
import BlogCard from '../components/BlogCard';

import useTranslation from '../utils/i18n/hooks';

export default function Home({ posts }) {
  const t = useTranslation;

  return (
    <Layout>
      <h1 className="text-5xl text-center">{t('latest_blog_posts')}</h1>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const posts = await getPublishedBlogPosts(locale);

  return {
    props: {
      posts,
    },
  };
}
