import styles from '../../styles.module.scss';

type Props = {
  title: string;
  isRequest?: boolean;
};

const Header = ({ title, isRequest = false }: Props) => {
  return (
    <div className={styles.form__header}>
      {!isRequest && <span className={styles.form__header_text}>анкета</span>}
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
