import { useState, useEffect, useRef } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import AsyncSelect from 'components/Select/AsyncSelect';
import { Option } from 'components/Select/types';
import { getCollaborators } from 'services';
import { SELECT_MESSAGES_PERSONS } from '../../constants';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { formattingCode } from 'helpers';
import styles from './styles.module.scss';
import { SearchCollaborator, Poll } from 'types';

type Props = {
  data: Poll;
};

const ItemSelect = ({ data }: Props) => {
  const { control, setValue } = useFormContext();
  const [selectData, setSelectData] = useState<SearchCollaborator[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const messageRef = useRef<string>(SELECT_MESSAGES_PERSONS.initial);

  useEffect(() => {
    if (data.entries.length > 0) {
      const option = {
        value: data.entries[0].id,
        label: data.entries[0].title
      };
      const dataPersons = [];
      const personInfo: SearchCollaborator = {
        id: data.entries[0].id,
        name: data.entries[0].title,
        tab_number: '',
        position: '',
        subdivision: ''
      };

      if (data.person) {
        personInfo.tab_number = data.person.tab_number;
        personInfo.position = data.person.position;
        personInfo.subdivision = data.person.subdivision;
      }

      dataPersons.push(personInfo);
      setValue(data.id, option);
      setSelectedValue(data.entries[0].id);
      setSelectData(dataPersons);
    }
  }, []);

  const noOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    return inputValue ? messageRef.current : SELECT_MESSAGES_PERSONS.initial;
  };

  const debouncedCompetenceProfiles = debounce(async (input, callback) => {
    await getCollaborators(input)
      .then((data) => {
        if (data.data.length > 0) {
          const selectOptions = data.data.map((item) => ({
            value: item.id,
            label: item.name
          }));
          setSelectData(data.data);
          messageRef.current = '';
          callback(selectOptions);
        } else {
          messageRef.current = data.isError
            ? SELECT_MESSAGES_PERSONS.error
            : SELECT_MESSAGES_PERSONS.noOption;
          callback([]);
        }
      })
      .catch(() => {
        messageRef.current = SELECT_MESSAGES_PERSONS.error;
        callback([]);
      });
  }, 300);

  const getCompetenceProfiles = (
    input: string,
    callback: (data: any) => void
  ) => {
    if (input.trim().length === 0) {
      messageRef.current = SELECT_MESSAGES_PERSONS.initial;
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

  const defaultValue =
    data.entries.length > 0
      ? [{ value: data.entries[0].id, label: data.entries[0].title }]
      : [];

  return (
    <div className={styles['item-select']}>
      <Controller
        control={control}
        name={data.id}
        render={({ field: { value, onChange, ref } }) => {
          return (
            <AsyncSelect
              label=''
              innerRef={ref}
              loadOptions={getCompetenceProfiles}
              value={value}
              placeholder='Поиск...'
              onChange={(selected) => {
                const { value } = selected as Option;
                onChange(selected);
                setSelectedValue(value);
              }}
              noOptionsMessage={noOptionsMessage}
              isArrow={false}
              defaultValue={defaultValue}
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
            {formattingCode(selectedAdditionValues?.tab_number ?? '')}
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
