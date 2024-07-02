import { ReactNode } from 'react';
import styles from '../styles.module.scss';

type Props = {
  children: ReactNode;
};

const PopapBody = ({ children }: Props) => {
  return <div className={styles.popap__body}>{children}</div>;
};

export default PopapBody;
