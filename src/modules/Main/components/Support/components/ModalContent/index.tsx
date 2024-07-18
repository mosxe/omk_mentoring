import Modal, { ButtonClose } from 'components/Modal';
import MobileContent from './MobileContent';
import { useWindowSize } from 'hooks/useWindowSize';
import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
};

const ModalContent = ({ onClose }: Props) => {
  const [width] = useWindowSize();

  const handleClick = () => {
    window.open(
      'http://corportal.vsw.ru/sites/education/Lists/List2/NewForm.aspx?Source=http://corportal.vsw.ru/sites/education/SitePages/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5.aspx',
      '_blank'
    );
  };

  if (width < 768) {
    return <MobileContent onClick={handleClick} onClose={onClose} />;
  }
  return (
    <>
      <Modal.Header>
        <ButtonClose onClick={onClose} />
      </Modal.Header>
      <Modal.Body>
        <div className={styles['modal-content']}>
          <div className={styles['modal-content__wrapper']}>
            <table className={styles['modal-content__table']}>
              <thead>
                <tr>
                  <th colSpan={2}>Надбавки стимулирующего характера</th>
                  <th>
                    <div className={styles['modal-content__col']}>
                      <span>Дополнительные мотивационные выплаты</span>
                      <span className={styles['modal-content__text']}>
                        (разовая выплата по результатам<br></br> наставничества)
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles['modal-content__text_l']}>
                    Наставничество по рабочей профессии
                  </td>
                  <td className={styles['modal-content__text_l']}>
                    Наставничество для студентов
                  </td>
                  <td>
                    <div className={styles['modal-content__col']}>
                      <button
                        className={styles['modal-content__btn']}
                        type='button'
                        onClick={handleClick}
                      >
                        Подать заявку на выплату
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>
                      7% от тарифа за период стажировки на рабочем месте перед
                      допуском к самостоятельной работе по профессии.
                    </strong>
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>
                      10 руб. за 1 час фактически отработанного времени со
                      студентом в период практики (без трудоустройства)
                    </strong>
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>
                      3500 рублей за эффективное наставничество по основной
                      профессии.
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td className={`${styles['modal-content__border-t']}`}>
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
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
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
                  </td>
                  <td className={`${styles['modal-content__border-t']}`}>
                    Условия начисления выплаты (при выполнении всех):
                    <ul>
                      <li>
                        Обученный сотрудник продолжает работать по обученной
                        профессии через 6 месяцев после обучения
                      </li>
                      <li>
                        Обученный сотрудник не имеет дисциплинарных взысканий
                      </li>
                      <li>
                        Факт наставничества подтверждается распорядительным
                        документом
                      </li>
                      <li>Сдача экзамена с первого раза</li>
                      <li>
                        Наставничество проходило при первичном обучении по
                        основной профессии
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>
                      10 рублей в час за обучение по профессии на рабочем месте
                      (производственное обучение) действующих сотрудников
                      предприятия.
                    </strong>
                    <br></br>
                    <br></br>
                    <strong>
                      50 рублей в час за обучение по профессии на рабочем месте
                      по ученическому договору кандидатов на трудоустройство
                    </strong>
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>
                      7% от оклада (тарифа) наставника за одного стажера на
                      период практики
                    </strong>
                  </td>
                  <td className={`${styles['modal-content__border-b']}`}>
                    <strong>
                      5000 рублей за поток (3 и более случаев наставничества)
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles['modal-content__border-t']} ${styles['modal-content__border-b']}`}
                  >
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
                        работы).
                      </li>
                    </ul>
                  </td>
                  <td
                    className={`${styles['modal-content__border-t']} ${styles['modal-content__border-b']}`}
                  >
                    Условия начисления выплаты:
                    <ul>
                      <li>
                        Распоряжение оформляется сотрудником самостоятельно в
                        системе ДОКС (вид распоряжения – по личному составу,
                        файл распоряжения «Об установлении доплат и надбавок за
                        наставничество», обязательный согласующий HR-партнер)
                      </li>
                      <li>Оплачивается не более 3 месяцев практики</li>
                      <li>
                        За одним наставником допускается закрепление не более 3
                        стажеров.
                      </li>
                    </ul>
                  </td>
                  <td
                    className={`${styles['modal-content__border-t']} ${styles['modal-content__border-b']}`}
                  >
                    Условия начисления выплаты:
                    <ul>
                      <li>
                        Факт наставничества подтверждается в распорядительных
                        документах (любое или несколько) «Об организации
                        обучения по профессии: переподготовка, смежная
                        профессия, повышение разряда», «О проведении стажировки
                        на рабочем месте (перед допуском к самостоятельной
                        работе)», «О проведении практики студентов».
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal.Body>
    </>
  );
};

export default ModalContent;
