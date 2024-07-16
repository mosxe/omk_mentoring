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
    link_program_training: ''
  },
  isError: false,
  errorMessage: ''
};

export {
  initialSearchCollaborators,
  initialProfessions,
  initialForm,
  initialData
};
