import React from "react";

const Filter = ({ setCategory, setSort, setSearch }) => {
  return (
    <div className="md:flex md:justify-between items-center mb-4">
        <div>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded outline-none"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>
      </div>
      <div className="my-4 md:my-0" >
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-500 p-2 rounded outline-none w-[20rem]"
      />
      </div>
      <div>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded outline-none"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      </div>
    </div>
  );
};

export default Filter;
