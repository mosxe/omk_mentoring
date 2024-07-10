import ItemPerson from '../ItemPerson';
import ItemSelect from '../ItemSelect';
import ItemProfession from '../ItemProfession';
import ItemPhone from '../ItemPhone';

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
      return null;
    default:
      return null;
  }
};

export default ItemViewContainer;
