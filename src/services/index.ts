﻿import data from './mockData.json';
import {
  ResponseSearchCollaborators,
  ResponseForm,
  Error as IError
} from 'types';
import { initialSearchCollaborators, initialForm } from './constants';

const getUrl = (action: string, ...params) => {
  const urlParams = new URLSearchParams({
    custom_web_template_id: TEMPLATE_ID,
    action,
    ...params
  });
  const BASE_URL = window.location.origin;
  const API_URL = BASE_URL + '/custom_web_template.html?' + urlParams;
  return API_URL;
};

const mockFetchData = (data: any) => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(data), 1500);
  });
};

const TEMPLATE_ID = '7040314279102083651';

export const searchCollaborators = async (
  value: string
): Promise<ResponseSearchCollaborators> => {
  const API_URL = getUrl('searchCollaborators', { search: value });
  try {
    if (import.meta.env.DEV) {
      const results = (await mockFetchData(
        data.searchCollabators
      )) as ResponseSearchCollaborators;
      return results;
    }

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json;
  } catch (e) {
    initialSearchCollaborators.isError = true;
    return initialSearchCollaborators;
  }
};

export const getFormMentor = async (): Promise<ResponseForm> => {
  const API_URL = getUrl('getDataForm');
  try {
    if (import.meta.env.DEV) {
      const results = (await mockFetchData(data.formMentor)) as ResponseForm;
      return results;
    }

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json;
  } catch (e) {
    initialForm.isError = true;
    return initialForm;
  }
};

// export const initialData = {
//   data: {
//     programs: [],
//     materials: [],
//     events: [],
//     contacts: {
//       photo: '',
//       fullname: '',
//       position_name: '',
//       email: ''
//     },
//     link_model_competence: '',
//     link_events: '',
//     model_competence_video: ''
//   },
//   isError: false,
//   errorMessage: ''
// };

// export const getFetchData = async (): Promise<ResponseData> => {
//   const API_URL = getUrl('getData');
//   try {
//     if (import.meta.env.DEV) {
//       const results = (await mockFetchData(data.fetchData)) as ResponseData;
//       return results;
//     }

//     const response = await fetch(API_URL);

//     if (!response.ok) {
//       throw Error(response.statusText);
//     }

//     const json = await response.json();
//     return json;
//   } catch (e) {
//     initialData.isError = true;
//     return initialData;
//   }
// };

// export const postFormData = async (data: FormData[]): Promise<IError> => {
//   const API_URL = getUrl('postFormData');
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ data: data })
//   };

//   try {
//     if (import.meta.env.DEV) {
//       const results = (await mockFetchData({
//         isError: false,
//         errorMessage: ''
//       })) as IError;
//       return results;
//     }

//     const response = await fetch(API_URL, requestOptions);

//     if (!response.ok) {
//       throw Error(response.statusText);
//     }

//     const json = await response.json();
//     return json;
//   } catch (e) {
//     return { isError: true, errorMessage: '' };
//   }
// };

// export const sendRequest = async (data: Request): Promise<IError> => {
//   const API_URL = getUrl('sendRequest');
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   };

//   try {
//     if (import.meta.env.DEV) {
//       const results = (await mockFetchData({
//         isError: false,
//         errorMessage: ''
//       })) as IError;
//       return results;
//     }

//     const response = await fetch(API_URL, requestOptions);

//     if (!response.ok) {
//       throw Error(response.statusText);
//     }

//     const json = await response.json();
//     return json;
//   } catch (e) {
//     return { isError: true, errorMessage: '' };
//   }
// };