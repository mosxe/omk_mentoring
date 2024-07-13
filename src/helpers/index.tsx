import { FormData } from 'types';

const getLink = (link: string) => {
  if (link.startsWith('https://') || link.startsWith('http://')) {
    return link;
  }
  return window.origin + link;
};

const getLinkFile = (link: string) => {
  if (link.startsWith('https://') || link.startsWith('http://')) {
    return link;
  }
  const tempLink = link.startsWith('/') ? link : '/' + link;
  return window.origin + tempLink;
};

const transformData = (data: any): FormData[] => {
  const results = [];
  for (const value in data) {
    const obj = data[value];
    if (typeof obj === 'string') {
      results.push({
        id: value,
        value: obj
      });
    } else {
      if (Array.isArray(obj)) {
        const tempEntries = obj.map((item: any) => {
          const objectKeys = Object.keys(item);
          if (objectKeys[0] === 'value') {
            if (item.value !== undefined) {
              return item.value.value;
            }
          } else {
            const objectValue = item[objectKeys[0]];
            const objectId = objectKeys[0].slice(1);

            if (objectValue) {
              return objectId;
            }
          }
        });
        const filteredtTempEntries = tempEntries.filter((i) => i !== undefined);
        const tempStr = filteredtTempEntries.join(';');
        results.push({
          id: value,
          value: tempStr
        });
      } else if (obj?.month !== undefined && obj?.year !== undefined) {
        const dateValue = new Date(obj.year.value, obj.month.value, 1);
        results.push({
          id: value,
          value: dateValue.toString()
        });
      } else if (obj?.value !== undefined) {
        results.push({
          id: value,
          value: obj.value
        });
      }

      // const tempEntries: [] = obj.map((item: any) => {
      //   const objectKeys = Object.keys(item);
      //   if (objectKeys[0] === 'text') {
      //     if (selectedTextValue) {
      //       questionComment = item.text;
      //     }
      //     return null;
      //   } else {
      //     const objectValue = item[objectKeys[0]];
      //     const objectId = objectKeys[0].slice(1);
      //     return {
      //       id: objectId,
      //       value: objectValue
      //     };
      //   }
      // });

      // const filteredtTempEntries = tempEntries.filter((i) => i !== null);
      // results.push({
      //   id: value,
      //   entries: filteredtTempEntries,
      //   comments: questionComment
      // });
    }
  }
  return results;
};

export { getLink, getLinkFile, transformData };
