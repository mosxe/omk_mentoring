import { useState, useEffect, useRef, useCallback } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Alert from 'components/Alert';
import styles from './styles.module.scss';
import { ResponseData } from 'types';

const Main = () => {
  // const [data, setData] = useState<ResponseData>(initialData);
  // const [isLoading, setLoading] = useState<boolean>(true);
  // const [isError, setError] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getFetchData()
  //     .then((res) => {
  //       if (res.isError) {
  //         setError(true);
  //         return;
  //       }
  //       setData(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setError(true);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <Header onClick={hancleClickSection} />
  //       <main className={styles.main}>
  //         <Loader />
  //       </main>
  //       <Footer />
  //     </>
  //   );
  // }

  // if (isError || data.isError) {
  //   return (
  //     <>
  //       <Header onClick={hancleClickSection} />
  //       <main className={styles.main}>
  //         <Error />
  //       </main>
  //       <Footer />
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <main className={styles.main}>asdasdasdsadsa</main>
      <Footer />
      <Alert />
    </>
  );
};

export default Main;
