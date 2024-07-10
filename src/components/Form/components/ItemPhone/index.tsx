import { useFormContext, Controller } from 'react-hook-form';
import Input from 'components/Input';
// import styles from './styles.module.scss';

const ItemPhone = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name='asdasdad'
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
