import { useState, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Question from './Question';
import Loader from 'components/Loader';
import { LoaderContent } from 'components/Loader';
import Error from 'components/Error';
import { ResponseForm } from 'types';
import { postFormData } from '../../../../utils';
import { getValidForm, transformData } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: ResponseForm;
  isLoading: boolean;
  isError: boolean;
  onClose: (isError: boolean) => void;
};
const Form = ({ data, isLoading, isError, onClose }: Props) => {
  const [isDisabledForm, setDisabledForm] = useState<boolean>(true);
  const [isLoadingPost, setLoadingPost] = useState<boolean>(false);
  const methods = useForm();

  useEffect(() => {
    const subscription = methods.watch((values) => {
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

  if (isLoading) {
    return (
      <form className={styles.form}>
        <div className={styles.form__header}>
          <h2>Анкета</h2>
        </div>
        <div className={styles.form__wrapper}>
          <Loader />
        </div>
      </form>
    );
  }

  if (isError || data.isError) {
    return (
      <form>
        <div className={styles.form__header}>
          <h2>Анкета</h2>
        </div>
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
          <div className={styles.form__header}>
            <h2>Анкета</h2>
          </div>
          <div className={styles.form__text}>
            Уважаемый коллега, ответьте на 5 вопросов - так нам проще будет
            определиться с Вашими ожиданиями от преподавательской деятельности.
          </div>
          {data.data.map((item, index) => (
            <Question data={item} index={index} key={index} />
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
