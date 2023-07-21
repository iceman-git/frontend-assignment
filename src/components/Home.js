import React from 'react';
import HomeEntry from './HomeEntry';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <HomeEntry/ >
    </QueryClientProvider>
  )
}

export default Home;
