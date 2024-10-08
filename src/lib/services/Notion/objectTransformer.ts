import type { Note, NoteResponse } from './Notes/notes';
import type { ProjectResponse } from './Projects/project';

export function pageToNoteTransformer(note: NoteResponse): Note {
  return {
    id: note.id,
    icon: note.icon,
    cover: note.cover?.external?.url || note.cover?.file?.url || null,
    title: note.properties.name.title?.at(0)?.plain_text,
    tags: note.properties.tags.multi_select || [],
    description: note.properties.description.rich_text?.at(0)?.plain_text,
    date: note.properties.created.date.start,
    slug: note.properties.url.rich_text?.at(0)?.plain_text,
  };
}

export function pageToProjectTransformer(project: ProjectResponse) {
  return {
    id: project.id,
    title: project.properties.name.title?.at(0)?.plain_text,
    tags: project.properties.tags.multi_select,
    description: project.properties.description.rich_text.at(0).plain_text,
    repository: project.properties.repository.url,
    cover: project.cover?.external?.url || project.cover?.file?.url || null,
    date: project.properties.created.date?.start,
  };
}
