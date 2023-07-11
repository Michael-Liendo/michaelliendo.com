export interface Note {
	id: string;
	icon: Icon | null | undefined;
	cover: string | null;
	title: string | undefined;
	tags: MultiSelectEntity[] | null | undefined;
	description: string | undefined;
	date: string;
	slug: string | undefined;
}

export interface NoteResponse {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: CreatedByOrLastEditedBy;
	last_edited_by: CreatedByOrLastEditedBy;
	cover: Cover;
	icon?: Icon | null;
	parent: Parent;
	archived: boolean;
	properties: Properties;
	url: string;
	public_url: string;
}
export interface CreatedByOrLastEditedBy {
	object: string;
	id: string;
}
export interface Cover {
	type: string;
	external?: External | null;
	file?: File | null;
}
export interface External {
	url: string;
}
export interface File {
	url: string;
	expiry_time: string;
}
export interface Icon {
	type: string;
	emoji?: string | null;
	external?: External1 | null;
}
export interface External1 {
	url: string;
}
export interface Parent {
	type: string;
	database_id: string;
}
export interface Properties {
	url: UrlOrDescription;
	description: UrlOrDescription;
	tags: Tags;
	created: Created;
	published: Published;
	name: Name;
}
export interface UrlOrDescription {
	id: string;
	type: string;
	rich_text?: RichTextEntityOrTitleEntity[] | null;
}
export interface RichTextEntityOrTitleEntity {
	type: string;
	text: Text;
	annotations: Annotations;
	plain_text: string;
	href?: null;
}
export interface Text {
	content: string;
	link?: null;
}
export interface Annotations {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}
export interface Tags {
	id: string;
	type: string;
	multi_select?: MultiSelectEntity[] | null;
}
export interface MultiSelectEntity {
	id: string;
	name: string;
	color: string;
}
export interface Created {
	id: string;
	type: string;
	date: Date;
}
export interface Date {
	start: string;
	end?: null;
	time_zone?: null;
}
export interface Published {
	id: string;
	type: string;
	checkbox: boolean;
}
export interface Name {
	id: string;
	type: string;
	title?: RichTextEntityOrTitleEntity[] | null;
}
