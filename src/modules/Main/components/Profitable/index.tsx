import Image1 from 'assets/svg/Profitable/prof_1.svg';
import Image2 from 'assets/svg/Profitable/prof_2.svg';
import Image3 from 'assets/svg/Profitable/prof_3.svg';
import styles from './styles.module.scss';

const Profitable = () => {
  return (
    <section className={styles.profitable}>
      <h2 className={styles.profitable__title}>
        Быть наставником{' '}
        <span className={styles.profitable__title_red}>выгодно</span>
      </h2>
      <div className={styles.profitable__wrapper}>
        <div className={styles.profitable__card}>
          <img
            className={styles.profitable__card_img}
            src={Image1}
            alt='Картинка'
          />
          <div>
            <div className={styles.profitable__card_title}>
              Обучая других – вы{' '}
              <span className={`${styles['profitable__card_title-red']}`}>
                развиваетесь
              </span>{' '}
              сами
            </div>
            <div className={styles.profitable__card_text}>
              Особо любознательные ученики задают сложные вопросы, на которые
              ответить можно не сразу — тогда вы вместе разбираетесь и находите
              ответ. Так наставник постоянно углубляет свои знания и
              развивается.
            </div>
          </div>
        </div>
        <div className={styles.profitable__card}>
          <img
            className={styles.profitable__card_img}
            src={Image2}
            alt='Картинка'
          />
          <div>
            <div className={styles.profitable__card_title}>
              <span className={`${styles['profitable__card_title-red']}`}>
                Признание
              </span>{' '}
              со стороны руководства, коллег и компании в целом
            </div>
            <div className={styles.profitable__card_text}>
              Вы являетесь не только профессионалом своего дела, но и помогаете
              новичкам быстро и эффективно влиться в коллектив и освоить
              профессию. Этот вклад повышает ваш профессиональный авторитет,
              укрепляет доверие благодаря инвестициям в успех других сотрудников
              и в себя.
            </div>
          </div>
        </div>
        <div className={styles.profitable__card}>
          <img
            className={styles.profitable__card_img}
            src={Image3}
            alt='Картинка'
          />
          <div>
            <div className={styles.profitable__card_title}>
              Возможность получать{' '}
              <span className={`${styles['profitable__card_title-red']}`}>
                дополнительный доход
              </span>
            </div>
            <div className={styles.profitable__card_text}>
              Доплата определяется в виде установленной суммы в зависимости от
              вида привлечения сотрудника к наставничеству. Более подробная
              информация о видах и условиях начисления доплаты{' '}
              <span className={styles.profitable__card_link}>здесь.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profitable;
