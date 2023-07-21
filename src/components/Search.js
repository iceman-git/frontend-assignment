import React from 'react';
import axios from 'axios';

const fetchProducts = async () => {
  const response= await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

const Search = () => {
  return (
    <div>
      <h1>We are in search page</h1>
    </div>
  )
}

export default Search;
