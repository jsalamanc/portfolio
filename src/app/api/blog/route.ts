import { IndexBackBLogProps } from '@/lib/types/routes/blog/Blog.types';
import { apiConstants } from '@/config/constants';
import { getFullByQuery } from '@/lib/api';

export async function GET() {
  try {
    const res = await getFullByQuery<IndexBackBLogProps>(
      { type: apiConstants.blog },
      ['slug', 'title', 'created_at', 'metadata', 'thumbnail'],
      {
        depth: 1,
      }
    );

    return Response.json(res);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return Response.json(error);
  }
}
