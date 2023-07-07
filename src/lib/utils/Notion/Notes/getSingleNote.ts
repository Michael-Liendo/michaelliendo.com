import { NotionToMarkdown } from 'notion-to-md';
import { client } from '../Client';
import { NOTION_NOTES_DATABASE_ID_EN, NOTION_NOTES_DATABASE_ID_ES } from '$env/static/private';
import { pageToNoteTransformer } from './objectTransformer';
import type { NoteResponse } from './types';

const n2m = new NotionToMarkdown({ notionClient: client });

const databaseID = {
	es: NOTION_NOTES_DATABASE_ID_ES || '',
	en: NOTION_NOTES_DATABASE_ID_EN || ''
};

export async function getSingleNotes(locale: 'es' | 'en' = 'en', url: string) {
	const database = databaseID[locale];

	const response = await client.databases.query({
		database_id: database,
		filter: { property: 'url', rich_text: { equals: url } }
	});

	if (response.results.length < 1) {
		return {
			notFound: true
		};
	}

	const mdBlocks = await n2m.pageToMarkdown(response.results[0].id);
	const note = await pageToNoteTransformer(response.results[0] as NoteResponse);
	const markdown = n2m.toMarkdownString(mdBlocks);

	return {
		note,
		markdown
	};
}
