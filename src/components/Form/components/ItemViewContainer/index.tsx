import ItemPerson from '../ItemPerson';
import ItemSelect from '../ItemSelect';
import ItemProfession from '../ItemProfession';
import ItemPhone from '../ItemPhone';
import ItemDate from '../ItemDate';

type Props = {
  view: string;
};

const ItemViewContainer = ({ view }: Props) => {
  switch (view) {
    case '1': {
      return <ItemPerson />;
    }
    case '2': {
      return <ItemSelect />;
    }
    case '3':
      return <ItemProfession />;
    case '4':
      return <ItemPhone />;
    case '5':
      return <ItemDate />;
    default:
      return null;
  }
};

export default ItemViewContainer;
