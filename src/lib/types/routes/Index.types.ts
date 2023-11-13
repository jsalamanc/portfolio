import { GenericProps } from './globals.types';

export type AboutMeExtrasItemProps = {
  label?: string;
  items?: string;
};

export type AboutMeExtrasProps = AboutMeExtrasItemProps[];

export type SectionsProps = {
  hero: {
    first_title?: string;
    second_title?: string;
    third_title?: string;
    description?: string;
    tecnology?: any[];
  };
  about_me?: {
    description?: string;
    extras?: AboutMeExtrasProps;
  };
};

export type IndexProps = GenericProps<SectionsProps>;
