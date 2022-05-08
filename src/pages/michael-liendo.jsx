import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import { getAboutMe } from '../lib/notion';

export async function getStaticProps() {
  const aboutMe = await getAboutMe();

  return {
    props: {
      markdown: aboutMe.markdown,
    },
  };
}

export default function MichaelLiendo({ markdown }) {
  return (
    <Layout title="Who is Michael Liendo?">
      <div className="flex items-center justify-center">
        <article className="prose">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}
