import { useState } from 'react';
import useTranslation from '../utils/i18n/hooks';

export default function Contact() {
  const [status, setStatus] = useState(false);
  const t = useTranslation;

  function copyToClipboard() {
    setStatus(true);
    navigator.clipboard.writeText('contact@michaelliendo.com');
    setTimeout(() => {
      setStatus(false);
    }, 2000);
  }

  return (
    <div className="mt-28" id="contact">
      <h3 className="text-5xl mb-6 md:text-6xl">{t('contact')}</h3>
      <p className="my-3 text-xl">{t('lets_work_together')}</p>
      <p className="my-3 text-xl">{t('open_to_opportunities')}</p>
      {status ? (
        <p className="text-green-500">{t('copied_to_your_clipboard')}</p>
      ) : null}
      <a href="mailto:me@michaelliendo.com">
        <button
          onClick={copyToClipboard}
          className="mt-5 transition ease-in bg-gradient-to-br from-cyan-600 to-blue-600 hover:scale-110 duration-300 focus:outline-none font-medium rounded-lg px-5 py-2 text-center"
        >
          {t('contact')}
        </button>
      </a>
    </div>
  );
}
