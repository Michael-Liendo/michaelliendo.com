import Link from 'next/link';
import { useRouter } from 'next/router';

function Translate() {
  const router = useRouter();
  const locate = router.locale === 'es' ? 'en' : 'es';

  return (
    <Link href={router.asPath} locale={locate}>
      <a className="no-underline items-center rounded-full text-white border-solid border-blue-500 border py-0 px-3 text-sm">
        {router.locale === 'es' ? 'πΊπΈ Translate' : 'πͺπΈ Traducir'}
      </a>
    </Link>
  );
}

export default Translate;
