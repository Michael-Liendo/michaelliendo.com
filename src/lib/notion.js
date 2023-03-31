import { NotionToMarkdown } from 'notion-to-md';
import { client } from './notionClient';

const n2m = new NotionToMarkdown({ notionClient: client });

const databaseID = {
  es: process.env.NOTION_NOTES_DATABASE_ID_ES,
  en: process.env.NOTION_NOTES_DATABASE_ID_EN,
};

export async function getPublishedNotes(locale = 'en') {
  const database = databaseID[locale];
  // list NOTES s
  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'created',
        direction: 'descending',
      },
    ],
  });

  return Promise.all(
    response.results.map((res) => {
      return pageToNoteTransformer(res);
    }),
  );
}

export async function getSingleNotes(locale = 'en', url) {
  const database = databaseID[locale];

  const response = await client.databases.query({
    database_id: database,
    filter: { property: 'url', rich_text: { equals: url } },
  });

  if (response.results.length < 1) {
    return {
      notFound: true,
    };
  }

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const note = await pageToNoteTransformer(page);
  const markdown = n2m.toMarkdownString(mdBlocks);

  return {
    note,
    markdown,
    notFound: false,
  };
}

export async function getProjects() {
  const database = process.env.NOTION_PROJECTS_DATABASE_ID ?? '';

  const response = await client.databases.query({
    database_id: database,
  });

  return Promise.all(
    response.results.map((res) => {
      return pageToProjectTransformer(res);
    }),
  );
}

export function pageToProjectTransformer(project) {
  return {
    id: project.id,
    title: project.properties.name.title[0].plain_text,
    tags: project.properties.tags.multi_select,
    description: project.properties.description.rich_text[0].plain_text,
    repository: project.properties.repository.url,
    preview: project.properties.preview.url,
  };
}

export async function pageToNoteTransformer(note) {
  let time = new Date(note.properties.created.date.start).toLocaleDateString(
    'en',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return {
    id: note.id,
    icon: note.icon,
    cover: note.cover?.external?.url || note.cover?.file?.url || null,
    title: note.properties.name.title[0].plain_text,
    tags: note.properties.tags.multi_select,
    description: note.properties.description.rich_text[0].plain_text,
    date: time,
    url: note.properties.url.rich_text[0].plain_text,
  };
}
