import Image1 from 'assets/svg/Information/icon_1.svg';
import Image2 from 'assets/svg/Information/icon_2.svg';
import Image3 from 'assets/svg/Information/icon_3.svg';
import Image4 from 'assets/svg/Information/icon_4.svg';
import styles from './styles.module.scss';

type Props = {
  onClickSection: (section: string) => void;
};

const Information = ({ onClickSection }: Props) => {
  return (
    <section className={styles.information}>
      <h2 className={styles.information__title}>
        Информация на этой странице{' '}
        <span className={styles.information__title_red}>будет полезна</span>
      </h2>
      <div className={styles.information__wrapper}>
        <div className={styles.information__card}>
          <img
            className={styles.information__card_img}
            src={Image1}
            alt='Картинка'
          />
          <div className={styles.information__card_text}>
            Действующим наставникам
          </div>
        </div>
        <div className={styles.information__card}>
          <img
            className={styles.information__card_img}
            src={Image2}
            alt='Картинка'
          />
          <div className={styles.information__card_text}>
            Руководителям наставников
          </div>
        </div>
        <div className={styles.information__card}>
          <img
            className={styles.information__card_img}
            src={Image3}
            alt='Картинка'
          />

          <div className={styles.information__card_text}>
            Сотрудникам, которые хотят{' '}
            <span
              className={styles.information__card_link}
              onClick={() => onClickSection('starting')}
            >
              попробовать себя в роли наставника
            </span>
          </div>
        </div>
        <div className={styles.information__card}>
          <img
            className={styles.information__card_img}
            src={Image4}
            alt='Картинка'
          />
          <div className={styles.information__card_text}>
            Сотрудникам, которые хотят{' '}
            <span className={styles.information__card_link}>
              оставить отзыв о своем наставнике
            </span>{' '}
            по результату наставничества
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
