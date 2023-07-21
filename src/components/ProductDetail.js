import React from 'react';
import ProductDetailEntry from './ProductDetailEntry';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const ProductDetail = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <ProductDetailEntry/ >
    </QueryClientProvider>
  )
}

export default ProductDetail;