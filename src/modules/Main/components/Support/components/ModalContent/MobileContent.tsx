import Modal, { ButtonClose } from 'components/Modal';
import styles from './styles.module.scss';

type Props = {
  onClick: (link?: string) => void;
  onClose: () => void;
  onDowloadFile: () => void;
  link: string;
};

const MobileContent = ({ onClick, onClose, onDowloadFile, link }: Props) => {
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
        <div className={styles['modal-content-mobile']}>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Обучение <strong>по профессии</strong> на рабочем месте
                (производственное обучение){' '}
                <strong>действующих сотрудников</strong> предприятия.
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>15% от тарифа</strong> (наставники из числа сотрудников
                категории G-рабочий), <strong>7% от оклада</strong> (наставники
                из числа РСС)
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <ul>
                  <li>
                    Проведение наставничества согласно отведенного количества
                    часов на производственное обучение от учебного плана
                    программы
                  </li>
                  <li>
                    Предоставление дневника производственного обучения с
                    зафиксированными результатами.
                  </li>
                  <li>Количество обучаемых не более 3-х</li>
                </ul>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплату проводит специалист корпоративного университета –
                организатор обучения
              </div>
            </div>
          </div>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                обучение <strong>по профессии</strong> на рабочем месте по
                ученическому договору{' '}
                <strong>кандидатов на трудоустройство</strong>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>25% от тарифа</strong> (наставники из числа сотрудников
                категории G-рабочий)
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <ul>
                  <li>
                    Проведение наставничества согласно отведенного количества
                    часов на производственное обучение от учебного плана
                    программы и /или чек-листа
                  </li>
                  <li>
                    Предоставление дневника или чек-листа производственного
                    обучения с зафиксированными результатами.
                  </li>
                  <li>Количество обучаемых не более 2-х</li>
                </ul>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплату проводит специалист корпоративного университета –
                организатор обучения
              </div>
            </div>
          </div>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>Стажировка по безопасным методам</strong> выполнения
                работ на рабочем месте перед допуском к самостоятельной работе
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>10% от тарифа</strong> (наставники из числа сотрудников
                категории G-рабочий)
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <ul>
                  <li>Период стажировки от 2 до 19 рабочих смен</li>
                  <li>
                    За период продления стажировки (после 19 смен) выплата не
                    производится
                  </li>
                  <li>Количество стажеров – не более 2-х</li>
                  <li>
                    Наставник (инструктор производственного обучения) –
                    сотрудник категории G-рабочий
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплату проводит руководитель подразделения на основании
                распорядительного документа
              </div>
            </div>
          </div>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Производственная практика студентов
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>200 руб./смена</strong> за очную практику<br></br>
                <br></br>
                <strong>60 руб./смена</strong> за дистанционную практику
                студентам заочного отделения.
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
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
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплату проводит специалист корпоративного университета –
                организатор обучения
              </div>
            </div>
          </div>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>Адаптация</strong> новых <strong>сотрудников</strong> из
                числа <strong>РСС</strong>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>7% от оклада</strong> (наставники из числа РСС)
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <ul>
                  <li>Выполнение плана мероприятий адаптационного периода</li>
                </ul>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплату проводит руководитель подразделения на основании
                распоряжения об установлении доплаты на период адаптации
              </div>
            </div>
          </div>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Дополнительная выплата «Эффективное наставничество»
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>5000 рублей</strong>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплата проводится за каждого обучаемого через 6 месяцев после
                присвоения квалификации, при выполнении всех условий:
                <ul>
                  <li>
                    Обученный сотрудник продолжает работать по той же профессии
                    через 6 месяцев после обучения
                  </li>
                  <li>Обученный сотрудник не имеет дисциплинарных взысканий</li>
                  <li>
                    Факт наставничества подтверждается распорядительным
                    документом
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Оплату проводит сотрудник корпоративного университета - куратор
                проекта Наставничества Голубева Ольга. Наставник или
                руководитель наставника могут самостоятельно подать заявку на
                выплату по ссылке{' '}
                <span
                  className={styles['modal-content__link']}
                  onClick={() => onClick()}
                >
                  Заявка на доп. выплату
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles['modal-content-mobile__subheader']}>
              Вид наставничества
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Факт наставничества
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Ставка оплаты наставникам
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>65 звезд</strong> в «Звездной команде»
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Критерии назначения выплаты*
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <ul>
                  <li>
                    Факт наставничества (после проведения оплаты) – вне
                    зависимости от количества обучаемых
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Как проводится выплата
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                Автоматическое начисление звезд в программе «Звездная команда»{' '}
                <span
                  className={styles['modal-content__link']}
                  onClick={() => onClick('https://omkteam.ru')}
                >
                  https://omkteam.ru
                </span>{' '}
                в течении 1 месяца после начисления основной доплаты за
                наставничество
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '12px', fontSize: '14px' }}>
          *корпоративный университет может приостановить начисление выплат (до
          выяснения обстоятельств) при выявлении следующих нарушений:
          <br></br> 1. наставничество проводилось формально или не в полной мере{' '}
          <br></br>2. в распорядительных и отчетных документах заявлен один
          наставник, а по факту обучал другой
        </div>
      </Modal.Body>
    </>
  );
};

export default MobileContent;
