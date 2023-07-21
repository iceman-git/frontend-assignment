import React from 'react';
import { useQuery } from 'react-query';
import EachProduct from './EachProduct';
import axios from 'axios';

const fetchProducts = async () => {
  const response= await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

const Home = () => {

  const {data:products, isLoading, error} = useQuery('products', fetchProducts);

  if (isLoading){
    return (<div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>)
  }

  if (error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1> Welcome to OnlineStore</h1>
      <div>
        {
        products.map(product => <EachProduct key= {product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Home;
