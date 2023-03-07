import Card from '../../components/Card';
import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import { getPublishedBlogPosts } from '../../lib/notion.js';
import useTranslation from '../../utils/i18n/hooks';

export default function Home({ posts, locale }) {
  const t = useTranslation;

  return (
    <Layout
      title="Blog | Michael Liendo"
      description={
        t('locale') === 'es'
          ? 'Aquí puedes encontrar mi blog personal donde comparto mis pensamientos, consejos y trucos sobre el desarrollo web, la programación, y el diseño de experiencias de usuario. Como desarrollador Front-End, creo que compartir conocimiento y aprendizajes es esencial para el crecimiento profesional y personal en la industria.'
          : 'Here you can find my personal blog where I share my thoughts, tips and tricks about web development, programming, and user experience design. As a Front-End developer, I believe that sharing knowledge and learnings is essential for professional and personal growth in the industry.'
      }
      url={
        locale === 'es'
          ? 'https://michaelliendo.com/es/blog'
          : 'https://michaelliendo.com/blog'
      }
      type="website"
      keywords="michael liendo blog, blog of michael liendo, michaels posts, blog de michael"
    >
      <Card className="p-7">
        <h1 className="mb-20 text-5xl text-center">{t('latestBlogPosts')}</h1>
        <div className="md:grid grid-cols-3 gap-10">
          {posts.map((post, index) => {
            if (!(index % 4))
              return <PostCard key={post.id} post={post} view={1} />;
            else return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </Card>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const posts = await getPublishedBlogPosts(locale);

  return {
    props: {
      posts,
      locale,
    },
  };
}
