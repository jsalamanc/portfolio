import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { humanizeDate } from '@/hooks/humanizeDate';

type ArticleSecondaryProps = {
  url?: string;
  title?: string;
  thumbnail?: string;
  author?: {
    photo?: string;
    name?: string;
  };
  readingTime?: string;
  createdAt?: string;
};
export const ArticleSecondary = ({
  url,
  title,
  thumbnail,
  author,
  readingTime,
  createdAt,
}: ArticleSecondaryProps) => (
  <article className='grid grid-cols-5 gap-4 items-start'>
    <Link href={`${url}`} className='col-span-2 rounded-lg overflow-hidden'>
      <Image
        alt={`${title}`}
        src={`${thumbnail}`}
        loading='lazy'
        width={584}
        height={330}
        layout='responsive'
      />
    </Link>
    <div className='col-span-3'>
      <h3 className='h4 text-white font-medium mb-2 hover:underline'>
        <Link href={`${url}`}>{title}</Link>
      </h3>
      <div className='flex flex-wrap gap-y-1 gap-x-4 text-mobile-small sm:text-desktop-small text-neutral-text-light mb-2'>
        <div className='flex items-center gap-1 text-gray-400'>
          <i className='bi bi-clock' />
          <p>{readingTime}</p>
        </div>
        <div className='flex items-center gap-1 text-gray-400'>
          <i className='bi bi-calendar2' />
          <p>{humanizeDate(`${createdAt}`)}</p>
        </div>
      </div>
      <div className='flex gap-2 items-center text-gray-300'>
        <span className='!h-5 !w-5 sm:!h-6 sm:!w-6 inline-flex h-10 w-10 rounded-full overflow-hidden font-semibold'>
          <Image
            alt='Alvaro-avatar'
            src={`${author?.photo}`}
            loading='lazy'
            width={10}
            height={10}
            layout='responsive'
          />
        </span>
        <p>{author?.name}</p>
      </div>
    </div>
  </article>
);
