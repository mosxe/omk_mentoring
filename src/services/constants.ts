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
    subdivision: '',
    phone: ''
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
    subdivision: '',
    phone: ''
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
  is_agent: false,
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
    link_program_training: '',
    link_file_payments: '',
    image_competencies_mentor: '',
    surcharges_text: '',
    additional_income_text: ''
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
