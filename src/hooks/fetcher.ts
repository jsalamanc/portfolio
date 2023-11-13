export const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'access-control-allow-credentials': `${process.env.API_KEY}`,
    },
  }).then((res) => res.json());
