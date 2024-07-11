import ReactSelect, { components, DropdownIndicatorProps } from 'react-select';
import Loader from './Loader';
import styles from './styles.module.scss';
import { OptionType, SelectProps } from './types';
import AsyncSelectReact from 'react-select/async';

const Select = (props: SelectProps): JSX.Element => {
  const {
    id,
    options,
    placeholder,
    label,
    onChange,
    noOptionsMessage = 'Данные отсутствуют',
    noOptionsMessageDefault = 'Не найдено',
    isLoading = false,
    value,
    isDisabled = false,
    defaultValue = [],
    isClearable = false,
    innerRef = undefined,
    isArrow = true,
    isTextCenter = false
  } = props;

  const DropdownIndicator = (
    props: DropdownIndicatorProps<OptionType, true>
  ) => {
    if (isLoading) {
      return (
        <components.DropdownIndicator {...props}>
          <Loader />
        </components.DropdownIndicator>
      );
    }

    if (isDisabled || !isArrow) {
      return null;
    }

    return (
      <components.DropdownIndicator {...props}></components.DropdownIndicator>
    );
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.select__label}>
          {label}
        </label>
      )}
      <ReactSelect
        id={id}
        options={options}
        ref={innerRef}
        name={id}
        menuPlacement='auto'
        isClearable={isClearable}
        defaultValue={defaultValue}
        noOptionsMessage={({ inputValue }) =>
          isLoading
            ? 'Загрузка данных...'
            : !inputValue
            ? noOptionsMessage
            : noOptionsMessageDefault
        }
        placeholder={placeholder}
        components={{ DropdownIndicator }}
        classNames={{
          control: ({ isDisabled, menuIsOpen }) =>
            menuIsOpen
              ? `${styles.select__container} ${styles.select__container_focus}`
              : isDisabled
              ? `${styles.select__container} ${styles.disabled}`
              : styles.select__container,
          dropdownIndicator: () => styles.select__arrow,
          indicatorSeparator: () => styles.select__separator,
          valueContainer: () =>
            isTextCenter
              ? `${styles.select__value} ${styles.select__value_center}`
              : styles.select__value,
          menu: () => styles.select__menu,
          option: () =>
            isTextCenter
              ? `${styles.select__option} ${styles.select__option_center}`
              : styles.select__option,
          singleValue: () => styles['single-value'],
          clearIndicator: () => styles.select__close
        }}
        value={value}
        onChange={onChange}
        loadingMessage={() => <span>Загрузка данных...</span>}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default Select;
export const AsyncSelect = AsyncSelectReact;
