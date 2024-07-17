import { New } from 'types';
import { getLink } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: New;
};

const Slider = ({ data }: Props) => {
  const { title, text, link } = data;
  const srcImage = getLink(data.image);

  const handleClick = () => {
    const linkNew = getLink(link);
    window.open(linkNew, '_blank');
  };

  const classNameText = link
    ? styles.slider__text
    : `${styles.slider__text} ${styles.slider__text_m}`;

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider__container}>
          <div className={styles.slider__img}>
            <img src={srcImage} alt='Картинка' />
          </div>
          <span className={styles.slider__title}>{title}</span>
          <span className={classNameText}>{text}</span>
        </div>
        {link && (
          <button
            onClick={handleClick}
            className={styles.slider__btn}
            type='button'
          >
            Читать
            <svg
              width='30'
              height='5'
              viewBox='0 0 30 5'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 5H30L20.5932 0'
                stroke='#E41910'
                strokeWidth='0.938889'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
