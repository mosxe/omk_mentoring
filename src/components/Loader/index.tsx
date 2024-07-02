import styles from './styles.module.scss';

const LoaderContent = () => (
  <div className={styles.loader__wrapper}>
    <div className={styles['loader-content']}></div>
  </div>
);

const Loader = () => <div className={styles.loader}></div>;

export { LoaderContent };
export default Loader;
