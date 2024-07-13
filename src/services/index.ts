import data from './mockData.json';
import {
  ResponseData,
  ResponseSearchCollaborators,
  ResponseForm,
  ResponseProfessions,
  FormData,
  FormType,
  Error as IError
} from 'types';
import {
  initialSearchCollaborators,
  initialProfessions,
  initialForm,
  initialData
} from './constants';

const getUrl = (action: string, params?: any[]) => {
  const urlParams = new URLSearchParams({
    custom_web_template_id: TEMPLATE_ID,
    action
  });

  if (params !== undefined) {
    params.forEach((param) => {
      const key = Object.keys(param)[0];
      const value = Object.values(param)[0] as string;
      urlParams.append(key, value);
    });
  }

  const BASE_URL = window.location.origin;
  const API_URL = BASE_URL + '/custom_web_template.html?' + urlParams;
  return API_URL;
};

const mockFetchData = (data: any) => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(data), 1500);
  });
};

const TEMPLATE_ID = '7046926645625566409';

export const getData = async (): Promise<ResponseData> => {
  const API_URL = getUrl('getData');
  try {
    if (import.meta.env.DEV) {
      const results = (await mockFetchData(data.fetchData)) as ResponseData;
      return results;
    }

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json;
  } catch (e) {
    initialData.isError = true;
    return initialData;
  }
};

export const getCollaborators = async (
  value: string
): Promise<ResponseSearchCollaborators> => {
  const API_URL = getUrl('getCollaborators', [{ search: value }]);
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

export const getForm = async (type: FormType): Promise<ResponseForm> => {
  const API_URL = getUrl('getDataForm', [{ type: type }]);
  console.log(API_URL);
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

export const getProfessions = async (
  value: string
): Promise<ResponseProfessions> => {
  const API_URL = getUrl('getProfessions', [{ search: value }]);
  try {
    if (import.meta.env.DEV) {
      const results = (await mockFetchData(
        data.getProfessions
      )) as ResponseProfessions;
      return results;
    }

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json;
  } catch (e) {
    initialProfessions.isError = true;
    return initialProfessions;
  }
};

export const postFormData = async (
  data: FormData[],
  type: FormType
): Promise<IError> => {
  const API_URL = getUrl('postFormData');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: data, type: type })
  };

  try {
    if (import.meta.env.DEV) {
      const results = (await mockFetchData({
        isError: false,
        errorMessage: ''
      })) as IError;
      return results;
    }

    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json;
  } catch (e) {
    return { isError: true, errorMessage: '' };
  }
};

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
