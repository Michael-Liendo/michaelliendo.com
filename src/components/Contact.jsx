import SocialMedia from './SocialMedia';

import useTranslation from '../utils/i18n/hooks';

export default function Contact() {
  const t = useTranslation;

  return (
    <div className="mt-28" id="contact">
      <h3 className="text-5xl mb-6 md:text-6xl">{t('contact')}</h3>
      <p className="my-3 text-xl">{t('lets_work_together')}</p>
      <p className="my-3 text-xl">{t('open_to_opportunities')}</p>
      <div className="my-5">
        <SocialMedia />
      </div>
    </div>
  );
}
