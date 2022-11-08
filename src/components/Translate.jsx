import Link from 'next/link';
import { useRouter } from 'next/router';

function Translate() {
  const router = useRouter();
  const locate = router.locale === 'es' ? 'en' : 'es';

  return (
    <Link
      className="no-underline items-center rounded-full text-white border-solid border-blue-500 border py-0 px-3 text-sm"
      href={router.asPath}
      locale={locate}
    >
      {router.locale === 'es' ? '🇺🇸 Translate' : '🇪🇸 Traducir'}
    </Link>
  );
}

export default Translate;
