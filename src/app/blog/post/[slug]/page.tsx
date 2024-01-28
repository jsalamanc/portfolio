import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { BlogEntry } from '@/components/pages/home/Blog/BlogEntry';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data: any = await fetch(
    `${process.env.NEXT_URL_PAGE || ''}/api/blog/${params.slug}`
  ).then((res) => res.json());

  const metadata: Metadata = {
    title: data?.data?.metadata?.seo_metadata?.title,
    description: data?.data?.metadata?.seo_metadata?.description,
    keywords: data?.data?.metadata?.seo_metadata?.keywords,
  };

  return metadata;
}

export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <BlogEntry slug={params.slug} />
    </Container>
  );
}
