import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

import { getSingleBlogPost, getPublishedBlogPosts } from '../lib/notion.js';

export default function Post({ markdown, post }) {
  return (
    <Layout title={post.title} description={post.description}>
      <div className="flex items-center justify-center">
        <article className="prose">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale, params }) {
  const p = await getSingleBlogPost(locale, params?.url);

  if (!p) {
    throw 'I no have a post';
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
}

export async function getStaticPaths() {
  const postsES = await getPublishedBlogPosts('es');
  const postsEN = await getPublishedBlogPosts('en');

  const pathsES = postsES.map((post) => {
    return `/${post.url}`;
  });

  const pathsEN = postsEN.map((post) => {
    return `/en/${post.url}`;
  });
  let paths = [...pathsES, ...pathsEN];

  return {
    paths,
    fallback: false,
  };
}