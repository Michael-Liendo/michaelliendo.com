import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="transition duration-300 my-10 hover:-translate-y-2">
      <Link href={`/blog/${post.url}`} passHref id={post.id}>
        <a>
          <p className="text-slate-400">{post.date}</p>
          <h2 className="text-2xl">{post.title}</h2>
          <div className="flex mt-1 mb-4">
            {post.tags.map((tag) => (
              <p className="mr-2 text-sky-600 " key={tag.id}>
                {tag.name}
              </p>
            ))}
          </div>
          <p className="text-lg text-slate-400">{post.description}</p>
        </a>
      </Link>
    </div>
  );
}
