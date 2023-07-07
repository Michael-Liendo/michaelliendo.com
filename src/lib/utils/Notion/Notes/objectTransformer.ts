import type { NoteResponse } from './types';

export function pageToNoteTransformer(note: NoteResponse) {
	return {
		id: note.id,
		icon: note.icon,
		cover: note.cover?.external?.url || note.cover.file?.url || null,
		title: note.properties.name.title?.at(0)?.plain_text,
		tags: note.properties.tags.multi_select,
		description: note.properties.description.rich_text?.at(0)?.plain_text,
		date: note.properties.created.date.start,
		url: note.properties.url.rich_text?.at(0)?.plain_text
	};
}

// todo: types
export function pageToProjectTransformer(project: any) {
	return {
		id: project.id,
		title: project.properties.name.title[0].plain_text,
		tags: project.properties.tags.multi_select,
		description: project.properties.description.rich_text[0].plain_text,
		repository: project.properties.repository.url,
		preview: project.properties.preview.url
	};
}
