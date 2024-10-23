import React from "react";

const Display = ({ name }) => {
  return (
    <div>
      <h2>Display 컴포넌트</h2>
      <p>
        내가 좋아하는 동물은 <span style={{ color: "red" }}>{name}</span>{" "}
        입니다.
      </p>
    </div>
  );
};

export default Display;
