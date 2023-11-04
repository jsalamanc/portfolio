import { apiConstants } from '@/config/constants';
import { GetPageBySlugProps } from '@/lib/types/api.types';
import { createBucketClient } from '@cosmicjs/sdk';

export const bucket = createBucketClient({
  bucketSlug: `${process.env.COSMIC_BUCKET_SLUG}`,
  readKey: `${process.env.COSMIC_READ_KEY}`,
  writeKey: `${process.env.COSMIC_WRITE_KEY}`,
});

export const getPageBySlug = (
  query: GetPageBySlugProps['query'],
  props: GetPageBySlugProps['props'],
  others: GetPageBySlugProps['others']
) => {
  return new Promise((resolve, reject) => {
    bucket.objects
      .find(query)
      .props(props)
      .depth(others.depth)
      .then((res: any) => {
        resolve(res.objects[0]);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export const getByQuery = (query: any, props: string, others: any) => {
  return new Promise((resolve, reject) => {
    bucket.objects
      .find(query)
      .props(props)
      .limit(others.limit || apiConstants.limitItems)
      .then((res: any) => {
        resolve(res.objects);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export const getFullByQuery = (query: any, props: string, others: any) => {
  return new Promise((resolve, reject) => {
    bucket.objects
      .find(query)
      .props(props)
      .skip(others.skip)
      .limit(others.limit)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
