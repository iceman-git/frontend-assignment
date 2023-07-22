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
      <div className= "hero-section">
        <div>
          <h1 className= "text-grad">Welcome to OnlineStore</h1>
          <h5>Discover the Best Deals on Top Brands</h5>
        </div>
      </div>
      <div className='main-container'>
        {
        products.map(product => <EachProduct key= {product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Home;
