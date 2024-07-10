import { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Input from 'components/Input';

import { Poll } from 'types';
import styles from './styles.module.scss';

type Props = {
  isRound?: boolean;
};

const QuestionInput = ({ isRound }: Props) => {
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
                <Input
                  id='planned_position'
                  name='planned_position'
                  defaultValue=''
                  onChange={onChange}
                  innerRef={ref}
                  value={value}
                  isRound={isRound}
                />
              </>
            )}
          />
          <Controller
            control={control}
            name='testsasdasdasdasd'
            defaultValue=''
            render={({ field: { onChange, value, ref } }) => (
              <>
                <Input
                  type='tel'
                  onChange={onChange}
                  value={value}
                  // innerRef={ref}
                />
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionInput;
