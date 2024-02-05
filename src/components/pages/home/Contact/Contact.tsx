import React from 'react';
import { FormContact } from '@/components/ui/Form/FormContact/FormContact';

export const Contact = () => {
  return (
    <div id='contact' className='relative'>
      <div className='bg-gray-900 bg-[url(/assets/pattern-hero.svg)] w-full h-full'>
        <div className='py-4 m-auto w-full w-[96%] max-w-[83rem] flex flex-wrap items-center'>
          <div className='w-full h-full md:w-[50%]'>
            <h1 className='text-white font-bold text-3xl uppercase my-6 text-center sm:mb-auto sm:text-left'>
              ¿Conversamos?
            </h1>
          </div>
          <div className='w-full md:w-[50%] flex items-center justify-center h-full'>
            <div className='w-[97%]'>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
