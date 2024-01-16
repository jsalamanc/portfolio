import { GlobalTypes } from '@/lib/types/routes/globals.types';

export declare namespace BlogRouteProps {
  interface BlogEntry {
    author?: {
      name?: string;
      position?: string;
      photo?: GlobalTypes.ImageTypes;
    };
    description?: string;
    category?: string;
    reading_time?: string;
    content?: string;
  }

  interface ObjectBlogEntry {
    slug?: string;
    title?: string;
    created_at?: string;
    metadata?: BlogEntry;
    thumbnail?: string;
  }
}

// TYPES OF FRONTEND VIEW
export type IndexBlogProps = GlobalTypes.ListEntriesProps<
  BlogRouteProps.ObjectBlogEntry[]
>;

// TYPES OF FETCHING
export type IndexFetchBlogProps = { data?: BlogRouteProps.ObjectBlogEntry[] };

// TYPES OF BACKEND
export type IndexBackBLogProps = {
  objects?: BlogRouteProps.ObjectBlogEntry[];
  total?: number;
};
