﻿import { useState, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Header from './components/Header';
import Item from './components/Item';
import Loader from 'components/Loader';
import { LoaderContent } from 'components/Loader';
import Error from 'components/Error';
import { ResponseForm } from 'types';
import { getValidForm } from './helpers';
import styles from './styles.module.scss';

type Props = {
  data: ResponseForm;
  title: string;
  isRequest?: boolean;
  isLoading: boolean;
  isError: boolean;
  onClose: (isError: boolean) => void;
  onSubmit: (data: Record<string, string | boolean>) => Promise<void>;
};
const Form = ({
  data,
  title,
  isRequest = false,
  isLoading,
  isError,
  onClose,
  onSubmit
}: Props) => {
  const [isDisabledForm, setDisabledForm] = useState<boolean>(true);
  const [isLoadingPost, setLoadingPost] = useState<boolean>(false);
  const methods = useForm();

  useEffect(() => {
    const subscription = methods.watch((values) => {
      console.log(values);
      const isValid = getValidForm(values, data.data);
      if (isValid && isDisabledForm) {
        setDisabledForm(false);
      }
      if (!isValid && isValid !== isDisabledForm) {
        setDisabledForm(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [methods.watch, data.data]);

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
            <Item data={item} person={data.person} index={index} key={index} />
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
