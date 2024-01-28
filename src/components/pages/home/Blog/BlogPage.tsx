'use client';

import { IndexBlogProps } from '@/lib/types/routes/blog/Blog.types';
import { useRouter, usePathname } from 'next/navigation';
import { apiConstants } from '@/config/constants';
import { getFullByQuery, useGetData } from '@/lib/api';
import { ArticleThirteen } from '@/components/ui/Blog';

const fetchData = async () => {
  const res = await getFullByQuery(
    { type: apiConstants.blog },
    ['title', 'slug', 'published_at', 'thumbnail', 'metadata'],
    {
      depth: 1,
    }
  );
  return res;
};
export const BlogPage = () => {
  const router = usePathname();
  const { data, status, isLoading } = useGetData<IndexBlogProps>(
    [router],
    fetchData
  );
  if (status === 'error') <p>error...</p>;
  return (
    <section aria-labelledby='post-title' className='bg-gray-900'>
      <div className='wrapper pt-[5rem] m-auto w-[95%] max-w-[82rem]'>
        <h2 id='post-title' className='text-white mb-4'>
          Publicaciones
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8'>
          {data?.objects?.map((object, index) => (
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
