import Image from 'assets/images/Reference/reference.jpg';
import styles from './styles.module.scss';

const Reference = () => {
  return (
    <section className={styles.reference}>
      <div className={styles.reference__wrapper}>
        <div className={styles.reference__img}>
          <img src={Image} alt='Картинка' />
        </div>
        <div className={styles.reference__content}>
          <h2 className={styles.reference__title}>
            <span className={styles.reference__title_red}>Справка</span>
          </h2>
          <p className={styles.reference__text}>
            Ежегодно к наставнической деятельности на производстве привлекаются
            порядка 3000 сотрудников – и это только официальные данные. Случаи
            неформального наставничества посчитать достаточно сложно.
          </p>
          <br></br>
          <p className={styles.reference__text}>
            В компании есть единое определение Наставничества - это{' '}
            <span className={styles.reference__text_bold}>
              отношение между наставником и стажером
            </span>
            , в рамках которых происходит передача знаний и опыта.
          </p>
          <br></br>
          <p className={styles.reference__text}>
            В компнании сформулировано единое определение "Наставничества" - это
            отношение между наставником и стажером, в рамках которых происходит
            передача знаний и опыта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reference;
