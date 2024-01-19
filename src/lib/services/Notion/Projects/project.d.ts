export interface Project {
  id: string;
  title: string;
  tags: MultiSelectEntity[];
  description: string;
  repository: string;
  cover: string;
  date: Date;
}

export interface ProjectResponse {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: Cover;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: null;
}

export interface Cover {
  type: string;
  external?: External | null;
  file?: File | null;
}

export interface External {
  url: string;
}
export interface TedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  repository: Preview;
  description: Description;
  created: Created;
  tags: Tags;
  preview: Preview;
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

export interface Name {
  id: string;
  type: string;
  title?: RichTextEntityOrTitleEntity[] | null;
}

export interface Preview {
  id: string;
  type: string;
  url: string;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelectEntity[];
}
export interface File {
  url: string;
  expiry_time: string;
}

export interface MultiSelectEntity {
  id: string;
  name: string;
  color: string;
}
