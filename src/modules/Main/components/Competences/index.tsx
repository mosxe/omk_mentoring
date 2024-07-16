import { getLinkFile } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  link: string;
};

const Competences = ({ link }: Props) => {
  const handleClick = (isProgram?: boolean) => {
    let linkName = 'Корпоративные компетенции наставника';
    let linkFile = getLinkFile(link);
    if (isProgram) {
      linkName = 'Программа развития наставников';
      linkFile = '33333';
    }

    const a = document.createElement('a');
    a.href = linkFile;
    a.download = linkName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className={styles.competences}>
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
              onClick={() => handleClick()}
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
        <div className={styles.competences__table}>
          <div className={styles.competences__table_wrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Компетенция</th>
                  <th>Номер</th>
                  <th>Индикаторы</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <div className={styles.competences__table_row}>
                      <span className={styles['competences__table_text-red']}>
                        1.
                      </span>
                      Ориентация на продуктивное взаимодействие
                    </div>
                  </td>
                  <td
                    className={styles['competences__table_border-b']}
                    style={{ paddingBottom: '0px' }}
                  >
                    1.1.
                  </td>
                  <td
                    className={styles['competences__table_border-b']}
                    style={{ paddingBottom: '0px' }}
                  >
                    Уделяет время знакомству и устанавливает личный контакт,
                    располагает к себе
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    1.2.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Ясно, четко, понятно объясняет материал, сохраняет
                    спокойствие и терпение
                  </td>
                </tr>
                <tr>
                  <td rowSpan={7}>
                    <div className={styles.competences__table_row}>
                      <span className={styles['competences__table_text-red']}>
                        2.
                      </span>
                      Передача знаний и опыта
                    </div>
                  </td>
                  <td className={styles['competences__table_border-b']}>
                    2.1.
                  </td>
                  <td className={styles['competences__table_border-b']}>
                    Подробно рассказывает о том, как будет проходить процесс
                    обучения, проводит необходимые инструктажи перед началом
                    работы, проговаривает ожидаемый результат
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    2.2.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Объясняет, как выполнять работу качественно
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    2.3.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Объясняет, как выполнять работу безопасно
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    2.4.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Лично показывает, как надо выполнять работу, отвечает на все
                    вопросы
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    2.5.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Оказывает помощь и поддержку при выполнении работы,
                    корректирует действия ученика при необходимости
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    2.6.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Дает возможность самостоятельно освоить навык на практике
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    2.7.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    По итогу обучения обсуждает дальнейшую самостоятельную
                    работу ученика, дает напутствие и рекомендации
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.competences__table_row}>
                      <span className={styles['competences__table_text-red']}>
                        3.
                      </span>
                      Ответственность наставника
                    </div>
                  </td>
                  <td>3.1.</td>
                  <td>
                    Сотрудник вкладывает свое время в развитие другого человека
                    (несет ответственность за качество работы как наставник,
                    прилагает дополнительные усилия для достижения результата)
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <div className={styles.competences__table_row}>
                      <span className={styles['competences__table_text-red']}>
                        4.
                      </span>
                      Саморазвитие
                    </div>
                  </td>
                  <td className={styles['competences__table_border-b']}>
                    4.1.
                  </td>
                  <td className={styles['competences__table_border-b']}>
                    Сотрудник демонстрирует желание и способность узнавать
                    что-то новое, повышать свою квалификацию и
                    производительность
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    4.2.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Использует удачный опыт коллег/руководителя для повышения
                    своего профессионального уровня
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <div className={styles.competences__table_row}>
                      <span className={styles['competences__table_text-red']}>
                        5.
                      </span>
                      Приверженность (лояльное отношение к Компании и соблюдение
                      правил)
                    </div>
                  </td>
                  <td className={styles['competences__table_border-b']}>
                    5.1.
                  </td>
                  <td className={styles['competences__table_border-b']}>
                    Сотрудник транслирует позитивное отношение к Компании
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    5.2.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Соблюдает требования к качеству выполняемых работ
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    5.3.
                  </td>
                  <td
                    className={`${styles['competences__table_border-b']} ${styles['competences__table_border-t']} ${styles['competences__table_padding-a']}`}
                  >
                    Демонстрирует безопасное поведение
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.competences__table_row}>
                      <span className={styles['competences__table_text-red']}>
                        6.
                      </span>
                      Мотивация / ориентация на людей/ установка "пролюдей"
                    </div>
                  </td>
                  <td>6.1.</td>
                  <td>
                    Готовность прикладывать усилия к обучению других, готов
                    делиться опытом, передавать знания, ориентация "на людей"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.competences__text}>
          Освоить или прокачать компетенции «Ориентация на продуктивное
          взаимодействие» и «Передача знаний и опыта» наставникам помогает
          корпоративный университет в{' '}
          <span
            className={styles.competences__link}
            onClick={() => handleClick(true)}
          >
            программе развития наставников
          </span>
        </div>
      </div>
    </section>
  );
};

export default Competences;
