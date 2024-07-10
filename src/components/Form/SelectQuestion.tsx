import { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'components/Select';
import { Poll } from 'types';
import styles from './styles.module.scss';

const options = [
  {
    value: 1,
    label: 'Январь'
  },
  {
    value: 2,
    label: 'Февраль'
  },
  {
    value: 3,
    label: 'Март'
  }
];

const QuestionSelect = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.form__item}>
      <div className={styles.form__item_header}>Вопрос {1 + 1}</div>
      <div className={styles.form__item_wrapper}>
        <div className={styles.form__item_container}>
          <Controller
            control={control}
            name='tests'
            defaultValue=''
            render={({ field: { onChange, value, ref } }) => (
              <>
                <Select
                  id='purpose'
                  options={options}
                  label='Цель оценки'
                  placeholder='Тест'
                  innerRef={ref}
                  onChange={onChange}
                  value={value}
                  isSearchable={false}
                />
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionSelect;
