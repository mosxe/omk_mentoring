﻿import { useRef, useEffect } from 'react';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import AsyncSelect from 'components/Select/AsyncSelect';
import debounce from 'lodash.debounce';
import { getProfessions } from 'services';
import {
  MAX_COUNT_PROFESSIONS,
  SELECT_MESSAGES_PROFESSIONS
} from '../../constants';
import styles from './styles.module.scss';
import { Poll } from 'types';

type Props = {
  data: Poll;
};

const ItemProfession = ({ data }: Props) => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    name: data.id,
    control
  });
  const messageRef = useRef<string>(SELECT_MESSAGES_PROFESSIONS.initial);

  const noOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    return inputValue
      ? messageRef.current
      : SELECT_MESSAGES_PROFESSIONS.initial;
  };

  useEffect(() => {
    handleAddProfession();
  }, []);

  const debouncedCompetenceProfiles = debounce(async (input, callback) => {
    await getProfessions(input)
      .then((data) => {
        if (data.data.length > 0) {
          messageRef.current = '';
          callback(data.data);
        } else {
          messageRef.current = data.isError
            ? SELECT_MESSAGES_PROFESSIONS.error
            : SELECT_MESSAGES_PROFESSIONS.noOption;
          callback([]);
        }
      })
      .catch(() => {
        messageRef.current = SELECT_MESSAGES_PROFESSIONS.error;
        callback([]);
      });
  }, 300);

  const getCompetenceProfiles = (
    input: string,
    callback: (data: any) => void
  ) => {
    if (input.trim().length === 0) {
      messageRef.current = SELECT_MESSAGES_PROFESSIONS.initial;
      return callback([]);
    }
    debouncedCompetenceProfiles(input, callback);
  };

  const handleAddProfession = () => {
    append({ value: undefined }, { shouldFocus: false });
  };

  return (
    <div className={styles['item-profession']}>
      {fields.map((field, index) => {
        return (
          <Controller
            key={field.id}
            control={control}
            name={`${data.id}.${index}.value`}
            render={({ field: { value, onChange, ref } }) => {
              return (
                <AsyncSelect
                  label=''
                  innerRef={ref}
                  loadOptions={getCompetenceProfiles}
                  value={value}
                  onChange={onChange}
                  noOptionsMessage={noOptionsMessage}
                  isArrow={false}
                  isClearable={true}
                />
              );
            }}
          />
        );
      })}
      {fields.length < MAX_COUNT_PROFESSIONS && (
        <button
          className={styles['item-profession__btn']}
          type='button'
          onClick={handleAddProfession}
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13 7.99805H8V12.998C8 13.2633 7.89464 13.5176 7.70711 13.7052C7.51957 13.8927 7.26522 13.998 7 13.998C6.73478 13.998 6.48043 13.8927 6.29289 13.7052C6.10536 13.5176 6 13.2633 6 12.998V7.99805H1C0.734784 7.99805 0.48043 7.89269 0.292893 7.70515C0.105357 7.51762 0 7.26326 0 6.99805C0 6.73283 0.105357 6.47848 0.292893 6.29094C0.48043 6.1034 0.734784 5.99805 1 5.99805H6V0.998047C6 0.73283 6.10536 0.478476 6.29289 0.29094C6.48043 0.103403 6.73478 -0.00195313 7 -0.00195312C7.26522 -0.00195313 7.51957 0.103403 7.70711 0.29094C7.89464 0.478476 8 0.73283 8 0.998047V5.99805H13C13.2652 5.99805 13.5196 6.1034 13.7071 6.29094C13.8946 6.47848 14 6.73283 14 6.99805C14 7.26326 13.8946 7.51762 13.7071 7.70515C13.5196 7.89269 13.2652 7.99805 13 7.99805Z'
              fill='#8d8e91'
            />
          </svg>
          добавить профессию
        </button>
      )}
    </div>
  );
};

export default ItemProfession;
