import { TYPES } from './constants';
import { Poll, FormData } from 'types';

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
              (item: any) => item.value !== undefined && item.value.value !== ''
            );
            if (hasValue === undefined) {
              isValid = false;
            }
          }
          break;
        case '4':
          if (String(obj).length < 18) {
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

const transformData = (data: any, dataPoll: Poll[]): FormData[] => {
  const results = [];
  for (const value in data) {
    const obj = data[value];
    if (typeof obj === 'string') {
      results.push({
        id: value,
        entries: [],
        comments: obj
      });
    } else {
      let questionComment = '';
      let selectedTextValue = false;
      const question = dataPoll.find((question) => question.id === value);
      const entry = question?.entries.find((entry) => entry.weight === 1);
      if (entry) {
        const findEntry = obj.find(
          (o: any) => Object.keys(o)[0] === `_${entry.id}`
        );
        if (Object.values(findEntry)[0]) {
          selectedTextValue = true;
        }
      }
      const tempEntries: [] = obj.map((item: any) => {
        const objectKeys = Object.keys(item);
        if (objectKeys[0] === 'text') {
          if (selectedTextValue) {
            questionComment = item.text;
          }
          return null;
        } else {
          const objectValue = item[objectKeys[0]];
          const objectId = objectKeys[0].slice(1);
          return {
            id: objectId,
            value: objectValue
          };
        }
      });

      const filteredtTempEntries = tempEntries.filter((i) => i !== null);
      results.push({
        id: value,
        entries: filteredtTempEntries,
        comments: questionComment
      });
    }
  }
  return results;
};

export {
  getRadioButtonChecked,
  getItemView,
  getYearOptions,
  getValidForm,
  transformData
};
