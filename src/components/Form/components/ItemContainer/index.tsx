import styles from '../../styles.module.scss';

type Props = {
  title: string;
  subtitle?: string;
  index: number;
  children: React.ReactNode;
};

const ItemContainer = ({ title, subtitle, index, children }: Props) => {
  return (
    <div className={styles.form__item}>
      <div className={styles.form__item_header}>Вопрос {index + 1}</div>
      <div className={styles.form__item_wrapper}>
        <div>
          <div className={styles.form__item_text}>{title}</div>
          {subtitle && (
            <div className={styles.form__item_subtext}>{subtitle}</div>
          )}
        </div>
        <div className={styles.form__item_container}>{children}</div>
      </div>
    </div>
  );
};

export default ItemContainer;
