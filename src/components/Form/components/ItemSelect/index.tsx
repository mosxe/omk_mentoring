import { useState, useRef } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import AsyncSelect from 'components/Select/AsyncSelect';
import { Option } from 'components/Select/types';
import { searchCollaborators } from 'services';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Collaborator } from 'types';

export const MESSAGES = {
  initial: 'Введите ФИО сотрудника',
  loading: 'Загрузка данных...',
  noOption: 'Данные не найдены',
  error: 'Произошла ошибка, попробуйте повторить позднее'
};

const ItemSelect = () => {
  const { control, setValue } = useFormContext();
  const [selectData, setSelectData] = useState<Collaborator[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const messageRef = useRef<string>(MESSAGES.initial);

  const noOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    return inputValue ? messageRef.current : MESSAGES.initial;
  };

  const debouncedCompetenceProfiles = debounce(async (input, callback) => {
    await searchCollaborators(input)
      .then((data) => {
        if (data.data.length > 0) {
          const selectOptions = data.data.map((item) => ({
            value: item.id,
            label: item.name
          }));
          setSelectData(data.data);
          // setSelectOptions(selectOptions);
          messageRef.current = '';
          console.log(selectOptions);
          callback(selectOptions);
        } else {
          messageRef.current = 'EROR';
          // data.error.code > 0 ? MESSAGES.error : MESSAGES.noOption;
          callback([]);
        }
      })
      .catch(() => {
        messageRef.current = MESSAGES.error;
        callback([]);
      });
  }, 300);

  const getCompetenceProfiles = (input: string, callback: (any) => void) => {
    if (input.trim().length === 0) {
      messageRef.current = MESSAGES.initial;
      return callback([]);
    }
    debouncedCompetenceProfiles(input, callback);
  };

  const classNameWrapper = classNames(styles['item-select__wrapper'], {
    [styles['item-select__wrapper_selected']]: selectedValue !== ''
  });

  const selectedAdditionValues = selectData.find(
    (val) => val.id === selectedValue
  );

  return (
    <div className={styles['item-select']}>
      <Controller
        control={control}
        name={`competency_profile_adad`}
        render={({ field: { value, onChange, ref } }) => {
          return (
            <AsyncSelect
              id={`competency_profile_adad`}
              label=''
              innerRef={ref}
              loadOptions={getCompetenceProfiles}
              value={value}
              onChange={(selected) => {
                const { value } = selected as Option;
                onChange(selected);
                setSelectedValue(value);
              }}
              noOptionsMessage={noOptionsMessage}
              isArrow={false}
            />
          );
        }}
      />
      <div className={classNameWrapper}>
        {selectedValue === '' && (
          <span
            className={`${styles['item-select__title']} ${styles['item-select__title_l']}`}
          >
            Автозаполнение данных
          </span>
        )}
        <div className={styles['item-select__row']}>
          <span
            className={`${styles['item-select__title']} ${styles['item-select__title_l']}`}
          >
            Табельный номер
          </span>
          <div
            className={`${styles['item-select__value']} ${styles['item-select__value_round']}`}
          >
            {selectedAdditionValues?.tab_number}
          </div>
        </div>
        <div className={styles['item-select__row']}>
          <span
            className={`${styles['item-select__title']} ${styles['item-select__title_l']}`}
          >
            Должность
          </span>
          <div
            className={`${styles['item-select__value']} ${styles['item-select__value_round']}`}
          >
            {selectedAdditionValues?.position}
          </div>
        </div>
        <div className={styles['item-select__row']}>
          <span
            className={`${styles['item-select__title']} ${styles['item-select__title_l']}`}
          >
            Подразделение
          </span>
          <div
            className={`${styles['item-select__value']} ${styles['item-select__value_round']}`}
          >
            {selectedAdditionValues?.subdivision}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSelect;
