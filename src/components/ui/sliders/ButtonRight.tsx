import React from 'react';
import { HandleSlidesProps, handleSlides } from './controllers';

export const ButtonRight = ({
  swiperRef,
  setNavigationIndex,
  navigationIndex,
  dataLength,
}: HandleSlidesProps) => {
  return (
    <button
      role='button'
      className='bi bi-arrow-right-circle text-white text-3xl'
      onClick={() =>
        handleSlides({
          swiperRef,
          setNavigationIndex,
          navigationIndex,
          dataLength,
          ev: 'next',
        })
      }
    />
  );
};
