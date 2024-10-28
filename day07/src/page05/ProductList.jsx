import React, { useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [list, setList] = useState(data);

  return (
    <div className="products">
      <h2>토심이의 일상 리스트</h2>
      <div>
        {list.map((item) => (
          <article key={item.id}>
            <h3>
              <Link to={`/productList/${item.id}`} state={data}>{item.name}</Link>
            </h3>
            <img src={item.photo} alt={item.description} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
