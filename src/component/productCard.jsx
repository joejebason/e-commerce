import React from "react";

const ProductCard = ({ product, addToCart, setSelectedProduct }) => {
  return (
    <>
    <div className="border  rounded-lg p-4">
    <div className="flex justify-center" >
      <img
        src={product.image}
        alt={product.name}
        className="h-40  mb-2"
        onClick={() => setSelectedProduct(product)}
      />
      </div>
      <h2 className="text-lg font-bold text-grey-300">{product.name}</h2>
      <p className="text-gray-600 text-lg font-normal py-2">${product.price}</p>
      <button
        className=" text-[0.875rem] leading-5 font-semibold text-grey-300 w-[7.5rem] h-10 bg-yellow-400 rounded-[0.1875rem] py-2 px-4"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
    </>
  );
};

export default ProductCard;
