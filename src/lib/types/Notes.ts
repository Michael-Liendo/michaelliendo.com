export interface Note {
	metadata: NoteMetadata;
	content: string;
}

export interface NoteMetadata {
	title: string;
	description: string;
	date: string;
	icon: string;
	tags: string[];
	preview_image_url?: string;
}
