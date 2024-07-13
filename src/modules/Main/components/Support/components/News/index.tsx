import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import classNames from 'classnames';
import Slider from './Slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.scss';

const sliders = [
  {
    image:
      'https://yandex-images.clstorage.net/SLn482x19/1fb684mq/fss6b2_b8Q_XHCv559zpCVK4NBUIvZc46_Jedltf1tscLzLfqFrWLHd8z6U7k_qgiL4raE155WT3o17Jz94Ie57qH1tamoUOQukPqIKZrPxnfNXwnDxDGG5ynwdaT0KeuRsGip3rk_kC6Z_z-FTtx8sJmA__O2LFB5arnAs63H_dKa5_rygTCRUdS94374iLoWlAdftuwohs8P7C6HxQ_rhpAFguuQfapU_ZQ3lUvbfZqni9XZsgVlV3G2wKbA0-H0nZHyypkgl0zDuNdA35abOpAtRqfvMLT6J-I7vcoo0r22DIrnon2sfceZKLdf_EqGpbP03KwoQG9OnO-zycHG-KC38eiFEYp5w4fDa8azhCK5BFGX2D6L9hrMCrvEEMOBiySQ1b9emkDrpjCfdtdbuLWW09-4EUtTcrbCgdXdx-6yk9P_nDCma-ef3kb7nII_jyZumN04iPA7xhm6_hnBnLs3gf64Qqtg7ZY1iHnQRqWGqN_wuStPcHSIy73S8v7rk6zS8oYytFjRgtti3qeEK4Ije4jjJpXQPtQ9odEOyYOvPJvnh1eUQ82NJZtI0kmKu7b31bANRW1nmsqE-v7x6KOVxuW0DadXyK_FXPemgyKtKWi_4BG15hv5PLX4FtOJizui_4dLhkTCiSKZduhsuZCX__CGD21TYa3iqufG-_-Sl_LkgCyEVueeyXb1qoIPgh5Wm9gRofEn7gmJ9iTTso4Ar92aZo9d0qEUsXrSdJiakeTYsjBTXmq89K3r5PDVrZbX34YhnHvNofVm6pSEIZgKdIvKFYLtAMQ9n_4RybSRJa3Vn1SJcMK1CZ9e2nWelITG0ZMVQ3lMr9Sl4sHrz4mwz9KVAphZz4bqY-OKpwqpAWul6TKCzhv0IrXlLfOBrgSx3rFTjlzQrzeWffFSlr2E5OGaKmBKTrXUns7PwOe0q-TLvQGEbuKI0XXNjLslqTxVlv43qsYuxBa5-zs',
    title: '04 июлня 2024',
    text: 'Определили лучших работников выксунского завода ОМК',
    link: ''
  },
  {
    image:
      'https://yandex-images.clstorage.net/SLn482x19/1fb684mq/fss6b2_b8Q_XHCv559zpCVK4NBUIvZc46_Jedltf1tscLzLfqFrWLHd8z6U7k_qgiL4raE155WT3o17Jz94Ie57qH1tamoUOQukPqIKZrPxnfNXwnDxDGG5ynwdaT0KeuRsGip3rk_kC6Z_z-FTtx8sJmA__O2LFB5arnAs63H_dKa5_rygTCRUdS94374iLoWlAdftuwohs8P7C6HxQ_rhpAFguuQfapU_ZQ3lUvbfZqni9XZsgVlV3G2wKbA0-H0nZHyypkgl0zDuNdA35abOpAtRqfvMLT6J-I7vcoo0r22DIrnon2sfceZKLdf_EqGpbP03KwoQG9OnO-zycHG-KC38eiFEYp5w4fDa8azhCK5BFGX2D6L9hrMCrvEEMOBiySQ1b9emkDrpjCfdtdbuLWW09-4EUtTcrbCgdXdx-6yk9P_nDCma-ef3kb7nII_jyZumN04iPA7xhm6_hnBnLs3gf64Qqtg7ZY1iHnQRqWGqN_wuStPcHSIy73S8v7rk6zS8oYytFjRgtti3qeEK4Ije4jjJpXQPtQ9odEOyYOvPJvnh1eUQ82NJZtI0kmKu7b31bANRW1nmsqE-v7x6KOVxuW0DadXyK_FXPemgyKtKWi_4BG15hv5PLX4FtOJizui_4dLhkTCiSKZduhsuZCX__CGD21TYa3iqufG-_-Sl_LkgCyEVueeyXb1qoIPgh5Wm9gRofEn7gmJ9iTTso4Ar92aZo9d0qEUsXrSdJiakeTYsjBTXmq89K3r5PDVrZbX34YhnHvNofVm6pSEIZgKdIvKFYLtAMQ9n_4RybSRJa3Vn1SJcMK1CZ9e2nWelITG0ZMVQ3lMr9Sl4sHrz4mwz9KVAphZz4bqY-OKpwqpAWul6TKCzhv0IrXlLfOBrgSx3rFTjlzQrzeWffFSlr2E5OGaKmBKTrXUns7PwOe0q-TLvQGEbuKI0XXNjLslqTxVlv43qsYuxBa5-zs',
    title: '11 июлня 2024',
    text: 'В завершение Года педагога на выксунском заводе ОМК наградили наставников',
    link: ''
  },
  {
    image:
      'https://yandex-images.clstorage.net/SLn482x19/1fb684mq/fss6b2_b8Q_XHCv559zpCVK4NBUIvZc46_Jedltf1tscLzLfqFrWLHd8z6U7k_qgiL4raE155WT3o17Jz94Ie57qH1tamoUOQukPqIKZrPxnfNXwnDxDGG5ynwdaT0KeuRsGip3rk_kC6Z_z-FTtx8sJmA__O2LFB5arnAs63H_dKa5_rygTCRUdS94374iLoWlAdftuwohs8P7C6HxQ_rhpAFguuQfapU_ZQ3lUvbfZqni9XZsgVlV3G2wKbA0-H0nZHyypkgl0zDuNdA35abOpAtRqfvMLT6J-I7vcoo0r22DIrnon2sfceZKLdf_EqGpbP03KwoQG9OnO-zycHG-KC38eiFEYp5w4fDa8azhCK5BFGX2D6L9hrMCrvEEMOBiySQ1b9emkDrpjCfdtdbuLWW09-4EUtTcrbCgdXdx-6yk9P_nDCma-ef3kb7nII_jyZumN04iPA7xhm6_hnBnLs3gf64Qqtg7ZY1iHnQRqWGqN_wuStPcHSIy73S8v7rk6zS8oYytFjRgtti3qeEK4Ije4jjJpXQPtQ9odEOyYOvPJvnh1eUQ82NJZtI0kmKu7b31bANRW1nmsqE-v7x6KOVxuW0DadXyK_FXPemgyKtKWi_4BG15hv5PLX4FtOJizui_4dLhkTCiSKZduhsuZCX__CGD21TYa3iqufG-_-Sl_LkgCyEVueeyXb1qoIPgh5Wm9gRofEn7gmJ9iTTso4Ar92aZo9d0qEUsXrSdJiakeTYsjBTXmq89K3r5PDVrZbX34YhnHvNofVm6pSEIZgKdIvKFYLtAMQ9n_4RybSRJa3Vn1SJcMK1CZ9e2nWelITG0ZMVQ3lMr9Sl4sHrz4mwz9KVAphZz4bqY-OKpwqpAWul6TKCzhv0IrXlLfOBrgSx3rFTjlzQrzeWffFSlr2E5OGaKmBKTrXUns7PwOe0q-TLvQGEbuKI0XXNjLslqTxVlv43qsYuxBa5-zs',
    title: '22 июлня 2024',
    text: '«Скажи спасибо наставнику» — на выксунском заводе в День учителя стартовала акция',
    link: ''
  },
  {
    image:
      'https://yandex-images.clstorage.net/SLn482x19/1fb684mq/fss6b2_b8Q_XHCv559zpCVK4NBUIvZc46_Jedltf1tscLzLfqFrWLHd8z6U7k_qgiL4raE155WT3o17Jz94Ie57qH1tamoUOQukPqIKZrPxnfNXwnDxDGG5ynwdaT0KeuRsGip3rk_kC6Z_z-FTtx8sJmA__O2LFB5arnAs63H_dKa5_rygTCRUdS94374iLoWlAdftuwohs8P7C6HxQ_rhpAFguuQfapU_ZQ3lUvbfZqni9XZsgVlV3G2wKbA0-H0nZHyypkgl0zDuNdA35abOpAtRqfvMLT6J-I7vcoo0r22DIrnon2sfceZKLdf_EqGpbP03KwoQG9OnO-zycHG-KC38eiFEYp5w4fDa8azhCK5BFGX2D6L9hrMCrvEEMOBiySQ1b9emkDrpjCfdtdbuLWW09-4EUtTcrbCgdXdx-6yk9P_nDCma-ef3kb7nII_jyZumN04iPA7xhm6_hnBnLs3gf64Qqtg7ZY1iHnQRqWGqN_wuStPcHSIy73S8v7rk6zS8oYytFjRgtti3qeEK4Ije4jjJpXQPtQ9odEOyYOvPJvnh1eUQ82NJZtI0kmKu7b31bANRW1nmsqE-v7x6KOVxuW0DadXyK_FXPemgyKtKWi_4BG15hv5PLX4FtOJizui_4dLhkTCiSKZduhsuZCX__CGD21TYa3iqufG-_-Sl_LkgCyEVueeyXb1qoIPgh5Wm9gRofEn7gmJ9iTTso4Ar92aZo9d0qEUsXrSdJiakeTYsjBTXmq89K3r5PDVrZbX34YhnHvNofVm6pSEIZgKdIvKFYLtAMQ9n_4RybSRJa3Vn1SJcMK1CZ9e2nWelITG0ZMVQ3lMr9Sl4sHrz4mwz9KVAphZz4bqY-OKpwqpAWul6TKCzhv0IrXlLfOBrgSx3rFTjlzQrzeWffFSlr2E5OGaKmBKTrXUns7PwOe0q-TLvQGEbuKI0XXNjLslqTxVlv43qsYuxBa5-zs',
    title: '22 июлня 2024',
    text: '«Скажи спасибо наставнику» — на выксунском заводе в День учителя стартовала акция',
    link: ''
  },
  {
    image:
      'https://yandex-images.clstorage.net/SLn482x19/1fb684mq/fss6b2_b8Q_XHCv559zpCVK4NBUIvZc46_Jedltf1tscLzLfqFrWLHd8z6U7k_qgiL4raE155WT3o17Jz94Ie57qH1tamoUOQukPqIKZrPxnfNXwnDxDGG5ynwdaT0KeuRsGip3rk_kC6Z_z-FTtx8sJmA__O2LFB5arnAs63H_dKa5_rygTCRUdS94374iLoWlAdftuwohs8P7C6HxQ_rhpAFguuQfapU_ZQ3lUvbfZqni9XZsgVlV3G2wKbA0-H0nZHyypkgl0zDuNdA35abOpAtRqfvMLT6J-I7vcoo0r22DIrnon2sfceZKLdf_EqGpbP03KwoQG9OnO-zycHG-KC38eiFEYp5w4fDa8azhCK5BFGX2D6L9hrMCrvEEMOBiySQ1b9emkDrpjCfdtdbuLWW09-4EUtTcrbCgdXdx-6yk9P_nDCma-ef3kb7nII_jyZumN04iPA7xhm6_hnBnLs3gf64Qqtg7ZY1iHnQRqWGqN_wuStPcHSIy73S8v7rk6zS8oYytFjRgtti3qeEK4Ije4jjJpXQPtQ9odEOyYOvPJvnh1eUQ82NJZtI0kmKu7b31bANRW1nmsqE-v7x6KOVxuW0DadXyK_FXPemgyKtKWi_4BG15hv5PLX4FtOJizui_4dLhkTCiSKZduhsuZCX__CGD21TYa3iqufG-_-Sl_LkgCyEVueeyXb1qoIPgh5Wm9gRofEn7gmJ9iTTso4Ar92aZo9d0qEUsXrSdJiakeTYsjBTXmq89K3r5PDVrZbX34YhnHvNofVm6pSEIZgKdIvKFYLtAMQ9n_4RybSRJa3Vn1SJcMK1CZ9e2nWelITG0ZMVQ3lMr9Sl4sHrz4mwz9KVAphZz4bqY-OKpwqpAWul6TKCzhv0IrXlLfOBrgSx3rFTjlzQrzeWffFSlr2E5OGaKmBKTrXUns7PwOe0q-TLvQGEbuKI0XXNjLslqTxVlv43qsYuxBa5-zs',
    title: '22 июлня 2024',
    text: '«Скажи спасибо наставнику» — на выксунском заводе в День учителя стартовала акция',
    link: ''
  },
  {
    image:
      'https://yandex-images.clstorage.net/SLn482x19/1fb684mq/fss6b2_b8Q_XHCv559zpCVK4NBUIvZc46_Jedltf1tscLzLfqFrWLHd8z6U7k_qgiL4raE155WT3o17Jz94Ie57qH1tamoUOQukPqIKZrPxnfNXwnDxDGG5ynwdaT0KeuRsGip3rk_kC6Z_z-FTtx8sJmA__O2LFB5arnAs63H_dKa5_rygTCRUdS94374iLoWlAdftuwohs8P7C6HxQ_rhpAFguuQfapU_ZQ3lUvbfZqni9XZsgVlV3G2wKbA0-H0nZHyypkgl0zDuNdA35abOpAtRqfvMLT6J-I7vcoo0r22DIrnon2sfceZKLdf_EqGpbP03KwoQG9OnO-zycHG-KC38eiFEYp5w4fDa8azhCK5BFGX2D6L9hrMCrvEEMOBiySQ1b9emkDrpjCfdtdbuLWW09-4EUtTcrbCgdXdx-6yk9P_nDCma-ef3kb7nII_jyZumN04iPA7xhm6_hnBnLs3gf64Qqtg7ZY1iHnQRqWGqN_wuStPcHSIy73S8v7rk6zS8oYytFjRgtti3qeEK4Ije4jjJpXQPtQ9odEOyYOvPJvnh1eUQ82NJZtI0kmKu7b31bANRW1nmsqE-v7x6KOVxuW0DadXyK_FXPemgyKtKWi_4BG15hv5PLX4FtOJizui_4dLhkTCiSKZduhsuZCX__CGD21TYa3iqufG-_-Sl_LkgCyEVueeyXb1qoIPgh5Wm9gRofEn7gmJ9iTTso4Ar92aZo9d0qEUsXrSdJiakeTYsjBTXmq89K3r5PDVrZbX34YhnHvNofVm6pSEIZgKdIvKFYLtAMQ9n_4RybSRJa3Vn1SJcMK1CZ9e2nWelITG0ZMVQ3lMr9Sl4sHrz4mwz9KVAphZz4bqY-OKpwqpAWul6TKCzhv0IrXlLfOBrgSx3rFTjlzQrzeWffFSlr2E5OGaKmBKTrXUns7PwOe0q-TLvQGEbuKI0XXNjLslqTxVlv43qsYuxBa5-zs',
    title: '22 июлня 2024',
    text: '«Скажи спасибо наставнику» — на выксунском заводе в День учителя стартовала акция',
    link: ''
  }
];

