import { useState, forwardRef } from 'react';
import Popap from 'components/Popap';
import Form from 'components/Form';
// import PopapAlert from '../Program/PopapAlert';
import { toast } from 'react-toastify';
import Image1 from 'assets/svg/Starting/number_1.svg';
import Image2 from 'assets/svg/Starting/number_2.svg';
import Image3 from 'assets/svg/Starting/number_3.svg';
import { ResponseForm } from 'types';
import { getFormMentor } from 'services';
import { initialForm } from 'services/constants';
import styles from './styles.module.scss';

const Starting = forwardRef<HTMLDivElement>((_, ref) => {
  const [data, setData] = useState<ResponseForm>(initialForm);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  const [isShowAlert, setShowAlert] = useState<boolean>(false);

  const onShowPopap = () => {
    setShowPopap(!isShowPopap);
  };

  const handleClick = () => {
    setShowAlert(false);
    setShowPopap(!isShowPopap);
    if (!data.data.length) {
      setLoading(true);
      getFormMentor()
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
    }
  };

  const onCloseForm = (isErrorFetch: boolean) => {
    if (isErrorFetch) {
      setShowPopap(false);
      toast('Произошла ошибка');
    } else {
      setShowAlert(true);
    }
  };

  const onSubmit = (dataForm: Record<string, string | boolean>) => {
    console.log(dataForm);
    // setLoadingPost(true);
    // const formData = transformData(dataForm, data.data);
    // postFormData(formData)
    //   .then((res) => {
    //     onClose(res.isError);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     onClose(true);
    //   })
    //   .finally(() => setLoadingPost(false));
  };

  return (
    <>
      <section className={styles.starting} ref={ref}>
        <div className={styles.starting__wrapper}>
          <h2 className={styles.starting__title}>
            <span className={styles.starting__title_red}>Начните</span> свой
            путь наставника уже сегодня
          </h2>
          <div className={styles.starting__container}>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image1}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Заполните анкету
                </div>
                <div
                  className={`${styles.starting__card_text} ${styles['starting__card_text-center']}`}
                >
                  Нажмите на кнопку, заполните и отправьте анкету куратору
                </div>
              </div>
              <button
                className={styles.starting__card_btn}
                type='button'
                onClick={handleClick}
              >
                Заполнить анкету
              </button>
            </div>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image2}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Ждите письма от куратора проекта
                </div>
                <div className={styles.starting__card_text}>
                  Анкету получит куратор проекта, запросит рекомендаций от
                  руководителя и пригласит вас на{' '}
                  <span className={styles.starting__card_link}>
                    программу развития наставников «Модуль 1. Технология
                    наставничества»
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image3}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Приходите на программу развития для наставников
                </div>
                <div className={styles.starting__card_text}>
                  <span>«Модуль 1. Технология наставничества»</span>
                  <br></br>
                  <br></br>
                  <span>
                    Вашему руководителю придет распоряжение об организации
                    данного обучения. Он должен вас уведомить об этом
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popap isShow={isShowPopap} onClose={onShowPopap} width={750}>
        {!isShowAlert ? (
          <Form
            title='Хочу стать наставником'
            isLoading={isLoading}
            isError={isError}
            data={data}
            onClose={onCloseForm}
            onSubmit={onSubmit}
          />
        ) : (
          <span>asdasdsadasda</span>
        )}
      </Popap>
    </>
  );
});

export default Starting;
