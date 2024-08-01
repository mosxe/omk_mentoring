import { InputHTMLAttributes, Ref } from 'react';
import InputMask from '@mona-health/react-input-mask';
import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  innerRef?: Ref<HTMLInputElement>;
  isRound?: boolean;
}

const Input = ({
  id,
  name,
  label,
  placeholder = '',
  disabled = false,
  readOnly = false,
  isRound = false,
  value,
  onChange,
  type = 'text',
  innerRef = undefined
}: Props): JSX.Element => {
  const classNameInput = isRound
    ? `${styles['input-value']} ${styles['input-value__round']}`
    : styles['input-value'];

  if (type === 'tel') {
    return (
      <InputMask
        mask='+7(999)999-99-99'
        placeholder='+7( )'
        value={value}
        onChange={onChange}
        maskPlaceholder={null}
        className={styles['input-value']}
      />
    );
  }

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles['input-label']}>
          {label}
        </label>
      )}
      <input
        className={classNameInput}
        id={id}
        type={type}
        readOnly={readOnly}
        ref={innerRef}
        name={name}
        placeholder={disabled ? '' : placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        autoComplete='off'
      />
    </>
  );
};

export default Input;
