import { useWindowSize } from 'hooks/useWindowSize';
import HeaderImage from 'assets/images/header.png';
import HeaderImageMobile from 'assets/images/header_mobile.png';
import HeaderLogo from 'assets/images/header_logo.png';
import styles from './styles.module.scss';

const Header = () => {
  const [width] = useWindowSize();
  const srcImage = width < 768 ? HeaderImageMobile : HeaderImage;

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__image}>
          <img src={srcImage} alt='Картинка' />
        </div>
        <div className={styles.header__container}>
          <img
            className={styles.header__icon}
            src={HeaderLogo}
            alt='Картинка'
          />
          <h1 className={styles.header__title}>
            Институт{' '}
            <span className={styles.header__title_red}>наставничества</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
