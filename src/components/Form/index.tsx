import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Header from './components/Header';
import Item from './components/Item';
import ItemContainer from './components/ItemContainer';
import Loader from 'components/Loader';
import { LoaderContent } from 'components/Loader';
import Error from 'components/Error';
import { ResponseFormResult, ResponseForm } from 'types';
import { getValidForm } from './helpers';
import styles from './styles.module.scss';

type Props = {
  data: ResponseForm | ResponseFormResult;
  title?: string;
  isRequest?: boolean;
  isLoading: boolean;
  isLoadingContent: boolean;
  isError: boolean;
  onSubmit: (data: Record<string, string | boolean>) => void;
  isResult?: boolean;
};
const Form = ({
  data,
  title,
  isRequest = false,
  isLoading,
  isLoadingContent,
  isError,
  onSubmit,
  isResult = false
}: Props) => {
  const [isDisabledForm, setDisabledForm] = useState<boolean>(true);
  const methods = useForm();

  const clssNameForm = isRequest
    ? `${styles.form} ${styles.form_request}`
    : styles.form;

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

  if (isLoading) {
    return (
      <form className={clssNameForm}>
        {title && <Header title={title} isRequest={isRequest} />}
        <div className={styles.form__wrapper}>
          <Loader />
        </div>
      </form>
    );
  }

  if (isError || data.isError) {
    return (
      <form className={clssNameForm}>
        {title && <Header title={title} isRequest={isRequest} />}
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
          {title && <Header title={title} isRequest={isRequest} />}
          {!isResult && (
            <div className={styles.form__text}>
              Уважаемый коллега, просим Вас ответить на {data.data.length}{' '}
              вопросов анкеты
            </div>
          )}
          {data.data.map((item, index) => {
            const header = `Вопрос ${index + 1}`;
            return (
              <Item
                data={item}
                person={data.person}
                header={header}
                key={index}
              />
            );
          })}
          {isResult && (
            <ItemContainer header='Руководитель' title=''>
              <div className={styles.form__item_desc}>
                <span>
                  <strong>{`${data.collaborator?.lastname} ${data.collaborator?.firstname} ${data.collaborator?.middlename}`}</strong>
                </span>
                , {data.collaborator?.position}{' '}
                {data.collaborator?.tab_number
                  ? `(${data.collaborator?.tab_number})`
                  : ''}
                , {data.collaborator?.subdivision}
              </div>
            </ItemContainer>
          )}
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
