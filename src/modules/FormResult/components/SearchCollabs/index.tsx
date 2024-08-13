import { useState, useRef } from 'react';
import AsyncSelect from 'components/Select/AsyncSelect';
import { Option } from 'components/Select/types';
import { getCollaborators } from 'services';
import { SELECT_MESSAGES_PERSONS } from 'components/Form/constants';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { formattingCode } from 'helpers';
import styles from './styles.module.scss';
import { SearchCollaborator } from 'types';

type Props = {
  value: string | number;
  onClick: (value: string | number) => void;
};

const SearchCollabs = ({ value: selectedValue, onClick }: Props) => {
  const [selectData, setSelectData] = useState<SearchCollaborator[]>([]);
  const messageRef = useRef<string>(SELECT_MESSAGES_PERSONS.initial);
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

  const classNameWrapper = classNames(styles['search-collabs__wrapper'], {
    [styles['search-collabs__wrapper_selected']]: selectedValue !== ''
  });

  const selectedAdditionValues = selectData.find(
    (val) => val.id === selectedValue
  );

  return (
    <div className={styles['search-collabs']}>
      <AsyncSelect
        label=''
        loadOptions={getCompetenceProfiles}
        placeholder='Поиск...'
        onChange={(selected) => {
          const { value } = selected as Option;
          onClick(value);
        }}
        noOptionsMessage={noOptionsMessage}
        isArrow={false}
        menuPortalTarget={document.body}
      />
      <div className={classNameWrapper}>
        {selectedValue === '' && (
          <span
            className={`${styles['search-collabs__title']} ${styles['search-collabs__title_l']}`}
          >
            Автозаполнение данных
          </span>
        )}
        <div className={styles['search-collabs__row']}>
          <span
            className={`${styles['search-collabs__title']} ${styles['search-collabs__title_l']}`}
          >
            Табельный номер
          </span>
          <div
            className={`${styles['search-collabs__value']} ${styles['search-collabs__value_round']}`}
          >
            {formattingCode(selectedAdditionValues?.tab_number ?? '')}
          </div>
        </div>
        <div className={styles['search-collabs__row']}>
          <span
            className={`${styles['search-collabs__title']} ${styles['search-collabs__title_l']}`}
          >
            Должность
          </span>
          <div
            className={`${styles['search-collabs__value']} ${styles['search-collabs__value_round']}`}
          >
            {selectedAdditionValues?.position}
          </div>
        </div>
        <div className={styles['search-collabs__row']}>
          <span
            className={`${styles['search-collabs__title']} ${styles['search-collabs__title_l']}`}
          >
            Подразделение
          </span>
          <div
            className={`${styles['search-collabs__value']} ${styles['search-collabs__value_round']}`}
          >
            {selectedAdditionValues?.subdivision}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCollabs;
