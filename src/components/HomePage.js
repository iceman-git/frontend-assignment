import React from 'react';
import HomeEntry from './HomeEntry';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const HomePage = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <HomeEntry/ >
    </QueryClientProvider>
  )
}

export default HomePage;