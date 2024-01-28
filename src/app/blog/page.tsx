import { Metadata } from 'next';
import { apiConstants } from '@/config/constants';
import { getFullByQuery } from '@/lib/api';
import { Container } from '@/components/layout/Container';
import { BlogPage } from '@/components/pages/home/Blog/BlogPage';
import { IndexBlogProps } from '@/lib/types/routes/blog/Blog.types';

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
  const res = await getFullByQuery<IndexBlogProps>(
    { type: apiConstants.blog },
    ['title', 'slug', 'published_at', 'thumbnail', 'metadata'],
    {
      depth: 1,
    }
  );
  return res;
};
export default async function Blog() {
  let data: any = await fetch(
    'https://api.cosmicjs.com/v3/buckets/web-jsalamanc-production/objects?pretty=true&query=%7B%22type%22:%22blogs%22%7D&limit=10&read_key=fuLdzlYDeNIbB34rLJJ2K1GiN1T6BJvp8L74utQMIkNDIWaTJZ&depth=1&props=slug,title,metadata,thumbnail,published_at',
    {
      next: { revalidate: 500 },
    }
  );
  data = await data.json();
  return (
    <Container>
      <BlogPage {...data} />
    </Container>
  );
}
