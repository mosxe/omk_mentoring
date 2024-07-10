import RadioButton from 'components/RadioButton';
import { useFormContext, Controller } from 'react-hook-form';

import { Entry } from 'types';

type Props = {
  id: string;
  data: Entry[];
};

const ItemRadio = ({ id, data }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      defaultValue=''
      render={({ field: { value, onChange } }) => (
        <>
          {data.map((item) => {
            return (
              <RadioButton
                key={item.id}
                name={id}
                value={item.id}
                onChange={onChange}
                checked={value === item.id}
                label={item.title}
              />
            );
          })}
          {/* <RadioButton
            name='KEKES'
            onChange={onChange}
            // {...register('radio')}
            checked={value === 'A'}
            type='radio'
            // value='A'
          />
          <RadioButton
            name='KEKES'
            onChange={onChange}
            // {...register('radio')}
            checked={value === 'B'}
            type='radio'
            // value='B'
          />
          <RadioButton
            name='KEKES'
            onChange={onChange}
            // {...register('radio')}
            checked={value === 'C'}
            // type='radio'
            value='C'
          /> */}
        </>
      )}
    />
  );

  return data.map((item) => {
    console.log(value);
    return (
      <RadioButton
        key={item.id}
        value={item.id}
        // onChange={onChange}
        label={item.title}
        // checked={value === item.id}
        // name={name}
      />
    );
  });
};

export default ItemRadio;
