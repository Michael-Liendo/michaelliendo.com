import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import { getPublishedBlogPosts } from '../../lib/notion.js';
import useTranslation from '../../utils/i18n/hooks';

export default function Home({ posts, locale }) {
  const t = useTranslation;

  return (
    <Layout
      title={t('blogTitle')}
      description={t('blogDescription')}
      url={
        locale === 'es'
          ? 'https://michaelliendo.com/es/blog'
          : 'https://michaelliendo.com/blog'
      }
      type="blog.website"
      keywords="michael liendo blog, blog of michael liendo, michaels posts, blog de michael"
    >
      <h1 className="mt-20 mb-20 text-5xl text-center">
        {t('latest_blog_posts')}
      </h1>
      <div className="md:grid grid-cols-3 gap-10">
        {posts.map((post, index) => {
          if (!(index % 4))
            return <PostCard key={post.id} post={post} view={1} />;
          else return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  const posts = await getPublishedBlogPosts(locale);

  return {
    props: {
      posts,
      locale,
    },
  };
}
