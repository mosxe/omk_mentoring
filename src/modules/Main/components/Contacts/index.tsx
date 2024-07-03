import { Contact } from 'types';
// import { getLink } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: Contact;
};

const Contacts = () => {
  // const Contacts = ({ data }: Props) => {
  // const linkPhoto = data.photo ? getLink(data.photo) : '';
  const linkPhoto =
    'https://yt3.googleusercontent.com/ytc/AGIKgqO4keTzPnSsB4Oo4tnNAaWuoGbN_7eQNk3QrbkYow=s900-c-k-c0x00ffffff-no-rj';
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__wrapper}>
        <div className={styles.contacts__row}>
          <h2 className={styles.contacts__title}>
            <span className={styles.contacts__title_red}>Контакты</span>
          </h2>
          <div className={styles.contacts__desc}>
            Остались вопросы или есть предложения? Обратитесь к куратору проекта
            по развитию наставников Голубевой Ольге любым удобным для Вас
            способом
          </div>
        </div>
        <div className={styles.contacts__container}>
          {linkPhoto && (
            <img className={styles.contacts__img} src={linkPhoto} alt='Фото' />
          )}
          <div className={styles.contacts__col}>
            <span className={styles.contacts__text}>Голубева Ольга</span>
            <span className={styles.contacts__subtext}>Куратор проекта </span>
            <a
              className={styles.contacts__email}
              type='email'
              href={`mailto:GOLUBEVA_ON@vsw.ru`}
            >
              GOLUBEVA_ON@vsw.ru
            </a>
            {/* <span className={styles.contacts__text}>{data.fullname}</span>
            <span className={styles.contacts__desc}>{data.position_name}</span> */}
            {/* <a
              className={styles.contacts__email}
              type='email'
              href={`mailto:${data.email}`}
            >
              {data.email}
            </a> */}
          </div>
          <div
            className={`${styles.contacts__col} ${styles.contacts__col_center}`}
          >
            <span className={styles.contacts__text}>Телефоны</span>
            <span className={styles.contacts__cont}>829-0322</span>
            <span className={styles.contacts__cont}>8-9107917160</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
