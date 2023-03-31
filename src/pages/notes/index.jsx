import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Note from '../../components/NoteCard';
import { getPublishedNotes } from '../../lib/notion.js';
import useTranslation from '../../utils/i18n/hooks';

export default function Home({ notes, locale }) {
  const t = useTranslation;

  return (
    <Layout
      title={
        t('locale') == 'es'
          ? 'Michael Liendo | Notas'
          : 'Michael Liendo | Notes'
      }
      description={
        t('locale') === 'es'
          ? 'Aquí puedes encontrar mi blog personal donde comparto mis pensamientos, consejos y trucos sobre el desarrollo web, la programación, y el diseño de experiencias de usuario. Como desarrollador Front-End, creo que compartir conocimiento y aprendizajes es esencial para el crecimiento profesional y personal en la industria.'
          : 'Here you can find my personal blog where I share my thoughts, tips and tricks about web development, programming, and user experience design. As a Front-End developer, I believe that sharing knowledge and learnings is essential for professional and personal growth in the industry.'
      }
      url={
        locale === 'es'
          ? 'https://michaelliendo.com/es/notes'
          : 'https://michaelliendo.com/notes'
      }
      type="website"
      keywords="michael liendo blog, blog of michael liendo, michael's posts, blog de michael, notes, michael liendo notes, michael liendo's notes, notas, notas de michael"
    >
      <Card className="p-7">
        <h1 className="mb-20 text-5xl text-center">{t('latestNotes')}</h1>
        <div className="md:grid grid-cols-3 gap-10">
          {notes.map((note, index) => {
            if (!(index % 4))
              return <Note key={note.id} note={note} view={1} />;
            else return <Note key={note.id} note={note} />;
          })}
        </div>
      </Card>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const notes = await getPublishedNotes(locale);

  return {
    props: {
      notes,
      locale,
    },
  };
}
