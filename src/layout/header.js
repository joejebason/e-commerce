import React from "react";

const Header = ({ cart }) => {
  return (
    <>
    <nav className="bg-black p-4 text-white flex  justify-between">
      <div>
        <h1 className="text-xl font-bold">E-Shop</h1>
       
      </div>
      <div className="" >
      <button className="mr-2 text-[0.875rem] leading-5 font-semibold text-grey-300 w-[7.5rem] h-10 bg-yellow-400 rounded-[0.1875rem] py-2 px-4">
      {cart.length} items Cart
      </button> 
        
      </div>
    </nav>
    </>
  );
};

export default Header;
