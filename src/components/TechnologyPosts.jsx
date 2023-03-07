import Link from 'next/link';
import Card from './Card';
import useTranslation from '../utils/i18n/hooks';

export default function TechnologyPosts({ posts }) {
  const t = useTranslation;

  return (
    <Card className="p-4 w-full lg:w-1/4">
      <h2 className="text-center text-3xl mb-6">{t('latestBlogPosts')}</h2>
      <div>
        {posts.slice(0, 7).map((post) => (
          <Link href={`/blog/${post.url}`} key={post.id}>
            <div
              title={post.title}
              className="flex transition ease-in hover:scale-105 duration-150 justify-between py-3 truncate"
            >
              <h3 className="truncate">{post.title}</h3>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
