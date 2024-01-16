import { GlobalTypes } from '@/lib/types/routes/globals.types';
import { IndexSectionsProps } from '@/lib/types/routes/Index.types';

export type AboutMeProps = {
  firstSection?: {
    image?: GlobalTypes.ImageTypes;
    title?: string;
    description?: string;
  };
  secondSection?: {
    image?: GlobalTypes.ImageTypes;
    title?: string;
    description?: string;
    skills?: {
      percentage?: string;
      skill?: string;
    }[];
  };
};
