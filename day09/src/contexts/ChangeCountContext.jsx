import React, { createContext, useState } from "react";

export const ChangeCountContext = createContext();

const ChangeCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = (step) => {
    setCount(count + step);
  };
  const decrement = (step) => {
    setCount(count - step);
  };
  return (
    <ChangeCountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </ChangeCountContext.Provider>
  );
};

export default ChangeCountProvider;
