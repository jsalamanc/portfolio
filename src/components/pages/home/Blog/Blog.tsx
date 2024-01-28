import React from 'react';
import { BlogProps } from './types';
import { ArticleSecondary } from '@/components/ui/Blog/ArticleSecondary';
import { ArticlePrimary } from '@/components/ui/Blog/ArticlePrimary';

export const Blog = ({ featuredPost = [], latestPosts = [] }: BlogProps) => {
  return (
    <section className='bg-gray-900'>
      <div className='pt-10 ml-auto mr-auto max-w-[82rem] pl-[1rem] pr-[1rem]'>
        <h1 className=' text-white text-2xl sm:text-3xl font-semibold'>
          Publicaciones
        </h1>
      </div>
      <div className='ml-auto mr-auto max-w-[82rem] pl-[1rem] pr-[1rem] w-[100%] flex flex-col lg:items-start lg:grid grid-cols-2 gap-8 pt-10 pb-16'>
        <ArticlePrimary
          url={`/blog/post/${featuredPost[0]?.slug}`}
          title={`${featuredPost[0]?.title}`}
          thumbnail={featuredPost[0]?.thumbnail || '/'}
          description={`${featuredPost[0]?.metadata?.description}`}
          author={{
            photo: featuredPost[0]?.metadata?.author?.photo?.imgix_url || '/',
            name: featuredPost[0]?.metadata?.author?.name,
          }}
          readingTime={featuredPost[0]?.metadata?.reading_time}
          createdAt={featuredPost[0]?.created_at}
        />
        <div>
          <h6 className='mb-5 text-white text-lg font-medium'>
            Ultimas Publicaciones
          </h6>
          <div className='flex flex-col gap-8'>
            {latestPosts?.map((object, index) => (
              <ArticleSecondary
                key={object?.title}
                url={`/blog/post/${object?.slug}`}
                title={object?.title}
                thumbnail={object?.thumbnail || '/'}
                author={{
                  photo: object?.metadata?.author?.photo?.imgix_url || '/',
                  name: object?.metadata?.author?.name,
                }}
                readingTime={object?.metadata?.reading_time}
                createdAt={object?.created_at}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
