import Image1 from 'assets/svg/Knowledge/icon_1.svg';
import Image2 from 'assets/svg/Knowledge/icon_2.svg';
import Image3 from 'assets/svg/Knowledge/icon_3.svg';
import styles from './styles.module.scss';

const Knowledge = () => {
  return (
    <section className={styles.knowledge}>
      <h2 className={styles.knowledge__title}>
        На этой странице{' '}
        <span className={styles.knowledge__title_red}>Вы узнаете:</span>
      </h2>
      <div className={styles.knowledge__wrapper}>
        <div className={styles.knowledge__card}>
          <img
            className={styles.knowledge__card_img}
            src={Image1}
            alt='Картинка'
          />
          <div className={styles.knowledge__card_text}>
            Кто может{' '}
            <span className={styles.knowledge__card_link}>
              стать наставником
            </span>
          </div>
        </div>
        <div className={styles.knowledge__card}>
          <img
            className={styles.knowledge__card_img}
            src={Image2}
            alt='Картинка'
          />
          <div className={styles.knowledge__card_text}>
            Какая <span className={styles.knowledge__card_link}>поддержка</span>{' '}
            и инструменты имеются для наставников
          </div>
        </div>
        <div className={styles.knowledge__card}>
          <img
            className={styles.knowledge__card_img}
            src={Image3}
            alt='Картинка'
          />
          <div className={styles.knowledge__card_text}>
            Почему быть наставником{' '}
            <span className={styles.knowledge__card_link}>выгодно</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
