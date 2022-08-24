import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

import { getSingleBlogPost, getPublishedBlogPosts } from '../../lib/notion.js';

export default function Post({ markdown, post }) {
  return (
    <>
      <Layout
        title={post.title}
        description={post.description}
        url={`https://michaelliendo.com/blog/${post.url}`}
      >
        <div className="my-20 sm:flex sm:smitems-center sm:justify-center">
          <article className="prose max-w-3xl prose-p:text-white prose-headings:text-white prose-green prose-code:text-white">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </Layout>
    </>
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
    return `/blog/${post.url}`;
  });

  const pathsEN = postsEN.map((post) => {
    return `/en/blog/${post.url}`;
  });
  let paths = [...pathsES, ...pathsEN];

  return {
    paths,
    fallback: false,
  };
}
