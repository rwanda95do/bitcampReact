import React, { createContext, useContext, useReducer } from "react";

//export const ToggleContext = createContext();

// 사용자가 만든 Hooks
const ToggleContext = createContext();
export const useToggle = () => useContext(ToggleContext);


const toggleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { isChk: !state.isChk };
    case "TRUE":
      return { isChk: true };
    case "FALSE":
      return { isChk: false };
    default:
      return state;
  }
};

const ToggleProvider = ({ children }) => {
  const [state2, dispatch2] = useReducer(toggleReducer, { isChk: false });

  return (
    <ToggleContext.Provider value={{ state2, dispatch2 }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
