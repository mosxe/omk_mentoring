import { useFormContext, Controller } from 'react-hook-form';
import Input from 'components/Input';
import { Poll } from 'types';

type Props = {
  data: Poll;
};

const ItemPhone = ({ data }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={data.id}
      defaultValue=''
      render={({ field: { onChange, value } }) => (
        <>
          <Input type='tel' onChange={onChange} value={value} />
        </>
      )}
    />
  );
};

export default ItemPhone;
