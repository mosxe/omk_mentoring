import { components, DropdownIndicatorProps } from 'react-select';
import Loader from '../Loader';
import AsyncSelect from 'react-select/async';
import styles from '../styles.module.scss';

import { OptionType, SelectProps } from '../types';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

type AsyncProps = {
  loadOptions?: (
    input: string,
    callback: (options: OptionType[]) => void
  ) => void;
  noOptionsMessage?: any;
};

const AsyncSelectReact = (
  props: Omit<SelectProps, 'noOptionsMessage'> & AsyncProps
): JSX.Element => {
  const {
    id,
    label,
    onChange,
    noOptionsMessage,
    value,
    isError = false,
    isDisabled = false,
    loadOptions,
    innerRef = undefined,
    isArrow = true
  } = props;

  const DropdownIndicator = (
    props: DropdownIndicatorProps<OptionType, true>
  ) => {
    if (props.selectProps.isLoading) {
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
      <AsyncSelect
        id={id}
        components={{ DropdownIndicator }}
        ref={innerRef}
        name={id}
        placeholder={isDisabled ? '' : 'Поиск...'}
        noOptionsMessage={noOptionsMessage}
        loadingMessage={() => 'Загрузка данных...'}
        classNames={{
          control: ({ isDisabled }) =>
            isError
              ? `${styles.select__container} ${styles.error}`
              : isDisabled
              ? `${styles.select__container} ${styles.disabled}`
              : styles.select__container,
          dropdownIndicator: () => styles.select__arrow,
          indicatorSeparator: () => styles.select__separator,
          valueContainer: () => styles.select__value,
          menu: () => styles.select__menu_async,
          option: () => styles.select__option,
          loadingIndicator: () => styles['loading-hidden'],
          singleValue: () => styles['single-value']
        }}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default AsyncSelectReact;
