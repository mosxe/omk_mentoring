import styles from './styles.module.scss';

const ItemPerson = () => {
  return (
    <div className={styles['item-person']}>
      <div className={styles['item-person__row']}>
        <span className={styles['item-person__title']}>Фамилия</span>
        <div className={styles['item-person__value']}>sadsadasdas</div>
      </div>
      <div className={styles['item-person__row']}>
        <span className={styles['item-person__title']}>Имя</span>
        <div className={styles['item-person__value']}>sadsadasdas</div>
      </div>
      <div className={styles['item-person__row']}>
        <span className={styles['item-person__title']}>Отчество</span>
        <div className={styles['item-person__value']}>sadsadasdas</div>
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
            sadsadasdas
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
            sadsadasdas
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
            sadsadasdas
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPerson;
