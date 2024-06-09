import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Products';
import Product from './component/Product';
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route index={true} path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/products' element={<Products />} />
    <Route path='products/:id' element={<Product />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  
  
);

