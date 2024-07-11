import { TYPES } from './constants';

const getRadioButtonChecked = (
  data: any[],
  itemId: string,
  value: string
) => {};

const getItemView = (value: string): string => {
  if (value === '') {
    return '';
  }
  const view = TYPES.find((type) => type.id === value);
  return view !== undefined ? view.id : '';
};

const getYearOptions = () => {
  const yearOptions = [];
  const currentYear = new Date().getFullYear();

  for (let i = currentYear - 10; i <= currentYear; i++) {
    yearOptions.push({
      value: i,
      label: i
    });
  }
  return yearOptions;
};

export { getRadioButtonChecked, getItemView, getYearOptions };
