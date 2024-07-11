import { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Header from './components/Header';
import Item from './components/Item';
import Loader from 'components/Loader';
import { LoaderContent } from 'components/Loader';
import Error from 'components/Error';
import { searchCollaborators } from 'services';
import { ResponseForm } from 'types';
// import { postFormData } from '../../../../utils';
// import { getValidForm, transformData } from 'helpers';
import styles from './styles.module.scss';
import debounce from 'lodash.debounce';

export const MESSAGES = {
  initial: 'Введите название',
  loading: 'Загрузка данных...',
  noOption: 'Данные не найдены',
  error: 'Произошла ошибка, попробуйте повторить позднее'
};

export type optionsMessageProps = {
  inputValue: string;
};

type Props = {
  data: ResponseForm;
  title: string;
  isRequest?: boolean;
  isLoading: boolean;
  isError: boolean;
  onClose: (isError: boolean) => void;
};
const Form = ({
  data,
  title,
  isRequest = false,
  isLoading,
  isError,
  onClose
}: Props) => {
  const [isDisabledForm, setDisabledForm] = useState<boolean>(true);
  const [isLoadingPost, setLoadingPost] = useState<boolean>(false);
  const methods = useForm();
  const messageRef = useRef<string>(MESSAGES.initial);

  useEffect(() => {
    const subscription = methods.watch((values) => {
      console.log(values);
      // const isValid = getValidForm(values, data.data);
      // if (isValid && isDisabledForm) {
      //   setDisabledForm(false);
      // }
      // if (!isValid && isValid !== isDisabledForm) {
      //   setDisabledForm(true);
      // }
    });
    return () => subscription.unsubscribe();
  }, [methods.watch, data.data]);

  const debouncedCompetenceProfiles = debounce(async (input, callback) => {
    console.log(input);
    await searchCollaborators('asdasdd')
      .then((data) => {
        if (data.data.length > 0) {
          messageRef.current = '';
          callback(data.data);
        } else {
          messageRef.current = 'EROR';
          // data.error.code > 0 ? MESSAGES.error : MESSAGES.noOption;
          callback([]);
        }
      })
      .catch(() => {
        messageRef.current = MESSAGES.error;
        callback([]);
      });
  }, 300);

  const getCompetenceProfiles = (input: string, callback: (any) => void) => {
    if (input.trim().length === 0) {
      messageRef.current = MESSAGES.initial;
      return callback([]);
    }
    debouncedCompetenceProfiles(input, callback);
  };

  const onSubmit: SubmitHandler<Record<string, string | boolean>> = (
    dataForm
  ) => {
    setLoadingPost(true);
    const formData = transformData(dataForm, data.data);
    postFormData(formData)
      .then((res) => {
        onClose(res.isError);
      })
      .catch((e) => {
        console.log(e);
        onClose(true);
      })
      .finally(() => setLoadingPost(false));
  };

  const noOptionsMessage = ({ inputValue }: optionsMessageProps) => {
    return inputValue ? messageRef.current : MESSAGES.initial;
  };

  if (isLoading) {
    return (
      <form className={styles.form}>
        <Header title={title} isRequest={isRequest} />
        <div className={styles.form__wrapper}>
          <Loader />
        </div>
      </form>
    );
  }

  if (isError || data.isError) {
    return (
      <form>
        <Header title={title} isRequest={isRequest} />
        <div className={styles.form__wrapper}>
          <Error />
        </div>
      </form>
    );
  }

  return (
    <>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          {isLoadingPost && <LoaderContent />}
          <Header title={title} isRequest={isRequest} />
          <div className={styles.form__text}>
            Уважаемый коллега, просим Вас ответить на {data.data.length}{' '}
            вопросов анкеты
          </div>
          {data.data.map((item, index) => (
            <Item data={item} index={index} key={index} />
          ))}
          <button
            type='submit'
            className={styles.form__btn}
            disabled={isDisabledForm}
          >
            Отправить ответы
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default Form;
