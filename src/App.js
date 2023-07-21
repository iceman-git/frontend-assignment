import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Search from './components/SearchEntry';
import Cart from './components/CartPage';
import Layout from './components/Layout';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="product/:productId" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
