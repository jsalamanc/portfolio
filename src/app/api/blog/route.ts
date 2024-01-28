import { IndexBackBLogProps } from '@/lib/types/routes/blog/Blog.types';
import { apiConstants } from '@/config/constants';
import { getFullByQuery, getPageBySlug } from '@/lib/api';

export async function GET() {
  try {
    const generalConfig = await getPageBySlug<any>(
      { slug: apiConstants.generalConfig },
      ['metadata'],
      {
        depth: 1,
      }
    );

    const res = await getFullByQuery<IndexBackBLogProps>(
      { type: apiConstants.blog },
      ['slug', 'title', 'created_at', 'metadata', 'thumbnail'],
      {
        depth: 1,
      }
    );

    return Response.json({ generalConfig, ...res });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return Response.json(error);
  }
}
