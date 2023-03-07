import Card from '../../components/Card';
import Layout from '../../components/Layout';
import SocialMedia from '../../components/SocialMedia';

import useTranslation from '../../utils/i18n/hooks';

export default function HireMePage() {
  const t = useTranslation;
  return (
    <Layout title="Work with me | Michael Liendo">
      <div className="lg:flex lg:space-x-20 lg:space-y-0 space-y-5">
        <Card className="p-6">
          <h1 className="text-4xl">{t('workWithMe')}</h1>
          <p className="mt-6">{t('workWithMeParagraph')}</p>
          <div className="ml-4 mb-3 text-cyan-300 opacity-70">
            <h3 className="my-3 text-2xl">Project name</h3>
            <p>{t('workWithMeExample')}</p>
            <ul className="ml-8 list-disc">
              <li>#1 feature</li>
              <li>#2 feature</li>
              <li>#3 feature</li>
              <li>#4 feature</li>
              <li>#5 feature</li>
              <li>#6 feature</li>
            </ul>
            <p>{t('workWithMeExample2')}</p>
          </div>
          <p>{t('workWithMeParagraph2')}</p>
        </Card>
        <Card className="p-6 flex flex-col justify-around items-center lg:w-2/5">
          <a
            href="mailto:contact@michaelliendo.com"
            className="text-xl select-all"
          >
            contact@michaelliendo.com
          </a>
          <SocialMedia />
        </Card>
      </div>
    </Layout>
  );
}
