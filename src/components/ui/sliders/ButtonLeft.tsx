import React from 'react';
import { HandleSlidesProps, handleSlides } from './controllers';

export const ButtonLeft = ({
  swiperRef,
  setNavigationIndex,
  navigationIndex,
  dataLength,
}: HandleSlidesProps) => {
  return (
    <div className='absolute z-10 top-0 bottom-0 left-2 m-auto flex items-center'>
      <button
        role='button'
        className='bi bi-arrow-left-circle text-white text-3xl'
        onClick={() =>
          handleSlides({
            swiperRef,
            setNavigationIndex,
            navigationIndex,
            dataLength,
            ev: 'prev',
          })
        }
      />
    </div>
  );
};
