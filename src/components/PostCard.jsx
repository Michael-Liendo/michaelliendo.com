import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post, view }) {
  return (
    <>
      {view === 1 ? (
        <Link
          title={post.title}
          className="transition md:flex my-10 md:my-0 md:col-span-full duration-300 hover:-translate-y-2"
          href={`/blog/${post.url}`}
          passHref
          id={post.id}
        >
          <div className="mr-10">
            {post.cover && (
              <Image
                className="rounded-lg w-96 h-96 object-cover"
                src={post.cover}
                alt={post.title}
                width="600"
                height="600"
              />
            )}
          </div>
          <div>
            <p className="my-3 text-slate-400">{post.date}</p>
            <h2 className="text-2xl">{post.title}</h2>
            <div className="flex mt-1 mb-4">
              {post.tags.map((tag) => (
                <p className="mr-2 text-sky-600" key={tag.id}>
                  {tag.name}
                </p>
              ))}
            </div>
            <p className="text-lg text-slate-400">{post.description}</p>
          </div>
        </Link>
      ) : (
        <div className="transition my-10 md:my-0 duration-300 hover:-translate-y-2">
          <Link
            title={post.title}
            href={`/blog/${post.url}`}
            passHref
            id={post.id}
          >
            {post.cover && (
              <Image
                title={post.title}
                src={post.cover}
                className="rounded-lg object-cover"
                width="450"
                height="450"
                alt={post.description}
              />
            )}
            <p className="my-3 text-slate-400">{post.date}</p>
            <h2 className="text-2xl">{post.title}</h2>
            <div className="flex mt-1 mb-4">
              {post.tags.map((tag) => (
                <p className="mr-2 text-sky-600 " key={tag.id}>
                  {tag.name}
                </p>
              ))}
            </div>
            <p className="text-lg text-slate-400">{post.description}</p>
          </Link>
        </div>
      )}
    </>
  );
}
