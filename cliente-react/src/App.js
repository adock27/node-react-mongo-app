// import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


import Products from './components/products/Products';
import Books from './pages/Books';
import { Add } from './pages/Add';
import { Update } from './pages/Update';
import { ProductsApp } from './components/products/ProductsAdd';
import { ProductsUpdate } from './components/products/ProductsUpdate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products-add' element={<ProductsApp />} />
          <Route path='/products-update/:id' element={<ProductsUpdate />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
