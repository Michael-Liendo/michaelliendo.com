import Card from '../../components/Card';
import Layout from '../../components/Layout';
import SocialMedia from '../../components/SocialMedia';

import useTranslation from '../../utils/i18n/hooks';

export default function HireMePage() {
  const t = useTranslation;
  return (
    <Layout
      title="Work with me | Michael Liendo"
      description={
        t('locale') === 'es'
          ? '¡Hola! Si estás buscando un desarrollador Front-End experimentado y apasionado, has venido al lugar correcto. Como programador web con experiencia en React, Next.js, JavaScript y TypeScript, puedo ayudarte a crear soluciones personalizadas y altamente funcionales para tus proyectos web. Me encanta trabajar en equipo y colaborar con otros profesionales para lograr objetivos comunes. Si estás interesado en trabajar conmigo en tu próximo proyecto, no dudes en ponerse en contacto conmigo para discutir las posibilidades.'
          : "Hi! If you're looking for an experienced and passionate Front-End developer, you've come to the right place. As a web developer with experience in React, Next.js, JavaScript and TypeScript, I can help you create custom and highly functional solutions for your web projects. I love working in teams and collaborating with other professionals to achieve common goals. If you are interested in working with me on your next project, feel free to contact me to discuss the possibilities."
      }
    >
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
