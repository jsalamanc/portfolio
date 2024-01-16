import { IndexSectionsProps } from '@/lib/types/routes/Index.types';
import { BlogRouteProps } from '@/lib/types/routes/blog/Blog.types';

export type BlogProps = {
  featuredPost?: IndexSectionsProps.BLogProps['featured_publication'];
  latestPosts?: BlogRouteProps.ObjectBlogEntry[];
};
