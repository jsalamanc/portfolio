export type GetPageBySlugProps = {
  query: {
    type?: string;
    slug?: string;
  };
  props: string[];
  others: { depth: number };
};
