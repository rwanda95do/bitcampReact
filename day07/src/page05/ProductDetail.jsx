import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { detailId } = useParams();

  return (
    <div className="item">
      <h2>토심이의 상세페이지</h2>
      <h3>제품명: / 가격: </h3>
      <img src="" alt="" />
      <p>제품 설명 : </p>
      <p>
        <button>Home</button>
        <button>ProductList</button>
      </p>
    </div>
  );
};

export default ProductDetail;
