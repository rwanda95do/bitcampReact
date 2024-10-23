import React from "react";

const Test07Print = ({ dto, count, Next }) => {
  const { name, age, addr, phone } = dto;
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
      <p>
        <button onClick={() => Next(false)}>이전</button>
        <button onClick={() => Next(true)}>다음</button>
      </p>
    </div>
  );
};

export default Test07Print;
