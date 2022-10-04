import useTranslation from '../utils/i18n/hooks';

export default function Hero() {
  const t = useTranslation;

  return (
    <div className="mt-[20vh] 2xl:mt-[30vh] h-[35vh] md:h-[75vh]">
      <p className="md:text-xl my-3 md:my-5">{t('hi_my_name')}</p>
      <h1 className="text-4xl font-semibold md:text-5xl my-3 md:my-5">
        Michael Liendo
      </h1>
      <h2 className="text-base md:w-1/2 md:text-3xl my-3 md:my-5">
        {t('short_bio')}
      </h2>
      <a target="_blank" rel="noreferrer" href={`/${t('curriculumFile')}`}>
        <button className="mt-5 transition ease-in bg-blue-600 hover:scale-110 duration-150 focus:outline-none font-medium rounded-lg px-5 py-2 text-center">
          {t('curriculum')}
        </button>
      </a>
    </div>
  );
}
