import { NOTION_NOTES_DATABASE_ID_EN, NOTION_NOTES_DATABASE_ID_ES } from '$env/static/private';

import { client } from '../Client';
import { pageToNoteTransformer } from './objectTransformer';
import type { NoteResponse } from './types';

const databaseID = {
	es: NOTION_NOTES_DATABASE_ID_ES,
	en: NOTION_NOTES_DATABASE_ID_EN
};

export async function getNotes(locale: 'es' | 'en' = 'en') {
	const database = databaseID[locale];

	const response = await client.databases.query({
		database_id: database,
		filter: {
			property: 'published',
			checkbox: {
				equals: true
			}
		},
		sorts: [
			{
				property: 'created',
				direction: 'descending'
			}
		]
	});

	return response.results.map((note) => pageToNoteTransformer(note as NoteResponse));
}
