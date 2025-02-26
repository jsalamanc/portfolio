import React from 'react';
import { BlogRouteProps } from '@/lib/types/routes/blog/Blog.types';
import { ArticleThirteen } from '@/components/ui/Blog';

type ListArticlesProps = {
  title?: string;
  articles?: BlogRouteProps.ObjectBlogEntry[];
};
export const ListArticles = ({ title, articles = [] }: ListArticlesProps) => {
  return (
    <section aria-labelledby='post-title' className='bg-gray-900'>
      <div className='wrapper pt-[5rem] m-auto w-[95%] max-w-[82rem]'>
        <h2 id='post-title' className='text-white mb-4'>
          {title}
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8'>
          {articles?.map((object, index) => (
            <ArticleThirteen
              key={object.title}
              thumbnail={object.thumbnail}
              href={`/blog/post/${object.slug}`}
              title={object.title}
              readingTime={object.metadata?.reading_time}
              createdAt={object.created_at}
              author={{
                photo: object.metadata?.author?.photo?.imgix_url,
                name: object.metadata?.author?.name,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
