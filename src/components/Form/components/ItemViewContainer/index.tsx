import ItemPerson from '../ItemPerson';
import ItemSelect from '../ItemSelect';
import ItemProfession from '../ItemProfession';
import ItemPhone from '../ItemPhone';
import ItemDate from '../ItemDate';
import { Poll, Collaborator } from 'types';

type Props = {
  data: Poll;
  person: Collaborator;
  view: string;
};

const ItemViewContainer = ({ data, person, view }: Props) => {
  switch (view) {
    case '1': {
      return <ItemPerson data={data} person={person} />;
    }
    case '2': {
      return <ItemSelect data={data} />;
    }
    case '3':
      return <ItemProfession data={data} />;
    case '4':
      return <ItemPhone data={data} phone={person.phone} />;
    case '5':
      return <ItemDate data={data} />;
    default:
      return null;
  }
};

export default ItemViewContainer;
