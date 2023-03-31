import Image from 'next/image';
import Layout from '../components/Layout';
import { getPublishedNotes } from '../lib/notion';
import useTranslation from '../utils/i18n/hooks';
import SocialMedia from '../components/SocialMedia';
import Link from 'next/link';

import CalendarIcon from '~icons/mdi/calendar-month';

function Icon({ icon }) {
  if (icon?.type == 'external')
    return (
      <Image src={icon.external.url} alt="a icon" width={300} height={300} />
    );
  else if (icon?.type == 'emoji') return icon.emoji;
}

export default function Home({ notes }) {
  const t = useTranslation;
  return (
    <Layout
      title={t('title')}
      description={t('description')}
      url={
        t('locale') === 'es'
          ? 'https://michaelliendo.com/es/'
          : 'https://michaelliendo.com/'
      }
      type="portfolio.website"
    >
      <section className="flex flex-col justify-center items-center md:flex-row md:mx-auto md:justify-evenly md:items-center">
        <div className="flex md:items-center md:justify-center py-4 w-[300px]">
          <figure className="w-[300px]">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/70660410?v=4"
              height="500"
              width="500"
              alt="A selfie of Michael Liendo"
            />
          </figure>
        </div>
        <article className="flex flex-col py-4 md:w-3/6 w-4/6">
          <strong className="text-3xl md:text-4xl py-4 text-center md:text-left">
            {t('greetings')}
          </strong>
          <p className="text-center md:text-left">{t('aboutMe')}</p>
          <SocialMedia />
        </article>
      </section>
      <section className="flex flex-col my-4">
        <div>
          <h2 className="text-xl font-bold mb-4">{t('latestNotes')}</h2>
          <ul className="space-y-2">
            {notes.slice(0, 7).map((note, index) => (
              <li title={note.title} key={index}>
                <Link
                  className="py-2 px-4 flex items-center justify-between rounded hover:bg-light-background dark:hover:bg-dark-background cursor-pointer mb-4 last-of-type:mb-0"
                  href={`/notes/${note.url}`}
                >
                  <div className="flex items-center">
                    <figure className="mr-4 w-4 h-4">
                      <Icon icon={note.icon} />
                    </figure>
                    <span title={note.title}>{note.title.slice(0, 60)}</span>
                  </div>
                  <span className="flex items-center mr-2">
                    <time
                      className="text-sm mr-2"
                      dateTime={new Date(note.date).toString()}
                    >
                      {new Date(note.date).toLocaleDateString('en-us', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      })}
                    </time>
                    <figure className="mr-2">
                      <CalendarIcon size={16} />
                    </figure>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const notes = await getPublishedNotes(locale);

  const notesWithTagTechnology = notes.filter((note) =>
    note.tags.some((tag) => tag.name === 'technology'),
  );
  return {
    props: {
      notes: notesWithTagTechnology,
      locale,
    },
  };
}
