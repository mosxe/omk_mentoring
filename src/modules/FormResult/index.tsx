import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Alert from 'components/Alert';
import Modal, { ButtonClose } from 'components/Modal';
import Form from 'components/Form';
import Popap from 'components/Popap';
import { PopapAlert } from 'components/Popap';
import SearchCollabs from './components/SearchCollabs';
import { toast } from 'react-toastify';
import { ResponseFormResult } from 'types';
import { getFormResult, postFormData, changeManager } from 'services';
import { initialFormResult } from 'services/constants';
import { transformData } from 'helpers';
import stylesMain from 'modules/Main/styles.module.scss';
import styles from './styles.module.scss';

const FormResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ResponseFormResult>(initialFormResult);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLoadingContent, setLoadingContent] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  const [isDoneForm, setDoneForm] = useState<boolean>(false);
  const [isDoneChange, setDoneChange] = useState<boolean>(false);
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [selectedManagerValue, setSelectedManagerValue] = useState<
    string | number
  >('');

  const onShowPopap = () => {
    setShowPopap(!isShowPopap);
    if (isShowPopap) {
      navigate('/omk_mentoring');
    }
  };

  const onShowModalHandler = () => {
    setShowModal(!isShowModal);
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

  const onChangeManager = () => {
    setLoadingContent(true);
    onShowModalHandler();
    changeManager(id ?? '', selectedManagerValue)
      .then((res) => {
        if (res.isError) {
          toast('Произошла ошибка');
        } else {
          setDoneChange(true);
          setShowPopap(true);
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
      if (data.is_agent) {
        return (
          <p className={styles['form-result__text']}>
            Просим Вас заполнить небольшую анкету о сотруднике{' '}
            <strong>
              {data.person.lastname} {data.person.firstname}{' '}
              {data.person.middlename}, {data.person.position}
            </strong>{' '}
            чтобы оценить его потенциал в роли наставника.
          </p>
        );
      }
      return (
        <p className={styles['form-result__text']}>
          Ваш сотрудник{' '}
          <strong>
            {data.person.lastname} {data.person.firstname}{' '}
            {data.person.middlename}, {data.person.position}
          </strong>
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
        <strong>
          {data.person.lastname} {data.person.firstname}{' '}
          {data.person.middlename}, {data.person.position}
        </strong>
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
              {dearPerson} {data.collaborator.firstname}{' '}
              {data.collaborator.middlename}!
            </div>
            <p className={styles['form-result__text']}>
              Вы заполнили анкету по сотруднику{' '}
              <strong>
                {data.person.lastname} {data.person.firstname}{' '}
                {data.person.middlename}, {data.person.position}
              </strong>
              .
            </p>
          </div>
        </main>
        <Footer />
        <Popap isShow={isShowPopap} onClose={onShowPopap} width={750}>
          <PopapAlert
            type={data.type === 'person_mentor' ? 'mentor' : 'training'}
            isShowText={false}
            title={`Вы заполнили анкету по сотруднику ${data.person.lastname} ${data.person.firstname} ${data.person.middlename}, ${data.person.position}`}
          />
        </Popap>
      </>
    );
  }

  if (isDoneChange) {
    return (
      <>
        <Header />
        <main className={stylesMain.main}>
          <div className={styles['form-result']}>
            <div className={styles['form-result__title']}>
              {dearPerson} {data.collaborator.firstname}{' '}
              {data.collaborator.middlename}!
            </div>
            <p className={styles['form-result__text']}>
              Оценка сотрудника успешно делегирована указанному руководителю.
            </p>
          </div>
        </main>
        <Footer />
        <Popap isShow={isShowPopap} onClose={onShowPopap} width={750}>
          <PopapAlert
            type={data.type === 'person_mentor' ? 'mentor' : 'training'}
            isShowText={false}
            title='Оценка сотрудника успешно делегирована указанному руководителю.'
          />
        </Popap>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={stylesMain.main}>
        <div className={styles['form-result']}>
          <div className={styles['form-result__title']}>
            {dearPerson} {data.collaborator.firstname}{' '}
            {data.collaborator.middlename}!
          </div>
          <Text />
          <Form
            isLoading={isLoading}
            isLoadingContent={isLoadingContent}
            isError={isError}
            data={data}
            onSubmit={onSubmit}
            onShowModal={onShowModalHandler}
            isResult={true}
          />
        </div>
      </main>
      <Footer />
      <Alert />
      {(data.type === 'manager_mentor' || data.type === 'manager_training') && (
        <Modal isShow={isShowModal} onClose={onShowModalHandler} width={800}>
          <Modal.Header>
            <div className={styles['form-result__modal-header']}>
              <h2>Изменить руководителя</h2>
              <ButtonClose onClick={onShowModalHandler} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className={styles['form-result__modal-wrapper']}>
              <SearchCollabs
                value={selectedManagerValue}
                onClick={setSelectedManagerValue}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className={styles['form-result__modal-footer']}>
              <button
                type='button'
                className={`${styles['form-result__modal-btn']} ${styles['form-result__modal-btn_cancel']}`}
                onClick={onShowModalHandler}
              >
                Отменить
              </button>
              <button
                type='button'
                className={`${styles['form-result__modal-btn']} ${styles['form-result__modal-btn_apply']}`}
                onClick={onChangeManager}
              >
                Сохранить
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
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
