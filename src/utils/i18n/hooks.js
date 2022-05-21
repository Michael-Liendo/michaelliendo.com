import { useRouter } from 'next/router';
import translations from './translations';

export default function useTranslation(string) {
  const { locale, defaultLocale } = useRouter();

  try {
    return (
      translations[locale][string] ||
      translations[defaultLocale][string] ||
      string
    );
  } catch {
    return string;
  }
}
