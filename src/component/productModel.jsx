import React from "react";

const ProductModel = ({ product, setSelectedProduct, addToCart }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-1/3">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
        <p>{product.description}</p>
        <p className="text-gray-600">${product.price}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={() => {
            addToCart(product);
            setSelectedProduct(null);
          }}
        >
          Add to Cart
        </button>
        <button
          className="mt-2 text-red-500"
          onClick={() => setSelectedProduct(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModel;
