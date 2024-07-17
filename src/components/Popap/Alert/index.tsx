import Image1 from 'assets/svg/Alert/alert_1.svg';
import Image2 from 'assets/svg/Alert/alert_2.svg';
import styles from './styles.module.scss';

type Props = {
  type: 'mentor' | 'training';
  isShowText?: boolean;
};

const PopapAlert = ({ type, isShowText = true }: Props) => {
  const srcImage = type === 'mentor' ? Image1 : Image2;

  return (
    <div className={styles['popap-alert']}>
      <div className={styles['popap-alert__header']}>
        <img
          className={styles['popap-alert__image']}
          src={srcImage}
          alt='Картинка'
        />
        <h2 className={styles['popap-alert__title']}>
          Спасибо за заполнение формы!<br></br>Ваши ответы отправлены!
        </h2>
      </div>
      {isShowText && (
        <div className={styles['popap-alert__content']}>
          <span className={styles['popap-alert__text']}>
            В течение 7 рабочих дней Вы получите информационное письмо на
            электронную почту
          </span>
        </div>
      )}
    </div>
  );
};

export default PopapAlert;
