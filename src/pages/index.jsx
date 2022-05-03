import Layout from '../components/Layout';
import { getPublishedBlogPosts } from '../lib/notion.js';
import BlogCard from '../components/BlogCard';

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
      <h1 className="text-5xl text-center">Last Post</h1>
      <main className="max-w-5xl mx-auto relative">
        <div className="h-full pt-4 pb-16 px-4 md:px-0 mx-auto">
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
