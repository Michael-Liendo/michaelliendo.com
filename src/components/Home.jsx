import Image from 'next/image';
import Card from '../components/Card';

import JavascriptIcon from '~icons/logos/javascript';
import TypescriptIcon from '~icons/logos/typescript-icon';
import HTMLIcon from '~icons/logos/html-5';
import CSSIcon from '~icons/logos/css-3';
import NextIcon from '~icons/logos/nextjs-icon';
import ReactIcon from '~icons/logos/react';
import GitIcon from '~icons/logos/git-icon';
import GithubIcon from '~icons/mdi/github.jsx';
import NodejsIcon from '~icons/logos/nodejs-icon';
import TailwindIcon from '~icons/logos/tailwindcss-icon';
import DockerIcon from '~icons/logos/docker-icon';
import MongoDBIcon from '~icons/logos/mongodb-icon';

import useTranslation from '../utils/i18n/hooks';

export default function Home() {
  const t = useTranslation;

  return (
    <Card className="px-2 sm:px-12 py-6 w-full lg:w-9/12">
      <div className="sm:flex space-x-9">
        <div className="text-center flex flex-col items-center">
          <Image
            src="https://cdn.michaelliendo.com/michael/profile-pic.png"
            alt="Michael Liendo"
            width={150}
            height={150}
            className="rounded-full mb-5"
          />
          <span className="p-2 text-sm sm:text-base truncate bg-fuchsia-400 border-2 bg-opacity-10">
            {t('availableWork')}
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl mt-4">
              {t('greetings')}
            </h1>
            <span className="text-2xl md:text-3xl">{t('profile')}</span>
            <div className="flex justify-center sm:justify-start items-center">
              <ReactIcon className="mr-1.5 text-blue-700" />
              <span>React | Next.js Developer</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex items-center mt-6 text-3xl flex-wrap space-x-3">
              <JavascriptIcon title="Javascript" />
              <TypescriptIcon />
              <HTMLIcon />
              <CSSIcon />
              <NextIcon />
              <ReactIcon />
              <GitIcon />
              <GithubIcon className="text-white" />
              <NodejsIcon />
              <TailwindIcon />
              <DockerIcon />
              <MongoDBIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h2 className="text-4xl mb-3">{t('whoAmI')}</h2>
        <p className="text-lg">{t('biography')}</p>
      </div>
      <div className="flex justify-end">
        <a
          title="Curriculum"
          target="_blank"
          rel="noreferrer"
          href={
            t('locale') === 'es'
              ? 'https://cdn.michaelliendo.com/Michael-Liendo-Curriculum-Spanish.pdf'
              : 'https://cdn.michaelliendo.com/Michael-Liendo-Curriculum-English.pdf'
          }
        >
          <button className="mt-5 transition ease-in bg-blue-600 hover:scale-110 duration-150 focus:outline-none font-medium rounded-lg px-5 py-2 text-center">
            Curriculum
          </button>
        </a>
      </div>
    </Card>
  );
}
