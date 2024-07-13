import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
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
  isLoadingContent: boolean;
  isError: boolean;
  onSubmit: (data: Record<string, string | boolean>) => void;
};
const Form = ({
  data,
  title,
  isRequest = false,
  isLoading,
  isLoadingContent,
  isError,
  onSubmit
}: Props) => {
  const [isDisabledForm, setDisabledForm] = useState<boolean>(true);
  const methods = useForm();

  const clssNameForm = isRequest
    ? `${styles.form} ${styles.form_request}`
    : styles.form;

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
      <form className={clssNameForm}>
        <Header title={title} isRequest={isRequest} />
        <div className={styles.form__wrapper}>
          <Loader />
        </div>
      </form>
    );
  }

  if (isError || data.isError) {
    return (
      <form className={clssNameForm}>
        <Header title={title} isRequest={isRequest} />
        <div
          className={`${styles.form__wrapper} ${styles.form__wrapper_error}`}
        >
          <Error />
        </div>
      </form>
    );
  }

  return (
    <>
      <FormProvider {...methods}>
        <form
          className={clssNameForm}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {isLoadingContent && <LoaderContent />}
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
