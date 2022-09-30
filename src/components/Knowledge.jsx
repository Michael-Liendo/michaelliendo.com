import useTranslation from '../utils/i18n/hooks';

import Javascript from './Icons/Javascript';
import CSS from './Icons/CSS';
import HTML from './Icons/HTML';

import Reactjs from './Icons/React';
import Nodejs from './Icons/Nodejs';
import Nextjs from './Icons/Nextjs';
import Git from './Icons/Git';
import Github from './Icons/Gitub';
import Tailwind from './Icons/Tailwind';
import DockerIcon from './Icons/Docker';

export default function Knowledge() {
  const t = useTranslation;

  return (
    <div
      className="mt-28 md:flex md:items-center  md:justify-between"
      id="knowledge"
    >
      <h3 className="text-5xl md:text-6xl">{t('knowledge')}</h3>
      <div className="my-9">
        <h4 className="items-center text-lg md:text-2xl">{t('languages')}</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-7 my-6">
          <Javascript />
          <CSS />
          <HTML />
        </div>
        <h4 className="items-center text-lg md:text-2xl">TECHNOLOGY STACK</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-7 my-6">
          <Nextjs />
          <Reactjs />
          <Git />
          <Github />
          <Nodejs />
          <Tailwind />
          <DockerIcon />
        </div>
      </div>
    </div>
  );
}
