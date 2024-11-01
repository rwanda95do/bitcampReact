import React, { createContext, useState } from "react";

// Context 선언
export const CountContext = createContext();

const CountProvider = (props) => {
  // state, 함수 등 모든 처리는 공급자가 한다.
  // Provider에는 value라는 props가 있으며, 이것이 데이터를 하위 컴포넌트에게 전달한다.
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {/* children은 부모 컴포넌트에서 자식 엘레먼트나 컴포넌트를 포함할 때 자동으로 전달된다 */}
      {props.children}
    </CountContext.Provider>
  );
};

export default CountProvider;
