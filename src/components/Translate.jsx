import Link from 'next/link';
import { useRouter } from 'next/router';

function Translate() {
  const router = useRouter();
  const locate = router.locale === 'es' ? 'en' : 'es';

  return (
    <Link
      title="Translate"
      className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
      href={router.asPath}
      locale={locate}
    >
      {router.locale === 'es' ? '🇺🇸 Translate' : '🇪🇸 Traducir'}
    </Link>
  );
}

export default Translate;
