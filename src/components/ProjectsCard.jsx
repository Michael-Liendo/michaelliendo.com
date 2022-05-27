import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  let date = new Date(post.date);

  return (
    <figure>
      <Link href={post.url}>
        <a target="_blank" className="transition duration-300 hover:scale-105">
          <div
            key={post.title}
            className="flex flex-col rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
              <Image
                src={post.cover}
                className="h-64 w-full object-fit"
                alt={post.title}
                height={250}
                width={500}
                layout="responsive"
              />
            </div>
            <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
              <div className="flex-1">
                <span className="block mt-2">
                  <span className="text-xs font-medium text-gray-600">
                    {date.toDateString()}
                  </span>
                </span>
                <div className="block mt-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                </div>

                <div className="block mt-2">
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>

                <span className="block mt-2 space-x-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </figure>
  );
}
