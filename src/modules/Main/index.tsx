import { useState, useEffect, useRef, useCallback } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Alert from 'components/Alert';
import Information from './components/Information';
import Knowledge from './components/Knowledge';
import Reference from './components/Reference';
import Mentor from './components/Mentor';
import Competences from './components/Competences';
import Support from './components/Support';
import Profitable from './components/Profitable';
import Starting from './components/Starting';
import Contacts from './components/Contacts';
import { ResponseData } from 'types';
import { getData } from 'services';
import { initialData } from 'services/constants';
import styles from './styles.module.scss';

const Main = () => {
  const startingRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const mentorRef = useRef<HTMLDivElement>(null);
  const profitableRef = useRef<HTMLDivElement>(null);

  const handleClickSection = useCallback((section: string) => {
    const headerHeight = 64;
    let scrollPosY = null;

    switch (section) {
      case 'starting':
        scrollPosY = startingRef.current
          ? startingRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      case 'mentor':
        scrollPosY = mentorRef.current
          ? mentorRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      case 'support':
        scrollPosY = supportRef.current
          ? supportRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      case 'profitable':
        scrollPosY = profitableRef.current
          ? profitableRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight
          : null;
        break;
      default:
        break;
    }
    if (scrollPosY !== null) {
      window.scrollTo({
        top: scrollPosY,
        behavior: 'smooth'
      });
    }
  }, []);

  const [data, setData] = useState<ResponseData>(initialData);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        if (res.isError) {
          setError(true);
          return;
        }
        setData(res);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Loader />
        </main>
        <Footer />
      </>
    );
  }

  if (isError || data.isError) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Error />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Information onClickSection={handleClickSection} />
        <Knowledge onClickSection={handleClickSection} />
        <Reference />
        <Mentor ref={mentorRef} link={data.data.link_additional_competencies} />
        <Competences
          link={data.data.link_corporate_competencies_mentor}
          linkHref={data.data.link_program_training}
        />
        <Support
          news={data.data.news}
          ref={supportRef}
          link={data.data.link_catalog}
          linkFile={data.data.link_file_payments}
        />
        <Profitable ref={profitableRef} link={data.data.link_file_payments} />
        <Starting ref={startingRef} link={data.data.link_program_training} />
        <Contacts data={data.data.contacts} />
      </main>
      <Footer />
      <Alert />
    </>
  );
};

export default Main;
