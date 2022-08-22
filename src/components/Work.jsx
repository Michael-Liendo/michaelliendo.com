import useTranslation from '../utils/i18n/hooks';
import Projects from './Projects';

export default function Work({ projects }) {
  const t = useTranslation;

  return (
    <div className="mt-28" id="work">
      <h3 className="text-5xl md:text-6xl">{t('work')}</h3>
      <Projects projects={projects} />
    </div>
  );
}
