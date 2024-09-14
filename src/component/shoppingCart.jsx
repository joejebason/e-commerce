import React from "react";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
    <div className="p-4 bg-gray-200 rounded-lg mt-4">
      <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between items-center mt-5 mb-2">
            <span className="text-lg font-medium text-gray-900" >{item.name}</span>
            <span className="text-lg font-medium text-gray-900">${item.price}</span>
            <button className=" text-[0.875rem] leading-5 font-semibold text-white w-[7.5rem] h-10 bg-red-500 rounded-[0.1875rem] py-2 px-4" onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p className="text-lg font-medium text-gray-900 mt-4" >Total: ${total}</p>
    </div>
    </>
  );
};

export default ShoppingCart;
