'use client';

import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Provider = ({ children }: { children: ReactNode }) => {
  // Options
  const queryClientOptions = {
    defaultOptions: {
      // 5 * 1000
      queries: {
        staleTime: 10000,
      },
    },
  };

  // Initialize the query client.
  const queryClient = new QueryClient(queryClientOptions);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
