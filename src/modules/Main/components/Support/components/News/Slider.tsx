import styles from './styles.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider__img}>
          <img
            src='https://image.fonwall.ru/o/js/667ffeae5870908db5e31b1b.jpeg?auto=compress&fit=resize&w=1200&display=large&domain=img3.fonwall.ru'
            alt='Картинка'
          />
        </div>
        <span className={styles.slider__title}>4 июня 2024</span>
        <span className={styles.slider__text}>
          Определили лучших работников выксунского завода ОМК
        </span>
        <button className={styles.slider__btn} type='button'>
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
      </div>
    </div>
  );
};

export default Slider;
