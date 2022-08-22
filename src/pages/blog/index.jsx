import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import { getPublishedBlogPosts } from '../../lib/notion.js';
import useTranslation from '../../utils/i18n/hooks';

export default function Home({ posts }) {
  const t = useTranslation;

  return (
    <Layout>
      <h1 className="mt-10 mb-20 text-5xl text-center">
        {t('latest_blog_posts')}
      </h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
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
