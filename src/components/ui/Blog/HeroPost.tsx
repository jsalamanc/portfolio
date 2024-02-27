import { cn } from '@/hooks/cn';
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
  const styles = {
    title: cn('mb-4', 'text-white font-semibold text-xl md:text-2xl', {
      'animate-pulse bg-slate-700 rounded-md': !title,
      'w-[90%] h-10': !title,
    }),
    description: cn(
      'mb-5',
      'leading-7 text-normal font-light',
      'text-gray-300',
      {
        'animate-pulse bg-slate-700 rounded-md': !description,
        'w-[100%] h-[8rem]': !description,
      }
    ),
    extraInfo: cn('flex flex-wrap gap-2 mb-4', {
      'animate-pulse bg-slate-700 rounded-md': !category,
      'w-[60%] h-6': !category,
    }),
    banner: cn(
      'col-span-full lg:col-span-5 order-1 lg:order-2 rounded-lg overflow-hidden',
      {
        'animate-pulse bg-slate-700 rounded-md': !category,
        'w-full h-[350px]': !category,
      }
    ),
  };
  return (
    <section className='pt-[5.25rem] pb-8 bg-gray-800'>
      <div className='ml-auto mr-auto w-[97%] max-w-[82rem] grid grid-cols-10 gap-8 items-center'>
        <div className='col-span-full lg:col-span-5 order-2 lg:order-1'>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.extraInfo}>
            {!category ? null : (
              <>
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
              </>
            )}
          </div>
        </div>
        <div className={styles.banner}>
          {!thumbnail ? null : (
            <Image
              className='w-full aspect-video object-cover'
              alt={title}
              loading='lazy'
              width={584}
              height={330}
              layout='responsive'
              src={thumbnail}
            />
          )}
        </div>
      </div>
    </section>
  );
};
