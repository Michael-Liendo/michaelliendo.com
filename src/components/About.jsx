import useTranslation from '../utils/i18n/hooks';

export default function About() {
  const t = useTranslation;
  return (
    <div className="" id="about">
      <h2 className="text-5xl md:text-6xl">{t('about')}</h2>
      <h3 className="w-full mt-16 md:w-1/2">{t('biography')}</h3>
    </div>
  );
}
