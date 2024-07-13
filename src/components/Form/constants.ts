export const TYPES = [
  {
    id: '1',
    name: 'Автозаполнение ФИО сотрудника'
  },
  {
    id: '2',
    name: 'Указывается ФИО руководителя'
  },
  {
    id: '3',
    name: 'Указывается профессия(и) наставника'
  },
  {
    id: '4',
    name: 'Указывается телефон'
  },
  {
    id: '5',
    name: 'Указываются даты наставничества'
  }
];

export const MONTHS = [
  {
    value: 0,
    label: 'январь'
  },
  {
    value: 1,
    label: 'февраль'
  },
  {
    value: 2,
    label: 'март'
  },
  {
    value: 3,
    label: 'апрель'
  },
  {
    value: 4,
    label: 'май'
  },
  {
    value: 5,
    label: 'июнь'
  },
  {
    value: 6,
    label: 'июль'
  },
  {
    value: 7,
    label: 'август'
  },
  {
    value: 8,
    label: 'сентябрь'
  },
  {
    value: 9,
    label: 'октябрь'
  },
  {
    value: 10,
    label: 'ноябрь'
  },
  {
    value: 11,
    label: 'декабрь'
  }
];

export const MAX_COUNT_PROFESSIONS = 8;

export const SELECT_MESSAGES_PERSONS = {
  initial: 'Введите ФИО сотрудника',
  loading: 'Загрузка данных...',
  noOption: 'Сотрудники не найдены',
  error: 'Произошла ошибка, попробуйте повторить позднее'
};

export const SELECT_MESSAGES_PROFESSIONS = {
  initial: 'Введите название',
  loading: 'Загрузка данных...',
  noOption: 'Данные не найдены',
  error: 'Произошла ошибка, попробуйте повторить позднее'
};
//select - checkbox
//choice - radiobutton
//combo
//text - ввод текста
//link_to_database_object - ссылка на ресурс
