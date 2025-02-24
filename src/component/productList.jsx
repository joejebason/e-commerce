import React from "react";
import ProductCard from "./productCard";


const ProductList = ({ products, addToCart, setSelectedProduct }) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </div>
    </>
  );
};

export default ProductList;
