// import { Program, Type, ActionProgram, Poll, FormData } from 'types';

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

// const getValidForm = (values: any, data: Poll[]) => {
//   let isValid = true;
//   for (const value in values) {
//     if (!isValid) {
//       break;
//     }
//     const obj = values[value];
//     if (typeof obj === 'string') {
//       if (obj.trim() === '') {
//         isValid = false;
//         break;
//       }
//     } else {
//       isValid = obj.some((val: Record<string, string | boolean>) => {
//         const entryId = Object.keys(val)[0].slice(1);
//         const question = data.find((question) => question.id === value);
//         const entry = question?.entries.find((entry) => entry.id === entryId);
//         const textValue = obj.find((o: any) => o.text);

//         if (
//           entry?.weight === 1 &&
//           Object.values(val)[0] &&
//           textValue !== undefined &&
//           String(textValue.text).trim() !== ''
//         ) {
//           return true;
//         } else if (entry?.weight === 0 && Object.values(val)[0]) {
//           return true;
//         }
//         return false;
//       });
//     }
//   }

//   return isValid;
// };

// const transformData = (data: any, dataPoll: Poll[]): FormData[] => {
//   const results = [];
//   for (const value in data) {
//     const obj = data[value];
//     if (typeof obj === 'string') {
//       results.push({
//         id: value,
//         entries: [],
//         comments: obj
//       });
//     } else {
//       let questionComment = '';
//       let selectedTextValue = false;
//       const question = dataPoll.find((question) => question.id === value);
//       const entry = question?.entries.find((entry) => entry.weight === 1);
//       if (entry) {
//         const findEntry = obj.find(
//           (o: any) => Object.keys(o)[0] === `_${entry.id}`
//         );
//         if (Object.values(findEntry)[0]) {
//           selectedTextValue = true;
//         }
//       }
//       const tempEntries: [] = obj.map((item: any) => {
//         const objectKeys = Object.keys(item);
//         if (objectKeys[0] === 'text') {
//           if (selectedTextValue) {
//             questionComment = item.text;
//           }
//           return null;
//         } else {
//           const objectValue = item[objectKeys[0]];
//           const objectId = objectKeys[0].slice(1);
//           return {
//             id: objectId,
//             value: objectValue
//           };
//         }
//       });

//       const filteredtTempEntries = tempEntries.filter((i) => i !== null);
//       results.push({
//         id: value,
//         entries: filteredtTempEntries,
//         comments: questionComment
//       });
//     }
//   }
//   return results;
// };

// export { getLink, getLinkFile, getValidForm, transformData };

export { getLink, getLinkFile };
