'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { CardProject } from '../CardProject';

export const Projects = () => {
  return (
    <div className='px-3 py-14 bg-[url(/assets/grafdient.jpg)] bg-no-repeat bg-cover'>
      <div>
        <h1 className='text-center text-white font-bold uppercase text-3xl'>
          Projects
        </h1>
        <p className='mt-2 mb-4 text-center text-slate-300 font-bold text-xl'>
          list of projects in which I have participated
        </p>
      </div>
      <div className='m-auto container'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className='mySwiper'
        >
          <SwiperSlide>
            <CardProject
              background='/assets/wbsite.webp'
              title='Company websites'
              description='Manage content efficiently and equip your entire team.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProject
              background='/assets/wbsite.webp'
              title='Company websites'
              description='Manage content efficiently and equip your entire team.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProject
              background='/assets/wbsite.webp'
              title='Company websites'
              description='Manage content efficiently and equip your entire team.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProject
              background='/assets/wbsite.webp'
              title='Company websites'
              description='Manage content efficiently and equip your entire team.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProject
              background='/assets/wbsite.webp'
              title='Company websites'
              description='Manage content efficiently and equip your entire team.'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
