import { ReactNode, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Input from 'components/Input';
import styles from './styles.module.scss';

type Props = {
  isRound?: boolean;
};

const ItemProfession = ({ isRound }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name='asdasdadadasdsa'
      defaultValue=''
      render={({ field: { onChange, value, ref } }) => (
        <Input
          id='planned_position'
          name='planned_position'
          defaultValue=''
          onChange={onChange}
          innerRef={ref}
          value={value}
          isRound={isRound}
        />
      )}
    />
  );
};

export default ItemProfession;
