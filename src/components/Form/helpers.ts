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

export { getRadioButtonChecked, getItemView };
