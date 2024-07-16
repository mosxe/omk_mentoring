import RadioButton from 'components/RadioButton';
import { useFormContext, Controller } from 'react-hook-form';
import { Poll } from 'types';

type Props = {
  data: Poll;
};

const ItemRadio = ({ data }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={data.id}
      defaultValue=''
      render={({ field: { value, onChange } }) => (
        <>
          {data.entries.map((item) => {
            return (
              <RadioButton
                key={item.id}
                name={data.id}
                value={item.id}
                onChange={onChange}
                checked={value === item.id}
                label={item.title}
              />
            );
          })}
        </>
      )}
    />
  );
};

export default ItemRadio;
