import { IndexBackProps } from '@/lib/types/routes/Index.types';
import { IndexBackBLogProps } from '@/lib/types/routes/blog/Blog.types';
import { apiConstants } from '@/config/constants';
import { getFullByQuery, getPageBySlug } from '@/lib/api';

export const fetchData = async () => {
  const socialNetworks = await getPageBySlug<IndexBackProps>(
    { slug: apiConstants.generalConfig },
    ['metadata.social_network'],
    {
      depth: 2,
    }
  );
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
  return { ...res, blogEntries, socialNetworks };
};
