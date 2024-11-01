import React, { createContext, useContext, useReducer } from "react";

// export const CounterContext = createContext();

// 사용자가 만든 Hooks
const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);

const initialState = { counter: 0 };
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
