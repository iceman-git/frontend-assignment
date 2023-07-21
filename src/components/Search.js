import React from 'react';
import SearchEntry from './SearchEntry';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Search = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <SearchEntry />
    </QueryClientProvider>
  )
}

export default Search;