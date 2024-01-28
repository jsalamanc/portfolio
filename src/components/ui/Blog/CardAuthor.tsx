'use client';

import { cn } from '@/hooks/cn';
import Image from 'next/image';

type CardAuthorProps = {
  photo: string;
  name: string;
  positon: string;
};
export const CardAuthor = ({ photo, name, positon }: CardAuthorProps) => {
  const styles = {
    cardAuthor: cn(
      'relative p-6 shadow-md overflow-hidden',
      'border border-gray-700 bg-gray-800 rounded-lg',
      'before:bg-red-400  before:w-1 before:h-full before:bg-blue-500 before:absolute before:left-0 before:top-0'
    ),
    photo: cn('h-10 w-10 rounded-full', 'animate-pulse bg-slate-700'),
    name: cn('flex items-center gap-2', 'text-gray-300 font-medium', {
      'animate-pulse bg-slate-700 rounded-md': !name,
      'w-full h-5': !name,
    }),
    position: cn('text-gray-400 text-sm font-normal', {
      'animate-pulse bg-slate-700 rounded-md': !positon,
      'mt-1 w-full h-3': !positon,
    }),
  };

  return (
    <article className={styles.cardAuthor}>
      <h3 className='h4 text-white mb-4'>Autor del artículo</h3>
      <div className='flex gap-2 mb-2 lg:mb-0'>
        <span className='shrink-0 inline-flex h-10 w-10 rounded-full overflow-hidden text-white font-semibold'>
          {!photo ? (
            <div className={styles.photo} />
          ) : (
            <Image
              alt={`${name}-avatar`}
              src={photo}
              width={10}
              height={10}
              layout='responsive'
            />
          )}
        </span>
        <div style={{ width: !name ? '100%' : 'auto' }}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{positon}</p>
        </div>
      </div>
    </article>
  );
};
