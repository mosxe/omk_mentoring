import { useState, forwardRef } from 'react';
import Modal from 'components/Modal';
import ModalContent from './components/ModalContent';
import News from './components/News';
import Image1 from 'assets/svg/Support/sup_1.svg';
import Image2 from 'assets/svg/Support/sup_2.svg';
import Image3 from 'assets/svg/Support/sup_3.svg';
import styles from './styles.module.scss';

const Support = forwardRef<HTMLDivElement>((_, ref) => {
  const [isShowModal, setShowModal] = useState<boolean>(false);

  const onShowModalHandler = () => {
    setShowModal(!isShowModal);
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
            <img className={styles.support__img} src={Image1} alt='Картинка' />
            <div className={styles.support__col}>
              <div className={styles.support__text_b}>Обучение</div>
              <div className={styles.support__text}>
                Обучение по программе развития наставников{' '}
                <span className={styles.support__link}>
                  «Модуль 1. Технология наставничества»
                </span>
                .
              </div>
              <div className={styles.support__text}>
                Если вы уже являетесь наставником, то можете сами{' '}
                <span className={styles.support__link}>подать заявку</span> на
                данное обучение.
              </div>
            </div>
          </div>
          <div className={`${styles.support__box} ${styles.support__box_m}`}>
            <img className={styles.support__img} src={Image2} alt='Картинка' />
            <div className={styles.support__col}>
              <div className={styles.support__text_b}>
                Профессиональное сообщество
              </div>
              <div className={styles.support__text}>
                Конкурсы, слеты для наставников, признание деятельности
                наставников и награждение благодарственными письмами,
                приуроченной ко дню учителя.
              </div>
              <News />
            </div>
          </div>
          <div className={styles.support__box}>
            <img className={styles.support__img} src={Image3} alt='Картинка' />
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
                .
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isShow={isShowModal} onClose={onShowModalHandler} width={1000}>
        <ModalContent onClose={onShowModalHandler} />
      </Modal>
    </>
  );
});

export default Support;
