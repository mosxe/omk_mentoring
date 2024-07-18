import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Alert from 'components/Alert';
import Form from 'components/Form';
import Popap from 'components/Popap';
import { PopapAlert } from 'components/Popap';
import { toast } from 'react-toastify';
import { ResponseFormResult } from 'types';
import { getFormResult, postFormData } from 'services';
import { initialFormResult } from 'services/constants';
import { transformData } from 'helpers';
import stylesMain from 'modules/Main/styles.module.scss';
import styles from './styles.module.scss';

const FormResult = () => {
  const { id } = useParams();
  const [data, setData] = useState<ResponseFormResult>(initialFormResult);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLoadingContent, setLoadingContent] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  const [isDoneForm, setDoneForm] = useState<boolean>(false);

  const onShowPopap = () => {
    setShowPopap(!isShowPopap);
  };

  useEffect(() => {
    setLoading(true);
    getFormResult(id ?? '')
      .then((res) => {
        if (res.isError) {
          setError(true);
          return;
        }
        setData(res);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = (dataForm: Record<string, string | boolean>) => {
    setLoadingContent(true);
    const formData = transformData(dataForm);
    postFormData(formData, data.type, id)
      .then((res) => {
        if (res.isError) {
          toast('Произошла ошибка');
        } else {
          setShowPopap(true);
          setDoneForm(true);
        }
      })
      .catch((e) => {
        console.log(e);
        toast('Произошла ошибка');
      })
      .finally(() => setLoadingContent(false));
  };

  const dearPerson =
    data.collaborator?.sex === 'w'
      ? 'Уважаемая'
      : data.collaborator?.sex === 'm'
      ? 'Уважаемый'
      : 'Уважаемый(ая)';

  const Text = () => {
    if (data.type === 'manager_mentor') {
      return (
        <p className={styles['form-result__text']}>
          Ваш сотрудник{' '}
          <span className={styles['form-result__text_gray']}>
            {data.person.lastname} {data.person.firstname}{' '}
            {data.person.middlename}, {data.person.position}
          </span>
          , направил в адрес корпоративного университета заявку о желании стать
          наставником по рабочей профессии. Просим Вас заполнить небольшую
          анкету об этом сотруднике, чтобы оценить потенциал кандидата в роли
          наставника.
        </p>
      );
    }
    return (
      <p className={styles['form-result__text']}>
        Ваш сотрудник{' '}
        <span className={styles['form-result__text_gray']}>
          {data.person.lastname} {data.person.firstname}{' '}
          {data.person.middlename}, {data.person.position}
        </span>
        , направил в адрес корпоративного университета заявку о желании принять
        участие в{' '}
        <span className={styles['form-result__link']}>
          тренинге для наставников
        </span>
        . Просим Вас заполнить небольшую анкету об этом сотруднике, чтобы
        подтвердить, что он является наставником, а также оценить его
        компетенции для этой роли.
      </p>
    );
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className={stylesMain.main}>
          <Loader />
        </main>
        <Footer />
      </>
    );
  }

  if (isError || data.isError) {
    return (
      <>
        <Header />
        <main className={stylesMain.main}>
          <Error />
        </main>
        <Footer />
      </>
    );
  }

  if (data.is_done || isDoneForm) {
    return (
      <>
        <Header />
        <main className={stylesMain.main}>
          <div className={styles['form-result']}>
            <div className={styles['form-result__title']}>
              ${dearPerson}, {data.collaborator.firstname}{' '}
              {data.collaborator.middlename}!
            </div>
            <p className={styles['form-result__text']}>
              Вы заполнили анкету по сотруднику{' '}
              <span className={styles['form-result__text_gray']}>
                {data.person.lastname} {data.person.firstname}{' '}
                {data.person.middlename}, {data.person.position}
              </span>
              .
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={stylesMain.main}>
        <div className={styles['form-result']}>
          <div className={styles['form-result__title']}>
            {dearPerson}, {data.collaborator.firstname}{' '}
            {data.collaborator.middlename}!
          </div>
          <Text />
          <Form
            isLoading={isLoading}
            isLoadingContent={isLoadingContent}
            isError={isError}
            data={data}
            onSubmit={onSubmit}
            isResult={true}
          />
        </div>
      </main>
      <Footer />
      <Alert />
      <Popap isShow={isShowPopap} onClose={onShowPopap} width={750}>
        <PopapAlert
          type={data.type === 'person_mentor' ? 'mentor' : 'training'}
          isShowText={false}
        />
      </Popap>
    </>
  );
};

export default FormResult;
