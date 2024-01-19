import { NotionToMarkdown } from 'notion-to-md';
import {
  NOTION_NOTES_DATABASE_ID_EN,
  NOTION_NOTES_DATABASE_ID_ES,
} from '$env/static/private';

import { client } from '../Client';
import { pageToNoteTransformer } from '../objectTransformer';

import type { NoteResponse } from './notes';

export {
  pageToNoteTransformer,
  pageToProjectTransformer,
} from '../objectTransformer';

const n2m = new NotionToMarkdown({ notionClient: client });

const databaseID = {
  es: NOTION_NOTES_DATABASE_ID_ES,
  en: NOTION_NOTES_DATABASE_ID_EN,
};

export class Notes {
  static async getNotes(locale: 'es' | 'en' = 'es') {
    const database = databaseID[locale];

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

    return response.results.map((note) =>
      pageToNoteTransformer(note as NoteResponse),
    );
  }
  static async getSingleNotes(locale: 'es' | 'en', url: string) {
    const database = databaseID[locale];

    const response = await client.databases.query({
      database_id: database,
      filter: { property: 'url', rich_text: { equals: url } },
    });

    if (response.results.length === 0) {
      return {
        note: null,
        markdown: '',
      };
    }

    const mdBlocks = await n2m.pageToMarkdown(response.results[0].id);
    const note = await pageToNoteTransformer(
      response.results[0] as NoteResponse,
    );
    const markdown = n2m.toMarkdownString(mdBlocks);

    return {
      note,
      markdown,
    };
  }
}
