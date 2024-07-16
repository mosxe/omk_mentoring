import { Contact } from 'types';
import { getLink } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: Contact;
};

const Contacts = ({ data }: Props) => {
  const linkPhoto = data.photo ? getLink(data.photo) : '';
  const { fullname, position_name, email, phone, phone_mobile } = data;

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
            <span className={styles.contacts__text}>{fullname}</span>
            <span className={styles.contacts__subtext}>{position_name}</span>
            <a
              className={styles.contacts__email}
              type='email'
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
          <div
            className={`${styles.contacts__col} ${styles.contacts__col_center}`}
          >
            <span className={styles.contacts__text}>Телефоны</span>
            {phone && <span className={styles.contacts__cont}>{phone}</span>}
            {phone_mobile && (
              <span className={styles.contacts__cont}>{phone_mobile}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
