
import React, { useState } from 'react'
import Header from '../layout/header'
import Filter from './filter'
import ProductList from './productList'
import ProductModel from './productModel'
import productsData from '../data/productData'
import ShoppingCart from './shoppingCart'

export const Home = () => {

    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("asc");
    const [search, setSearch] = useState("");
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (product) => {
      setCart(cart.filter((item) => item.id !== product.id));
    };
  
    const filteredProducts = productsData
      .filter((product) =>
        category ? product.category === category : true
      )
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sort === "asc" ? a.price - b.price : b.price - a.price
      );
  return (
    <div>

<Header cart={cart} />
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
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
    </div>
  )
}
