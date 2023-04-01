import ReactMarkdown from 'react-markdown';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

import { getPublishedNotes, getSingleNotes } from '../../lib/notion.js';

export default function Post({ markdown, note, locale }) {
  return (
    <Layout
      title={note.title}
      description={note.description}
      image={note.cover}
      url={
        locale === 'es'
          ? `https://michaelliendo.com/es/notes/${note.url}`
          : `https://michaelliendo.com/notes/${note.url}`
      }
      type="article"
      keywords={`${note.tags.join(', ')}, ${note.title}, ${note.description}`}
    >
      <Card className="p-8">
        <div className="my-2 sm:flex sm:items-center sm:justify-center">
          <article className="prose max-w-3xl dark:prose-p:text-white prose-strong:text-green-500 dark:prose-headings:text-white prose-green dark:prose-code:text-white">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </Card>
    </Layout>
  );
}

export async function getStaticProps({ locale, params }) {
  const n = await getSingleNotes(locale, params?.url);

  if (n.notFound) {
    console.log('no have a note');
    return {
      notFound: true,
    };
  }

  return {
    props: {
      markdown: n.markdown,
      note: n.note,
      locale,
    },
  };
}

export async function getStaticPaths() {
  const notesES = await getPublishedNotes('es');
  const notesEN = await getPublishedNotes('en');

  const pathsEN = notesEN.map((note) => {
    return `/notes/${note.url}`;
  });

  const pathsES = notesES.map((note) => {
    return `/es/notes/${note.url}`;
  });
  let paths = [...pathsES, ...pathsEN];

  return {
    paths,
    fallback: false,
  };
}
