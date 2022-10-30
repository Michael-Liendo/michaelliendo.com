import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

import { getSingleBlogPost, getPublishedBlogPosts } from '../../lib/notion.js';

export default function Post({ markdown, post, locale }) {
  return (
    <Layout
      title={post.title}
      description={post.description}
      url={
        locale === 'es'
          ? `https://michaelliendo.com/es/blog/${post.url}`
          : 'https://michaelliendo.com/blog'
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

export async function getStaticProps({ locale, params }) {
  const p = await getSingleBlogPost(locale, params?.url);

  if (!p) {
    console.log('no have a post');
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
      locale,
    },
  };
}

export async function getStaticPaths() {
  const postsES = await getPublishedBlogPosts('es');
  const postsEN = await getPublishedBlogPosts('en');

  const pathsEN = postsEN.map((post) => {
    return `/blog/${post.url}`;
  });

  const pathsES = postsES.map((post) => {
    return `/es/blog/${post.url}`;
  });
  let paths = [...pathsES, ...pathsEN];

  return {
    paths,
    fallback: false,
  };
}
