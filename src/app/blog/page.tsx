import { Metadata } from 'next';
import { apiConstants } from '@/config/constants';
import { getFullByQuery } from '@/lib/api';
import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Container } from '@/components/layout/Container';
import { BlogPage } from '@/components/pages/home/Blog/BlogPage';

export async function generateMetadata() {
  const data: any = await fetch(`${process.env.NEXT_URL_PAGE}/api/blog/`).then(
    (res) => res.json()
  );

  const metadata: Metadata = {
    title: data?.generalConfig?.metadata?.seo_metadata_blog?.title,
    description: data?.generalConfig?.seo_metadata_blog?.description,
    keywords: data?.generalConfig?.metadata?.seo_metadata_blog?.keywords,
  };

  return metadata;
}

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
export default async function Blog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blog'],
    queryFn: fetchData,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <BlogPage />
      </Container>
    </HydrationBoundary>
  );
}
