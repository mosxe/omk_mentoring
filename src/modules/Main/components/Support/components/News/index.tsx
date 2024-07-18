import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { useWindowSize } from 'hooks/useWindowSize';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import classNames from 'classnames';
import Slider from './Slider';
import { New } from 'types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.scss';

type Props = {
  data: New[];
};

const News = ({ data }: Props) => {
  const swiperRef = useRef<SwiperCore>();
  const [activeSlider, setActiveSlider] = useState<number>(0);
  const [width] = useWindowSize();

  const classNameBtnPrev = classNames(
    styles['news__bullet'],
    styles['news__bullet--prev']
  );
  const classNameBtnNext = classNames(
    styles['news__bullet'],
    styles['news__bullet--next']
  );

  const isShowNextBtn =
    (width >= 1024 && data.length > 3) ||
    (width < 1024 && width >= 577 && data.length > 1);

  return (
    <div className={styles.news}>
      <div className={styles['news__wrapper']}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          speed={300}
          autoHeight={false}
          spaceBetween={10}
          className={styles['news__wrapper']}
          modules={[Navigation, Scrollbar, A11y]}
          onSlideChange={(swiper) => {
            setActiveSlider(swiper.activeIndex);
          }}
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
              spaceBetween: 20
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Slider data={item} />
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
        {(swiperRef.current === undefined || !swiperRef.current?.isEnd) &&
          isShowNextBtn && (
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
