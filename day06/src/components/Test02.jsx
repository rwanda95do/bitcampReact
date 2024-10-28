import React, { useReducer } from "react";

// 초기화
const initialState = "PINK";

// 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return (state = "RED");
    case "GREEN":
      return (state = "GREEN");
    case "BLUE":
      return (state = "BLUE");
    case "PURPLE":
      return (state = "PURPLE");
    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const Test02 = () => {
  const [color, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 style={{ color: color }}>색 : {color} </h1>
      <p>
        <button onClick={() => dispatch({ type: "RED" })}>빨강</button>
        <button onClick={() => dispatch({ type: "GREEN" })}>초록</button>
        <button onClick={() => dispatch({ type: "BLUE" })}>파랑</button>
        <button onClick={() => dispatch({ type: "PURPLE" })}>보라</button>
        <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      </p>
    </div>
  );
};

export default Test02;
