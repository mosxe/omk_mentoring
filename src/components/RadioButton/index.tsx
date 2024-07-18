import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
}

const RadioButton = forwardRef(({ label, checked, ...props }: Props, _) => {
  const className = checked
    ? `${styles['radio-button']} ${styles['radio-button_checked']}`
    : styles['radio-button'];

  return (
    <div className={className}>
      <label className={styles['radio-button__label']}>
        <input type='radio' {...props} />
        <span className={styles['radio-button__value']}></span>
        <div className={styles['radio-button__text']}>
          <span>{label}</span>
        </div>
      </label>
    </div>
  );
});
export default RadioButton;
