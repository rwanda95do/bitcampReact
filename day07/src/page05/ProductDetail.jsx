import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./data";

const ProductDetail = () => {
  const { productId } = useParams(); // 주소를 통해 값을 전달 받을 경우

  const item = data.find((item) => item.id === productId);

  // 버튼 이동
  const navigate = useNavigate();
  const onHome = () => {
    navigate("/");
  };

  return (
    <div className="item">
      <h2>토심이의 상세페이지</h2>
      <h3>
        제품명: {item.name} / 가격: {item.price}{" "}
      </h3>
      <p>
        <img src={item.photo} alt={item.description} />
      </p>
      <p>제품 설명 : {item.description}</p>
      <p>
        <button onClick={onHome}>Home</button>
        <button onClick={() => navigate(-1)}>ProductList</button>
      </p>
    </div>
  );
};

export default ProductDetail;
