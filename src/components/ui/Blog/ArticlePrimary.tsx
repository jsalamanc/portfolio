import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { humanizeDate } from '@/hooks/humanizeDate';

type ArticlePrimaryProps = {
  url?: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  author?: {
    photo?: string;
    name?: string;
  };
  readingTime?: string;
  createdAt?: string;
};
export const ArticlePrimary = ({
  url,
  title,
  thumbnail,
  description,
  author,
  readingTime,
  createdAt,
}: ArticlePrimaryProps) => {
  return (
    <article className='rounded-lg overflow-hidden bg-gray-800 shadow-md'>
      <div className='relative'>
        <Link href={`${url}`}>
          <Image
            alt={`${title}`}
            loading='lazy'
            width={584}
            height={330}
            className='aspect-video object-cover w-full'
            src={`${thumbnail}`}
            layout='responsive'
          />
          <p className='absolute px-1 text-desktop-small font-semibold text-white translate-y-1/2 left-4 bottom-0 bg-red-400 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400 transition-colors rounded'>
            Post destacado
          </p>
        </Link>
      </div>
      <div className='p-4'>
        <h2 className='text-white text-lg md:text-2xl font-semibold hover:underline mb-4'>
          <Link href={`${url}`}>{title}</Link>
        </h2>
        <p className='text-gray-400 leading-7'>{description}</p>
      </div>
      <footer className='flex flex-wrap gap-2 justify-between py-2 px-4 text-gray-400 border-t border-t-neutral-border bg-gray-900'>
        <div className='flex items-center gap-2'>
          <span className='!h-6 w-6 inline-flex h-10 w-10 rounded-full overflow-hidden text-white font-semibold text-desktop-smaller'>
            <Image
              alt={`${author?.name}-avatar`}
              src={`${author?.photo}`}
              width={10}
              height={10}
              layout='responsive'
            />
          </span>
          <p>{author?.name}</p>
        </div>
        <div className='flex gap-4 text-mobile-small md:text-desktop-small'>
          <div className='flex items-center gap-1'>
            <i className='bi bi-clock' />
            <p>{readingTime}</p>
          </div>
          <div className='flex items-center gap-1'>
            <i className='bi bi-calendar2' />
            <p>{humanizeDate(`${createdAt}`)}</p>
          </div>
        </div>
      </footer>
    </article>
  );
};
