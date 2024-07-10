import { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Checkbox from 'components/Checkbox';
import TextArea from 'components/TextArea';
import { Poll } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: Poll;
  index: number;
};
const Question = ({ data, index }: Props) => {
  const { register, control } = useFormContext();
  const [isShowTextArea, setShowTextArea] = useState<boolean>(false);

  return (
    <div className={styles.form__item}>
      <div className={styles.form__item_header}>Вопрос {index + 1}</div>
      <div className={styles.form__item_wrapper}>
        <div>
          <div className={styles.form__item_text}>{data.title}</div>
          {data.type === 'select' && (
            <div className={styles.form__item_help}>
              (выберите один или несколько пунктов)
            </div>
          )}
        </div>
        <div className={styles.form__item_container}>
          {data.type === 'text' && (
            <Controller
              control={control}
              name={data.id}
              defaultValue=''
              render={({ field: { onChange, value } }) => (
                <TextArea
                  {...register(data.id)}
                  value={value}
                  onChange={onChange}
                  placeholder='Введите текст сообщения...'
                />
              )}
            />
          )}
          {data.type === 'select' &&
            data.entries.map((entry, indexEntry) => {
              return (
                <Controller
                  key={entry.id}
                  control={control}
                  name={`${data.id}.${indexEntry}._${entry.id}`}
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      id={`${data.id}.${indexEntry}._${entry.id}`}
                      checked={value}
                      label={entry.title}
                      onChange={(e) => {
                        if (entry.weight === 1) {
                          setShowTextArea(!isShowTextArea);
                        }
                        onChange(e);
                      }}
                    />
                  )}
                />
              );
            })}
          {isShowTextArea && (
            <Controller
              control={control}
              name={`${data.id}.${data.entries.length}.text`}
              defaultValue=''
              render={({ field: { onChange, value } }) => (
                <TextArea
                  {...register(`${data.id}.${data.entries.length}.text`)}
                  value={value}
                  onChange={onChange}
                  style={{ marginTop: '8px' }}
                  placeholder='Здесь укажите, что именно...'
                />
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
