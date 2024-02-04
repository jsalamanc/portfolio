import {
  BlogRouteProps,
  IndexBlogProps,
} from '@/lib/types/routes/blog/Blog.types';
import { GlobalTypes } from './globals.types';

export declare namespace IndexSectionsProps {
  interface HeroProps {
    first_title?: string;
    second_title?: string;
    third_title?: string;
    description?: string;
    tecnology?: any[];
  }

  interface AboutMeProps {
    first_image?: GlobalTypes.ImageTypes;
    first_title?: string;
    first_description?: string;
    second_image?: GlobalTypes.ImageTypes;
    second_title?: string;
    second_description?: string;
    list_of_skills?: {
      percentage?: string;
      skill?: string;
    }[];
  }

  interface BLogProps {
    featured_publication?: GlobalTypes.EntryTypes<BlogRouteProps.BlogEntry>[];
  }
}

export type SectionsProps = {
  seo_metadata?: GlobalTypes.SeoMetadata;
  hero: IndexSectionsProps.HeroProps;
  about_me?: IndexSectionsProps.AboutMeProps;
  blog: IndexSectionsProps.BLogProps;
};

// TYPES OF FRONTEND VIEW
export type IndexProps = {
  metadata?: SectionsProps;
  blogEntries?: IndexBlogProps;
  socialNetworks?: GlobalTypes.SocialNetworks;
};

// TYPES OF BACKEND
export type IndexBackProps = SectionsProps;
