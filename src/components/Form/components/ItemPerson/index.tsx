import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Poll, Collaborator } from 'types';
import { formattingCode } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: Poll;
  person: Collaborator;
};

const ItemPerson = ({ data, person }: Props) => {
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(data.id, data.entries[0].id);
  }, []);

  return (
    <div className={styles['item-person']}>
      <div className={styles['item-person__row']}>
        <span className={styles['item-person__title']}>Фамилия</span>
        <div className={styles['item-person__value']}>{person.lastname}</div>
      </div>
      <div className={styles['item-person__row']}>
        <span className={styles['item-person__title']}>Имя</span>
        <div className={styles['item-person__value']}>{person.firstname}</div>
      </div>
      <div className={styles['item-person__row']}>
        <span className={styles['item-person__title']}>Отчество</span>
        <div className={styles['item-person__value']}>{person.middlename}</div>
      </div>
      <div className={styles['item-person__wrapper']}>
        <div className={styles['item-person__row']}>
          <span
            className={`${styles['item-person__title']} ${styles['item-person__title_l']}`}
          >
            Табельный номер
          </span>
          <div
            className={`${styles['item-person__value']} ${styles['item-person__value_round']}`}
          >
            {formattingCode(person.tab_number)}
          </div>
        </div>
        <div className={styles['item-person__row']}>
          <span
            className={`${styles['item-person__title']} ${styles['item-person__title_l']}`}
          >
            Должность
          </span>
          <div
            className={`${styles['item-person__value']} ${styles['item-person__value_round']}`}
          >
            {person.position}
          </div>
        </div>
        <div className={styles['item-person__row']}>
          <span
            className={`${styles['item-person__title']} ${styles['item-person__title_l']}`}
          >
            Подразделение
          </span>
          <div
            className={`${styles['item-person__value']} ${styles['item-person__value_round']}`}
          >
            {person.subdivision}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPerson;
