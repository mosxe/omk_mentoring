export interface Error {
  isError: boolean;
  errorMessage: string;
}

export interface SearchCollaborator {
  id: string;
  name: string;
  tab_number: string;
  position: string;
  subdivision: string;
}

export interface ResponseSearchCollaborators extends Error {
  data: SearchCollaborator[];
}

export interface ResponseData extends Error {
  data: any;
}

export interface Entry {
  id: string;
  title: string;
}

export interface Poll {
  id: string;
  title: string;
  view: string;
  entries: Entry[];
  type: 'select' | 'text' | 'choice' | 'combo' | 'link_to_database_object';
}

export interface Collaborator {
  middlename: string;
  firstname: string;
  lastname: string;
  tab_number: string;
  position: string;
  subdivision: string;
}

export interface ResponseForm extends Error {
  data: Poll[];
  person: Collaborator;
}

export interface ResponseProfessions extends Error {
  data: {
    value: string;
    label: string;
  }[];
}

export interface FormData {
  id: string;
  entries: Record<string, string>[];
}
