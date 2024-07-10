import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'radio' | 'checkbox';
  checked: boolean;
}

const Checkbox = forwardRef(
  ({ label, checked, type = 'checkbox', ...props }: Props) => {
    const className = checked
      ? `${styles.checkbox} ${styles.checkbox_checked}`
      : styles.checkbox;

    return (
      <div className={className}>
        <label htmlFor={props.name} className={styles.checkbox__label}>
          <input type={type} {...props} />
          <span className={styles.checkbox__value}></span>
          <div className={styles.checkbox__text}>
            <span>{label}</span>
          </div>
        </label>
      </div>
    );
  }
);
export default Checkbox;
