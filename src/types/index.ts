export interface Error {
  isError: boolean;
  errorMessage: string;
}

export interface Collaborator {
  id: string;
  name: string;
  tab_number: string;
  position: string;
  subdivision: string;
}

export interface ResponseSearchCollaborators extends Error {
  data: Collaborator[];
}

// export interface Material {
//   type: string;
//   title: string;
//   desc: string;
//   is_download: boolean;
//   link: string;
// }

// export interface Event {
//   link: string;
//   title: string;
//   start_date: string;
//   start_time: string;
//   photo: string;
//   fullname: string;
//   position_name: string;
//   desc: string;
// }

// export interface Program {
//   title_program: string;
//   is_diagnostics: string;
//   is_training: string;
//   is_development_plan: string;
//   is_certification: string;
//   title_desc: string;
//   is_button_link: string;
//   is_button_file: string;
//   is_button_message: string;
//   title_settings: string;
//   link_page: string;
//   object_file_id: string;
//   notification_type_id: string;
//   button_name: string;
// }

// export interface Contact {
//   photo: string;
//   fullname: string;
//   position_name: string;
//   email: string;
// }

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

export interface ResponseForm extends Error {
  data: Poll[];
  person: {
    middlename: string;
    firstname: string;
    lastname: string;
    number: string;
    position: string;
    subdivision: string;
  };
}

export interface ResponseProfessions extends Error {
  data: {
    value: string;
    label: string;
  }[];
}
