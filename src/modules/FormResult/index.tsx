import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Alert from 'components/Alert';
import Form from 'components/Form';
import { ResponseForm } from 'types';
import { getFormResult } from 'services';
import { initialForm } from 'services/constants';
import stylesMain from 'modules/Main/styles.module.scss';
import styles from './styles.module.scss';

const FormResult = () => {
  const { id } = useParams();
  const [data, setData] = useState<ResponseForm>(initialForm);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLoadingContent, setLoadingContent] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleClickSection = useCallback((section: string) => {
    const headerHeight = 64;
    let scrollPosY = null;

    switch (section) {
      case 'starting':
        scrollPosY = startingRef.current
          ? startingRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      case 'mentor':
        scrollPosY = mentorRef.current
          ? mentorRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      case 'support':
        scrollPosY = supportRef.current
          ? supportRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      case 'profitable':
        scrollPosY = profitableRef.current
          ? profitableRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      default:
        break;
    }
    if (scrollPosY !== null) {
      window.scrollTo({
        top: scrollPosY,
        behavior: 'smooth'
      });
    }
  }, []);

  const type = '1';

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

  const Text = () => {
    if (type === '1') {
      return (
        <p className={styles['form-result__text']}>
          Ваш сотрудник{' '}
          <span className={styles['form-result__text_gray']}>
            Фамилия Имя Отчество, должность
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
          Фамилия Имя Отчество, должность
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

  return (
    <>
      <Header />
      <main className={stylesMain.main}>
        <div className={styles['form-result']}>
          <div className={styles['form-result__title']}>
            Уважаемый, Имя Отчество!
          </div>
          <Text />
          <Form
            isLoading={isLoading}
            isLoadingContent={isLoadingContent}
            isError={isError}
            data={data}
            onSubmit={() => console.log(123)}
            isResult={true}
          />
        </div>
      </main>
      <Footer />
      <Alert />
    </>
  );
};

export default FormResult;
