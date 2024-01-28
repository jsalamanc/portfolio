'use client';

import { fetcher, useGetData } from '@/lib/api';
import { humanizeDate } from '@/hooks/humanizeDate';
import { InnerHtml } from '@/components/sections/InnerHtml/InnerHtml';
import { CardAuthor, HeroPost } from '@/components/ui/Blog';

export const BlogEntry = ({ slug = '' }: { slug?: string }) => {
  const { data, status, isLoading, isError } = useGetData<any>(
    [slug],
    slug
      ? async () => {
          const res = await fetcher.get(`/api/blog/${slug}`);
          return res.data;
        }
      : async () => ({})
  );
  if (data?.status === 404) {
    return <div className='h-screen'>error, la pagina no existe</div>;
  }
  const date = humanizeDate(data?.data?.published_at);
  return (
    <>
      <HeroPost
        title={data?.data?.title}
        description={data?.data?.metadata?.description}
        readTime={data?.data?.metadata?.reading_time}
        thumbnail={data?.data?.thumbnail}
        category={data?.data?.metadata?.category}
        date={date}
      />
      <section className='flex bg-gray-900'>
        <div className='ml-auto mr-auto mt-3 mb-3 w-[97%] max-w-[82rem] grid grid-cols-10 gap-8'>
          <div className='p-6 bg-gray-800 rounded-md border border-gray-700 col-span-full lg:col-span-7'>
            {!data?.data?.metadata?.content ? (
              <>
                <div className='w-[40%] h-6 animate-pulse bg-slate-700 rounded-md mb-3' />
                <div className='w-full h-56 animate-pulse bg-slate-700 rounded-md' />
                <div className='w-full h-36 animate-pulse bg-slate-700 rounded-md mt-3' />
              </>
            ) : (
              <InnerHtml
                className='innerHtml'
                data={data?.data?.metadata?.content}
              />
            )}
          </div>
          <aside className='col-span-full lg:col-span-3 flex flex-col gap-8'>
            <CardAuthor
              photo={data?.data?.metadata?.author?.photo?.imgix_url}
              name={data?.data?.metadata?.author?.name}
              positon={data?.data?.metadata?.author?.position}
            />
          </aside>
        </div>
      </section>
    </>
  );
};
