import Layout from '../components/Layout';
import { getProjects } from '../lib/notion.js';
import ProjectCard from '../components/ProjectsCard';

export async function getStaticProps() {
  const posts = await getProjects();

  return {
    props: {
      posts,
    },
  };
}

export default function Portfolio({ posts }) {
  return (
    <Layout>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post) => (
          <ProjectCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
