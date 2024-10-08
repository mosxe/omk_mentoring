﻿import { useState, forwardRef } from 'react';
import Modal from 'components/Modal';
import Popap from 'components/Popap';
import Form from 'components/Form';
import { PopapAlert } from 'components/Popap';
import { toast } from 'react-toastify';
import ModalContent from './components/ModalContent';
import News from './components/News';
import Image1 from 'assets/svg/Support/sup_1.svg';
import Image2 from 'assets/svg/Support/sup_2.svg';
import Image3 from 'assets/svg/Support/sup_3.svg';
import { ResponseForm, New } from 'types';
import { getForm, postFormData } from 'services';
import { transformData, getLink } from 'helpers';
import { initialForm } from 'services/constants';
import styles from './styles.module.scss';

type Props = {
  news: New[];
  link: string;
  linkFile: string;
  text: string;
};

const Support = forwardRef<HTMLDivElement, Props>(
  ({ news, link, linkFile, text }, ref) => {
    const [isShowModal, setShowModal] = useState<boolean>(false);
    const [data, setData] = useState<ResponseForm>(initialForm);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isLoadingContent, setLoadingContent] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const [isShowPopap, setShowPopap] = useState<boolean>(false);
    const [isShowAlert, setShowAlert] = useState<boolean>(false);

    const onShowModalHandler = () => {
      setShowModal(!isShowModal);
    };

    const handleHref = () => {
      const linkHref = getLink(link);
      window.open(linkHref, '_blank');
    };

    const onShowPopap = () => {
      setShowPopap(!isShowPopap);
    };

    const handleClick = () => {
      setShowAlert(false);
      setShowPopap(!isShowPopap);
      if (!data.data.length) {
        setLoading(true);
        getForm('person_training')
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

    const onSubmit = (dataForm: Record<string, string | boolean>) => {
      setLoadingContent(true);
      const formData = transformData(dataForm);
      postFormData(formData, 'person_training')
        .then((res) => {
          if (res.isError) {
            setShowPopap(false);
            toast('Произошла ошибка');
          } else {
            setShowAlert(true);
          }
        })
        .catch((e) => {
          console.log(e);
          setShowPopap(false);
          toast('Произошла ошибка');
        })
        .finally(() => setLoadingContent(false));
    };

    return (
      <>
        <section className={styles.support} ref={ref}>
          <div className={styles.support__wrapper}>
            <h2 className={styles.support__title}>
              <span className={styles.support__title_red}>
                Поддержка наставников<br></br>
              </span>{' '}
              со стороны корпоративного университета
            </h2>
            <div className={styles.support__box}>
              <img
                className={styles.support__img}
                src={Image1}
                alt='Картинка'
              />
              <div className={styles.support__col}>
                <div className={styles.support__text_b}>Обучение</div>
                <div className={styles.support__text}>
                  Подать заявку на обучение по программе развития наставников
                  можно в каталоге возможностей{' '}
                  <span className={styles.support__link} onClick={handleHref}>
                    «Технология наставничества. Модуль 1»
                  </span>
                  .
                </div>
                <div className={styles.support__text}>
                  Если вы уже являетесь наставником, то можете сами{' '}
                  <span className={styles.support__link} onClick={handleClick}>
                    подать заявку
                  </span>{' '}
                  на данное обучение.
                </div>
              </div>
            </div>
            <div className={`${styles.support__box} ${styles.support__box_m}`}>
              <img
                className={styles.support__img}
                src={Image2}
                alt='Картинка'
              />
              <div className={styles.support__col}>
                <div className={styles.support__text_b}>
                  Профессиональное сообщество
                </div>
                <div
                  className={`${styles.support__text} ${styles.support__text_m}`}
                >
                  Конкурсы, слеты для наставников, признание деятельности
                  наставников и награждение благодарственными письмами,
                  приуроченной ко дню учителя.
                </div>
                <News data={news} />
              </div>
            </div>
            <div className={styles.support__box}>
              <img
                className={styles.support__img}
                src={Image3}
                alt='Картинка'
              />
              <div className={styles.support__col}>
                <div className={styles.support__text_b}>Доплаты</div>
                <div className={styles.support__text}>
                  Стимулирующие{' '}
                  <span
                    className={styles.support__link}
                    onClick={onShowModalHandler}
                  >
                    выплаты и доплаты
                  </span>
                  {text}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal isShow={isShowModal} onClose={onShowModalHandler} width={1000}>
          <ModalContent onClose={onShowModalHandler} link={linkFile} />
        </Modal>
        <Popap isShow={isShowPopap} onClose={onShowPopap} width={750}>
          {!isShowAlert ? (
            <Form
              title='Заявка на тренинг “Технология наставничества”'
              isLoading={isLoading}
              isLoadingContent={isLoadingContent}
              isError={isError}
              data={data}
              onSubmit={onSubmit}
              isRequest
            />
          ) : (
            <PopapAlert type='mentor' />
          )}
        </Popap>
      </>
    );
  }
);

export default Support;
