import Layout from '../components/Layout';
import { getPublishedBlogPosts } from '../lib/notion.js';

export async function getStaticProps() {
  const posts = await getPublishedBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <h1 className="text-5xl">Last Post</h1>
      <main className="max-w-5xl mx-auto relative">
        <div className="h-full pt-4 pb-16 px-4 md:px-0 mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="font-extrabold text-xl md:text-4xl text-black text-center">
              Notion + NextJS Sample Blog
            </h1>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {posts.map((post) => (
              <p key={post.id}>Blog Post Component Here: {post.title}</p>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
