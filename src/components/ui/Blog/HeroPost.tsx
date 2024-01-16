import React from 'react';
import Image from 'next/image';

type HeroPostProps = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  thumbnail: string;
};
export const HeroPost = ({
  title,
  description,
  category,
  readTime,
  date,
  thumbnail,
}: HeroPostProps) => {
  return (
    <section className='pt-[5.25rem] pb-8 bg-gray-800'>
      <div className='ml-auto mr-auto w-[97%] max-w-[82rem] grid grid-cols-10 gap-8 items-center'>
        <div className='col-span-full lg:col-span-5 order-2 lg:order-1'>
          <h1 className='text-white font-semibold text-xl md:text-2xl mb-4'>
            {title}
          </h1>
          <p className='text-gray-400 leading-7 text-normal font-light mb-5'>
            {description}
          </p>
          <div className='flex flex-wrap gap-2 mb-4'>
            <div className='flex items-center gap-1 text-ligth text-sm text-gray-400'>
              <i className='bi bi-clock text-amber-300' />
              <span>{category}</span>
            </div>
            <div className='flex items-center gap-1 text-ligth text-sm text-gray-400'>
              <i className='bi bi-clock text-amber-300' />
              <span>{readTime}</span>
            </div>
            <div className='flex items-center gap-1 text-ligth text-sm text-gray-400'>
              <i className='bi bi-calendar2 text-amber-300' />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className='col-span-full lg:col-span-5 order-1 lg:order-2 rounded-lg overflow-hidden'>
          <Image
            className='w-full aspect-video object-cover'
            alt={title}
            loading='lazy'
            width={584}
            height={330}
            layout='responsive'
            src={thumbnail}
          />
        </div>
      </div>
    </section>
  );
};
