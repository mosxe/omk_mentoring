import { forwardRef } from 'react';
import { getLinkFile, getLink } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  link: string;
  linkHref: string;
  image: string;
};

const Competences = forwardRef<HTMLDivElement, Props>(
  ({ link, linkHref, image }, ref) => {
    const handleClick = () => {
      const linkFile = getLinkFile(link);
      const a = document.createElement('a');
      a.href = linkFile;
      a.download = 'Корпоративные компетенции наставника';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    const handleHref = () => {
      const link = getLink(linkHref);
      window.open(link, '_blank');
    };

    return (
      <section className={styles.competences} ref={ref}>
        <div className={styles.competences__wrapper}>
          <div className={styles.competences__container}>
            <h2 className={styles.competences__title}>
              <span className={styles.competences__title_red}>
                Корпоративные компетенции
              </span>{' '}
              наставника
            </h2>
            {link && (
              <button
                className={styles.competences__btn}
                type='button'
                onClick={handleClick}
              >
                <span>Скачать</span>
                <svg
                  width='13'
                  height='14'
                  viewBox='0 0 13 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.5 7.16667L6.5 10.7941L10.5 7.20181M6.5 1.16667V10.5952M0.5 13.1667H12.5'
                    stroke='#8D8E91'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            )}
          </div>
          <div className={styles.competences__image}>
            <img src={image} alt='Модель компетенций наставника ОМК' />
          </div>
          <div className={styles.competences__text}>
            Освоить или прокачать компетенции «Ориентация на продуктивное
            взаимодействие» и «Передача знаний и опыта» наставникам помогает
            корпоративный университет в{' '}
            <span className={styles.competences__link} onClick={handleHref}>
              программе развития наставников
            </span>
          </div>
        </div>
      </section>
    );
  }
);

export default Competences;
