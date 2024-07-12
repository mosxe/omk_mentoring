import { useFormContext, Controller } from 'react-hook-form';
import Select from 'components/Select';
import { getYearOptions } from '../../helpers';
import { MONTHS } from 'components/Form/constants';
import { Poll } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: Poll;
};

const ItemDate = ({ data }: Props) => {
  const { control } = useFormContext();
  const yearOptions = getYearOptions();

  return (
    <div className={styles['item-date']}>
      <div className={styles['item-date__row']}>
        <span className={styles['item-date__title']}>Месяц</span>
        <div className={styles['item-date__value']}>
          <Controller
            control={control}
            name={`${data.id}.month`}
            defaultValue={{ value: '', label: '' }}
            render={({ field: { value, onChange, ref } }) => {
              return (
                <>
                  <Select
                    options={MONTHS}
                    innerRef={ref}
                    onChange={onChange}
                    value={value}
                    placeholder=''
                    isSearchable={false}
                    isTextCenter
                  />
                </>
              );
            }}
          />
        </div>
      </div>
      <div className={styles['item-date__row']}>
        <span className={styles['item-date__title']}>Год</span>
        <div className={styles['item-date__value']}>
          <Controller
            control={control}
            name={`${data.id}.year`}
            defaultValue={{ value: '', label: '' }}
            render={({ field: { value, onChange, ref } }) => {
              return (
                <>
                  <Select
                    options={yearOptions}
                    innerRef={ref}
                    onChange={onChange}
                    value={value}
                    isSearchable={false}
                    placeholder=''
                    isTextCenter
                  />
                </>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDate;
