import { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Input from 'components/Input';
import { formattingPhone } from 'helpers';
import { Poll } from 'types';

type Props = {
  data: Poll;
  phone?: string;
};

const ItemPhone = ({ data, phone = '' }: Props) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    const formatedPhone = formattingPhone(phone);
    if (formatedPhone !== '') {
      setValue(data.id, formatedPhone);
    }
  }, []);

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
