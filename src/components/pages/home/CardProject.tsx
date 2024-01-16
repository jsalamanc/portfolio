import React from 'react';
import { cn } from '@/hooks/cn';

type CardProjectProps = {
  background: string;
  title: string;
  description: string;
};

export const CardProject = ({
  background,
  title,
  description,
}: CardProjectProps) => {
  /*
   * ------ STYLES OF CARD ------ *
   */

  const styles = {
    card: cn(
      'backdrop-blur[2px] overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition duration-150',
      'flex flex-col items-start h-full w-fit max-w-[505px]',
      'dark:border-dark-gray-200 dark:bg-gray-900'
    ),
    title: cn(
      'text-[24px] font-extrabold leading-[29.05px]',
      'text-gray-700 dark:text-gray-200  lg:text-[28px] lg:leading-8'
    ),
    description: cn(
      'text-base text-gray-500',
      'md:text-[20px] md:leading-[30px]'
    ),
  };

  /*
   * ------ HTML OF CARD ------ *
   */

  return (
    <div className={styles.card}>
      <div
        className='w-full h-[10rem] bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className='flex flex-col items-start gap-y-2 p-6 lg:gap-y-4'>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
