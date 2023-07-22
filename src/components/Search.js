import React from 'react';
import axios from 'axios';
import EachProduct from './EachProduct';
import { useQuery } from 'react-query';
import {useSearchParams} from 'react-router-dom';

const fetchProducts = async () => {
  const response= await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchItem= searchParams.get('query') || '';

  const {data:products, isLoading, error} = useQuery('products', fetchProducts);
  if (isLoading){
    return <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
  }
    
  if (error){
    return <div>Error: {error.message}</div>
  }

  const filteredProducts= products.filter(product=>(
    product.title.toLowerCase().includes(searchItem.toLowerCase()) || product.category.toLowerCase().includes(searchItem.toLowerCase())
  ))

  if(filteredProducts.length===0){
    return <h1 className="no-item-message">No item found for the search</h1>
  }

  return (
    <>
    <div className='search'>Search results for {searchItem}...</div>
    <div className='main-container'>
      {filteredProducts.map(product=> <EachProduct key= {product.id} product={product} />)}
    </div>
    </>
  )
}

export default Search;