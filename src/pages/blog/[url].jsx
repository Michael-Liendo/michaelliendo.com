import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

import { getSingleBlogPost, getPublishedBlogPosts } from '../../lib/notion.js';

export default function Post({ markdown, post }) {
  return (
    <Layout title={post.title}>
      <div className="flex items-center justify-center">
        <article className="prose">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const p = await getSingleBlogPost(context.params?.url);

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
  const posts = await getPublishedBlogPosts();

  const paths = posts.map((post) => {
    return `/blog/${post.url}`;
  });

  return {
    paths,
    fallback: false,
  };
}
