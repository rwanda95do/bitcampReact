import React from "react";

const Test07Print = ({ dto, onPrev, onNext }) => {
  const { name, age, addr, phone } = dto; // 구조분해
  return (
    <div className="wrap">
      <ul>
        <li>
          이름: <em>{name}</em>
        </li>
        <li>
          나이: <em>{age}</em>
        </li>
        <li>
          주소: <em>{addr}</em>
        </li>
        <li>
          전화번호: <em>{phone}</em>
        </li>
      </ul>
      <p style={{ textAlign: "center" }}>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default Test07Print;
