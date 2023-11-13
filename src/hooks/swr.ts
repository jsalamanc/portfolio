import useSWR from 'swr';
import { fetcher } from './fetcher';

export const useFetch = <Props>(url: string) => {
  const { data, error, isLoading } = useSWR<Props>(url, fetcher);

  return {
    data,
    isLoading,
    error,
  };
};
