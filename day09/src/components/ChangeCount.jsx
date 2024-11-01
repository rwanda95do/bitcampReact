import React, { useContext } from "react";
import { ChangeCountContext } from "../contexts/ChangeCountContext";

const ChangeCount = () => {
  const { count, increment, decrement } = useContext(ChangeCountContext);
  return (
    <div>
      <h1>카운트 : {count}</h1>
      <p>
        <button onClick={() => increment(10)}>10 증가</button>
        <button onClick={() => increment(50)}>50 증가</button>
        <button onClick={() => decrement(40)}>40 감소</button>
        <button onClick={() => decrement(30)}>30 감소</button>
      </p>
    </div>
  );
};

export default ChangeCount;
