import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

import { getSingleBlogPost } from '../../lib/notion.js';

export default function Post({ markdown, post, locale }) {
  return (
    <Layout
      title={post.title}
      description={post.description}
      image={post.cover}
      url={
        locale === 'es'
          ? `https://michaelliendo.com/es/blog/${post.url}`
          : `https://michaelliendo.com/blog/${post.url}`
      }
      type="article.blog"
      keywords={`${post.tags.join(', ')}, ${post.title}, ${post.description}`}
    >
      <div className="my-20 sm:flex sm:items-center sm:justify-center">
        <article className="prose max-w-3xl prose-p:text-white prose-strong:text-green-500 prose-headings:text-white prose-green prose-code:text-white">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}
// todo: show 404 when there is no article with the slug
export async function getServerSideProps({ locale, params }) {
  const p = await getSingleBlogPost(locale, params?.url);

  if (p.notFound) {
    console.log('no have a post');
    return {
      notFound: true,
    };
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
      locale,
    },
  };
}
