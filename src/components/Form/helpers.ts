import { TYPES } from './constants';
import { Poll } from 'types';

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
      label: String(i)
    });
  }
  return yearOptions;
};

const getValidForm = (values: any, data: Poll[]) => {
  let isValid = true;
  for (const value in values) {
    if (!isValid) {
      break;
    }
    const obj = values[value];
    const question = data.find((question) => question.id === value) as Poll;
    const questionView = getItemView(question.view);

    if (questionView) {
      switch (questionView) {
        case '2':
          if (obj === undefined || obj.value === '') {
            isValid = false;
          }
          break;
        case '3':
          {
            const hasValue = obj.find(
              (item: any) =>
                item.value !== undefined &&
                item.value !== null &&
                item.value.value !== ''
            );
            if (hasValue === undefined) {
              isValid = false;
            }
          }
          break;
        case '4':
          if (String(obj).length < 14) {
            isValid = false;
          }
          break;
        case '5':
          if (obj.month.value === '' || obj.year.value === '') {
            isValid = false;
          }
          break;
      }
    } else {
      if (typeof obj === 'string') {
        if (obj.trim() === '') {
          isValid = false;
          break;
        }
      } else {
        isValid = obj.some(
          (val: Record<string, string | boolean>) => Object.values(val)[0]
        );
      }
    }
  }

  return isValid;
};

export { getItemView, getYearOptions, getValidForm };
