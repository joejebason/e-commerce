import logo from './logo.svg';
import './App.css';
import Header from './layout/header';
import home, { Home } from './component/home';
import ProductList from './component/productList';
import ProductModel from './component/productModel';
import ShoppingCart from './component/shoppingCart';
import { useState } from 'react';
import productsData from './data/productData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

 

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
       <Routes>
         <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} /> */}
      </Routes>
      </Router>

      {/* <Header cart={cart} />
      <div className="container mx-auto p-4">
        <Filter
          setCategory={setCategory}
          setSort={setSort}
          setSearch={setSearch}
        />
        <ProductList products={filteredProducts} addToCart={addToCart} setSelectedProduct={setSelectedProduct} />
        {selectedProduct && (
          <ProductModel product={selectedProduct} setSelectedProduct={setSelectedProduct} addToCart={addToCart} />
        )}
        
    </div> */}
    </div>
  );
}

export default App;
