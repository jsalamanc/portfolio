'use client';

import { usePathname } from 'next/navigation';
import { apiConstants } from '@/config/constants';
import { IndexBlogProps } from '@/lib/types/routes/blog/Blog.types';
import { getFullByQuery, useGetData } from '@/lib/api';
import { Slider } from '@/components/ui/sliders/Slider';
import { ListArticles } from '@/components/ui/Blog/ListArticles';

const fetchData = async () => {
  const res = await getFullByQuery(
    { type: apiConstants.blog },
    ['title', 'slug', 'created_at', 'thumbnail', 'metadata'],
    {
      depth: 1,
    }
  );
  return res;
};
export const BlogPage = () => {
  const router = usePathname();
  const { data, status } = useGetData<IndexBlogProps>(
    [router],
    router ? fetchData : () => ({})
  );
  if (status === 'error') <p>error...</p>;

  return (
    <>
      <div className='mt-[5rem]'>
        <Slider
          articles={
            data?.objects?.length === 1
              ? data?.objects
              : data?.objects?.slice(0, 4)
          }
        />
      </div>
      <ListArticles title='Publicaciones' articles={data?.objects} />
    </>
  );
};
