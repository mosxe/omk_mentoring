import { forwardRef } from 'react';
import Image from 'assets/images/Mentor/mentor.jpg';
import { getLinkFile } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  link: string;
};

const Mentor = forwardRef<HTMLDivElement, Props>(({ link }, ref) => {
  const handleClick = () => {
    const linkFile = getLinkFile(link);
    const a = document.createElement('a');
    a.href = linkFile;
    a.download = 'Дополнительные компетенции';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className={styles.mentor} ref={ref}>
      <div className={styles.mentor__wrapper}>
        <div className={styles.mentor__content}>
          <h2 className={styles.mentor__title}>
            Наставник на производстве —{' '}
            <span className={styles.mentor__title_red}>кто он</span>
          </h2>
          <div className={styles.mentor__container}>
            <p className={styles.mentor__text}>
              Это высококвалифицированный специалист или опытный работник
              компании
            </p>
            <ul>
              <li className={styles.mentor__text}>
                совмещает свою основную трудовую деятельность на предприятии с
                наставничеством
              </li>
              <li className={styles.mentor__text}>
                имеет стаж работы по соответствующей профессии/должности не
                менее одного года
              </li>
              <li className={styles.mentor__text}>
                передаёт знания и опыт на основании утверждённой программы /
                учебного плана (для рабочих), задания на практику (для
                студентов)
              </li>
            </ul>
            <p className={styles.mentor__text}>
              Помимо этого, наставник должен обладать дополнительными{' '}
              <span className={styles.mentor__link} onClick={handleClick}>
                компетенциям
              </span>
            </p>
          </div>
        </div>
        <div className={styles.mentor__img}>
          <img src={Image} alt='Картинка' />
        </div>
      </div>
    </section>
  );
});

export default Mentor;
