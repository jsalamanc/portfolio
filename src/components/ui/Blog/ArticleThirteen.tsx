import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { humanizeDate } from '@/hooks/humanizeDate';

type ArticleThirteenProps = {
  title?: string;
  href?: string;
  thumbnail?: string;
  readingTime?: string;
  createdAt?: string;
  author?: {
    photo?: string;
    name?: string;
  };
};
export const ArticleThirteen = ({
  title,
  href,
  thumbnail,
  readingTime,
  createdAt,
  author,
}: ArticleThirteenProps) => {
  return (
    <article>
      <Link href={`${href}`}>
        <Image
          className='rounded-lg overflow-hidden'
          alt={`${title}`}
          src={`${thumbnail}`}
          loading='lazy'
          width={584}
          height={330}
          layout='responsive'
        />
      </Link>
      <h3 className='mt-3 font-semibold text-white mb-2 hover:underline'>
        <Link href={`${href}`}>{title}</Link>
      </h3>
      <div className='flex flex-wrap gap-y-1 gap-x-4 text-xs font-light mb-2'>
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
        <span className='!h-5 !w-5 sm:!h-6 sm:!w-6 inline-flex h-10 w-10 rounded-full overflow-hidden font-light'>
          <Image
            alt={`${author?.name}-avatar`}
            src={`${author?.photo}`}
            loading='lazy'
            width={10}
            height={10}
            layout='responsive'
          />
        </span>
        <p className='text-sm font-light'>{author?.name}</p>
      </div>
    </article>
  );
};
