export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    next: { revalidate: 5 },
    method: 'GET',
  });
  const data = await res.json();
  return data;
};
