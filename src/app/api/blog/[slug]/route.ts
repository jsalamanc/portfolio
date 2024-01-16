import { apiConstants } from '@/config/constants';
import { getPageBySlug } from '@/lib/api';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const res = await getPageBySlug(
      { slug: params.slug, type: apiConstants.blog },
      ['title', 'slug', 'published_at', 'thumbnail', 'metadata'],
      {
        depth: 1,
      }
    );

    return Response.json({ data: res });
  } catch (error) {
    return Response.json(error);
  }
}
