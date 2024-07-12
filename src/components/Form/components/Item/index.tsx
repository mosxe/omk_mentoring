import { useFormContext, Controller } from 'react-hook-form';
import Checkbox from 'components/Checkbox';

import TextArea from 'components/TextArea';
import ItemContainer from '../ItemContainer';
import ItemViewContainer from '../ItemViewContainer';
import ItemRadio from '../ItemRadio';
import { getItemView } from '../../helpers';
import { Poll, Collaborator } from 'types';

type Props = {
  data: Poll;
  person: Collaborator;
  index: number;
};

const Item = ({ data, person, index }: Props) => {
  const { register, control } = useFormContext();
  const itemView = getItemView(data.view);

  if (itemView) {
    return (
      <ItemContainer title={data.title} index={index}>
        <ItemViewContainer data={data} person={person} view={itemView} />
      </ItemContainer>
    );
  }

  return (
    <ItemContainer title={data.title} index={index}>
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
              placeholder='Введите текст'
            />
          )}
        />
      )}
      {data.type === 'choice' && data.entries.length > 0 && (
        <ItemRadio data={data} />
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
                    onChange(e);
                  }}
                />
              )}
            />
          );
        })}
    </ItemContainer>
  );
};

export default Item;
