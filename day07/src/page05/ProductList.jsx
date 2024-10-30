import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data";

const ProductList = () => {
  return (
    <div className="products">
      <h2>토심이의 일상 리스트</h2>
      <div>
        {data.map((item) => (
          <article key={item.id}>
            <Link to={`/productList/${item.id}`}>
              <h3>{item.name}</h3>
              <img src={item.photo} alt={item.description} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
