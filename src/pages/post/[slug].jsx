import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout.js';

import { getSingleBlogPost, getPublishedBlogPosts } from '../../lib/notion.js';

const Post = ({ markdown, post }) => {
  return (
    <Layout title={post.title}>
      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center">
            <article className="prose">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const p = await getSingleBlogPost(context.params?.slug);

  if (!p) {
    throw '';
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
};

export async function getStaticPaths() {
  const posts = await getPublishedBlogPosts();

  const paths = posts.map((post) => {
    return `/post/${post.url}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export default Post;
