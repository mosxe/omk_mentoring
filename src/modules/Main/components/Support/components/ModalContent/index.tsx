import Modal, { ButtonClose } from 'components/Modal';
import MobileContent from './MobileContent';
import { useWindowSize } from 'hooks/useWindowSize';
import { getLinkFile } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  link: string;
};

const ModalContent = ({ onClose, link }: Props) => {
  const [width] = useWindowSize();

  const handleClick = (linkValue?: string) => {
    if (linkValue) {
      window.open(linkValue, '_blank');
    } else {
      window.open(
        'http://corportal.vsw.ru/sites/education/Lists/List2/NewForm.aspx?Source=http://corportal.vsw.ru/sites/education/SitePages/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5.aspx',
        '_blank'
      );
    }
  };

  const onDowloadFile = () => {
    const linkFile = getLinkFile(link);
    const a = document.createElement('a');
    a.href = linkFile;
    a.download = 'Актуальные выплаты';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (width < 768) {
    return (
      <MobileContent
        onClick={handleClick}
        onDowloadFile={onDowloadFile}
        onClose={onClose}
        link={link}
      />
    );
  }
  return (
    <>
      <Modal.Header>
        <div className={styles['modal-header']}>
          {link && (
            <button
              className={styles['modal-content__btn-download']}
              type='button'
              onClick={onDowloadFile}
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
          <ButtonClose onClick={onClose} />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className={styles['modal-content']}>
          <div className={styles['modal-content__wrapper']}>
            <table className={styles['modal-content__table']}>
              <thead>
                <tr>
                  <th>Вид наставничества</th>
                  <th>Ставка оплаты наставникам</th>
                  <th>Критерии назначения выплаты*</th>
                  <th>Как проводится выплата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${styles['modal-content__border-t']}`}>
                    Обучение <strong>по профессии</strong> на рабочем месте
                    (производственное обучение){' '}
                    <strong>действующих сотрудников</strong> предприятия.
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
                    <strong>15% от тарифа</strong> (наставники из числа
                    сотрудников категории G-рабочий),{' '}
                    <strong>7% от оклада</strong> (наставники из числа РСС)
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
                    <ul>
                      <li>
                        Проведение наставничества согласно отведенного
                        количества часов на производственное обучение от
                        учебного плана программы
                      </li>
                      <li>
                        Предоставление дневника производственного обучения с
                        зафиксированными результатами.
                      </li>
                      <li>Количество обучаемых не более 3-х</li>
                    </ul>
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
                    Оплату проводит специалист корпоративного университета –
                    организатор обучения
                  </td>
                </tr>
                <tr>
                  <td className={`${styles['modal-content__border-t']}`}>
                    обучение <strong>по профессии</strong> на рабочем месте по
                    ученическому договору{' '}
                    <strong>кандидатов на трудоустройство</strong>
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
                    <strong>25% от тарифа</strong> (наставники из числа
                    сотрудников категории G-рабочий)
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
                    <ul>
                      <li>
                        Проведение наставничества согласно отведенного
                        количества часов на производственное обучение от
                        учебного плана программы и /или чек-листа
                      </li>
                      <li>
                        Предоставление дневника или чек-листа производственного
                        обучения с зафиксированными результатами.
                      </li>
                      <li>Количество обучаемых не более 3-х</li>
                    </ul>
                  </td>
                  <td>
                    Оплату проводит специалист корпоративного университета –
                    организатор обучения
                  </td>
                </tr>
                <tr>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>Стажировка по безопасным методам</strong> выполнения
                    работ на рабочем месте перед допуском к самостоятельной
                    работе
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>10% от тарифа</strong> (наставники из числа
                    сотрудников категории G-рабочий)
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <ul>
                      <li>Период стажировки от 2 до 19 рабочих смен</li>
                      <li>
                        За период продления стажировки (после 19 смен) выплата
                        не производится
                      </li>
                      <li>Количество стажеров – не более 2-х</li>
                      <li>
                        Наставник (инструктор производственного обучения) –
                        сотрудник категории G-рабочий
                      </li>
                    </ul>
                  </td>
                  <td>
                    Оплату проводит руководитель подразделения на основании
                    распорядительного документа
                  </td>
                </tr>
                <tr>
                  <td>Производственная практика студентов</td>
                  <td>
                    <strong>200 руб./смена</strong> за очную практику<br></br>
                    <br></br>
                    <strong>60 руб./смена</strong> за дистанционную практику
                    студентам заочного отделения.
                  </td>
                  <td>
                    <u>Очное обучение:</u>
                    <ul>
                      <li>Посещение практики студентом не менее 80%</li>
                      <li>Выполнение плана практики согласно задания</li>
                      <li>Не более 5 студентов за одним наставником</li>
                    </ul>
                    <u>Дистанционное обучение:</u>
                    <ul>
                      <li>
                        Представленный отчет о проведенной работе со студентом
                      </li>
                      <li>
                        Длительность не более 10 дней За одним наставником
                        закрепляется не более 5 практикантов
                      </li>
                    </ul>
                  </td>
                  <td>
                    Оплату проводит специалист корпоративного университета –
                    организатор обучения
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Адаптация</strong> новых{' '}
                    <strong>сотрудников</strong> из числа <strong>РСС</strong>
                  </td>
                  <td>
                    <strong>7% от оклада</strong> (наставники из числа РСС)
                  </td>
                  <td>
                    <ul>
                      <li>
                        Выполнение плана мероприятий адаптационного периода
                      </li>
                    </ul>
                  </td>
                  <td>
                    Оплату проводит руководитель подразделения на основании
                    распоряжения об установлении доплаты на период адаптации
                  </td>
                </tr>
                <tr>
                  <td>Дополнительная выплата «Эффективное наставничество»</td>
                  <td>
                    <strong>5000 рублей</strong>
                  </td>
                  <td>
                    Оплата проводится за каждого обучаемого через 6 месяцев
                    после присвоения квалификации, при выполнении всех условий:
                    <ul>
                      <li>
                        Обученный сотрудник продолжает работать по той же
                        профессии через 6 месяцев после обучения
                      </li>
                      <li>
                        Обученный сотрудник не имеет дисциплинарных взысканий
                      </li>
                      <li>
                        Факт наставничества подтверждается распорядительным
                        документом
                      </li>
                    </ul>
                  </td>
                  <td>
                    Оплату проводит сотрудник корпоративного университета -
                    куратор проекта Наставничества Голубева Ольга. Наставник или
                    руководитель наставника могут самостоятельно подать заявку
                    на выплату по ссылке{' '}
                    <span
                      className={styles['modal-content__link']}
                      onClick={() => handleClick()}
                    >
                      Заявка на доп. выплату
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={`${styles['modal-content__border-b']}`}>
                    Факт наставничества
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>65 звезд</strong> в «Звездной команде»
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <ul>
                      <li>
                        Факт наставничества (после проведения оплаты) – вне
                        зависимости от количества обучаемых
                      </li>
                    </ul>
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    Автоматическое начисление звезд в программе «Звездная
                    команда»{' '}
                    <span
                      className={styles['modal-content__link']}
                      onClick={() => handleClick('https://omkteam.ru')}
                    >
                      https://omkteam.ru
                    </span>{' '}
                    в течении 1 месяца после начисления основной доплаты за
                    наставничество
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: '12px' }}>
              *корпоративный университет может приостановить начисление выплат
              (до выяснения обстоятельств) при выявлении следующих нарушений:
              <br></br> 1. наставничество проводилось формально или не в полной
              мере <br></br>2. в распорядительных и отчетных документах заявлен
              один наставник, а по факту обучал другой
            </div>
          </div>
        </div>
      </Modal.Body>
    </>
  );
};

export default ModalContent;
