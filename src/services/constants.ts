import { FormType } from 'types';
const TEMPLATE_ID = '7046926645625566409';

const initialSearchCollaborators = {
  data: [],
  isError: false,
  errorMessage: ''
};

const initialProfessions = {
  data: [],
  isError: false,
  errorMessage: ''
};

const initialForm = {
  data: [],
  person: {
    firstname: '',
    middlename: '',
    lastname: '',
    tab_number: '',
    position: '',
    subdivision: ''
  },
  collaborator: null,
  isError: false,
  errorMessage: ''
};

const initialFormResult = {
  data: [],
  person: {
    firstname: '',
    middlename: '',
    lastname: '',
    tab_number: '',
    position: '',
    subdivision: ''
  },
  collaborator: {
    firstname: '',
    middlename: '',
    lastname: '',
    tab_number: '',
    position: '',
    subdivision: ''
  },
  type: 'person_mentor' as FormType,
  is_done: true,
  isError: false,
  errorMessage: ''
};

const initialData = {
  data: {
    news: [],
    contacts: {
      photo: '',
      fullname: '',
      position_name: '',
      email: '',
      phone: '',
      phone_mobile: ''
    },
    link_corporate_competencies_mentor: '',
    link_file_program_training: '',
    link_program_training: '',
    link_additional_competencies: ''
  },
  isError: false,
  errorMessage: ''
};

export {
  TEMPLATE_ID,
  initialSearchCollaborators,
  initialProfessions,
  initialForm,
  initialFormResult,
  initialData
};
