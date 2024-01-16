import { IndexBackProps } from '@/lib/types/routes/Index.types';
import { apiConstants } from '@/config/constants';
import { getFullByQuery, getPageBySlug } from '@/lib/api';
import { IndexBackBLogProps } from '@/lib/types/routes/blog/Blog.types';

export async function GET() {
  try {
    const res = await getPageBySlug<IndexBackProps>(
      { slug: apiConstants.home },
      ['metadata'],
      {
        depth: 2,
      }
    );

    const blogEntries = await getFullByQuery<IndexBackBLogProps>(
      { type: apiConstants.blog },
      ['slug', 'title', 'created_at', 'metadata', 'thumbnail'],
      {
        depth: 1,
      }
    );

    return Response.json({ ...res, blogEntries });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return Response.json(error);
  }
}
