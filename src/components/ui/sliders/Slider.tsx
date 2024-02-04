'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { BlogRouteProps } from '@/lib/types/routes/blog/Blog.types';
import { ButtonLeft } from './ButtonLeft';
import { ButtonRight } from './ButtonRight';

type SliderProps = {
  articles?: BlogRouteProps.ObjectBlogEntry[];
};
export const Slider = ({ articles = [] }: SliderProps) => {
  const swiperRef = useRef<any>(null);
  const [navigationIndex, setNavigationIndex] = useState<number>(0);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(ev) => setNavigationIndex(ev.activeIndex)}
      slidesPerView={1}
      autoplay={{
        delay: 11000,
        disableOnInteraction: false,
      }}
      className='bg-gray-900'
    >
      {articles && articles?.length > 1 ? (
        <ButtonLeft
          dataLength={articles?.length || 0}
          setNavigationIndex={setNavigationIndex}
          swiperRef={swiperRef}
          navigationIndex={navigationIndex}
        />
      ) : null}
      {articles && articles?.length > 0 ? (
        <>
          {articles.map((article) => (
            <SwiperSlide className=''>
              <div
                className='h-[30rem] bg-no-repeat bg-cover bg-center'
                style={{ backgroundImage: `url(${article.thumbnail})` }}
              >
                sdv
              </div>
            </SwiperSlide>
          ))}
        </>
      ) : null}
      {articles && articles?.length > 1 ? (
        <div className='absolute z-10 top-0 bottom-0 right-2 m-auto flex items-center'>
          <ButtonRight
            dataLength={articles?.length || 0}
            setNavigationIndex={setNavigationIndex}
            swiperRef={swiperRef}
            navigationIndex={navigationIndex}
          />
        </div>
      ) : null}
    </Swiper>
  );
};
