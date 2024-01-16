'use client';

import Image from 'next/image';
import React from 'react';

type CardAuthorProps = {
  photo: string;
  name: string;
  positon: string;
};
export const CardAuthor = ({ photo, name, positon }: CardAuthorProps) => {
  return (
    <article className='before:bg-red-400 relative p-6 rounded-lg shadow-md overflow-hidden before:w-1 before:h-full before:bg-blue-500 before:absolute before:left-0 before:top-0 border border-gray-700 bg-gray-800'>
      <h3 className='h4 text-white mb-4'>Autor del artículo</h3>
      <div className='flex gap-2 mb-2 lg:mb-0'>
        <span className='shrink-0 inline-flex h-10 w-10 rounded-full overflow-hidden text-white font-semibold'>
          <Image
            alt={`${name}-avatar`}
            src={photo}
            width={10}
            height={10}
            layout='responsive'
          />
        </span>
        <div>
          <p className='flex items-center gap-2 text-gray-300 font-medium'>
            {name}
          </p>
          <p className='text-gray-400 font-normal text-sm'>{positon}</p>
        </div>
      </div>
    </article>
  );
};
