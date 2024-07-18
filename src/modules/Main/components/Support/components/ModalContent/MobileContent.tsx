﻿import Modal, { ButtonClose } from 'components/Modal';
import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
  onClose: () => void;
};

const MobileContent = ({ onClick, onClose }: Props) => {
  return (
    <>
      <Modal.Header>
        <ButtonClose onClick={onClose} />
      </Modal.Header>
      <Modal.Body>
        <div className={styles['modal-content-mobile']}>
          <div className={styles['modal-content-mobile__wrapper']}>
            <div className={styles['modal-content-mobile__header']}>
              Надбавки стимулирующего характера
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Наставничество по рабочей профессии
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  7% от тарифа за период стажировки на рабочем месте перед
                  допуском к самостоятельной работе по профессии.
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                Условия начисления выплаты (при выполнении всех):
                <ul>
                  <li>Период стажировки от 2 до 19 рабочих смен</li>
                  <li>При продлении стажировки выплата не производится</li>
                  <li>Количество стажеров – не более 2-х</li>
                  <li>
                    Наставник (инструктор производственного обучения) –
                    сотрудник категории G-рабочий
                  </li>
                </ul>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  10 рублей в час за обучение по профессии на рабочем месте
                  (производственное обучение) действующих сотрудников
                  предприятия.
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  50 рублей в час за обучение по профессии на рабочем месте по
                  ученическому договору кандидатов на трудоустройство
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                Условия начисления выплаты (при выполнении всех):
                <ul>
                  <li>
                    Количество часов производственного обучения согласно
                    учебного плана программы
                  </li>
                  <li>
                    Выполнение плана мероприятий производственного обучения
                    согласно дневника производственного обучения
                  </li>
                  <li>
                    Положительный результат КПР (квалификационной пробной
                    работы)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles['modal-content-mobile__wrapper']}>
            <div className={styles['modal-content-mobile__header']}>
              Надбавки стимулирующего характера
            </div>
            <div className={styles['modal-content-mobile__subheader']}>
              Наставничество для студентов
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  10 руб. за 1 час фактически отработанного времени со студентом
                  в период практики (без трудоустройства)
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                Условия начисления выплаты:
                <ul>
                  <li>
                    Период практики обозначен в распоряжении, оформленном
                    сотрудником Корпоративного университета, но не более 3
                    месяцев
                  </li>
                  <li>
                    За одним наставником допускается закрепление не более 5
                    студентов
                  </li>
                  <li>Студень регулярно посещает практику</li>
                </ul>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  7% от оклада (тарифа) наставника за одного стажера на период
                  практики
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                Условия начисления выплаты:
                <ul>
                  <li>
                    Распоряжение оформляется сотрудником самостоятельно в
                    системе ДОКС (вид распоряжения – по личному составу, файл
                    распоряжения «Об установлении доплат и надбавок за
                    наставничество», обязательный согласующий HR-партнер)
                  </li>
                  <li>Оплачивается не более 3 месяцев практики</li>
                  <li>
                    За одним наставником допускается закрепление не более 3
                    стажеров
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles['modal-content-mobile__wrapper']}>
            <div
              className={`${styles['modal-content-mobile__header']} ${styles['modal-content-mobile__header_p']}`}
            >
              Дополнительные мотивационные выплаты
              <div className={styles['modal-content-mobile__header_s']}>
                (разовая выплата по результатам наставничества)
              </div>
              <button
                className={styles['modal-content-mobile__btn']}
                type='button'
                onClick={onClick}
              >
                Подать заявку на выплату
              </button>
            </div>
            <div className={styles['modal-content-mobile__content']}>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  3500 рублей за эффективное наставничество по основной
                  профессии.
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                Условия начисления выплаты (при выполнении всех):
                <ul>
                  <li>
                    Обученный сотрудник продолжает работать по обученной
                    профессии через 6 месяцев после обучения
                  </li>
                  <li>Обученный сотрудник не имеет дисциплинарных взысканий</li>
                  <li>
                    Факт наставничества подтверждается распорядительным
                    документом
                  </li>
                  <li>Сдача экзамена с первого раза</li>
                  <li>
                    Наставничество проходило при первичном обучении по основной
                    профессии
                  </li>
                </ul>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                <strong>
                  5000 рублей за поток (3 и более случаев наставничества)
                </strong>
              </div>
              <div className={styles['modal-content-mobile__text']}>
                Условия начисления выплаты:
                <ul>
                  <li>
                    Факт наставничества подтверждается в распорядительных
                    документах (любое или несколько) «Об организации обучения по
                    профессии: переподготовка, смежная профессия, повышение
                    разряда», «О проведении стажировки на рабочем месте (перед
                    допуском к самостоятельной работе)», «О проведении практики
                    студентов»
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </>
  );
};

export default MobileContent;