const News = () => {
  const swiperRef = useRef<SwiperCore>();
  const [activeSlider, setActiveSlider] = useState<number>(0);

  const classNameBtnPrev = classNames(
    styles['news__bullet'],
    styles['news__bullet--prev']
  );
  const classNameBtnNext = classNames(
    styles['news__bullet'],
    styles['news__bullet--next']
  );

  return (
    <div className={styles.news}>
      <div className={styles['news__wrapper']}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          speed={300}
          autoHeight={false}
          spaceBetween={30}
          className={styles['news__wrapper']}
          modules={[Navigation, Scrollbar, A11y]}
          onSlideChange={(swiper) => {
            setActiveSlider(swiper.activeIndex);
          }}
          allowTouchMove={false}
          navigation={{
            nextEl: styles['news__bullet'],
            prevEl: styles['news__bullet']
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {sliders.map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <Slider />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {activeSlider !== 0 && (
          <button
            type='button'
            className={classNameBtnPrev}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              width='11'
              height='20'
              viewBox='0 0 11 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 19L1 10L10 1'
                stroke='#1A222C'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        )}
        {(swiperRef.current === undefined || !swiperRef.current?.isEnd) && (
          <button
            type='button'
            className={classNameBtnNext}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width='11'
              height='20'
              viewBox='0 0 11 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 19L10 10L1 1'
                stroke='#1A222C'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default News;
