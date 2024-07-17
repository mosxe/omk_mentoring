import styles from '../../styles.module.scss';

type Props = {
  header: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const ItemContainer = ({ header, title, subtitle, children }: Props) => {
  const isShowHeader = title || subtitle;
  return (
    <div className={styles.form__item}>
      <div className={styles.form__item_header}>{header}</div>
      <div className={styles.form__item_wrapper}>
        {isShowHeader && (
          <div>
            {title && <div className={styles.form__item_text}>{title}</div>}
            {subtitle && (
              <div className={styles.form__item_subtext}>{subtitle}</div>
            )}
          </div>
        )}

        <div className={styles.form__item_container}>{children}</div>
      </div>
    </div>
  );
};

export default ItemContainer;
