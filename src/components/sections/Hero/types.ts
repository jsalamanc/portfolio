import { IndexSectionsProps } from '@/lib/types/routes/Index.types';

export type HeroProps = {
  firstTitle?: IndexSectionsProps.HeroProps['first_title'];
  secondTitle?: IndexSectionsProps.HeroProps['second_title'];
  thirdTitle?: IndexSectionsProps.HeroProps['third_title'];
  description?: IndexSectionsProps.HeroProps['description'];
};
