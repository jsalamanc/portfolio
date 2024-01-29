import { Metadata } from 'next';
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

export default async function Blog() {
  return (
    <Container>
      <BlogPage />
    </Container>
  );
}
