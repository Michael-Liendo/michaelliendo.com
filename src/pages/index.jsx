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
    <Layout
      title="Michael Liendo"
      description="Hi, there! I'm Michael a programmer interested in Web Development. Currently programming in Javascript."
    >
      <h2 className="text-5xl text-center">Last Post</h2>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
