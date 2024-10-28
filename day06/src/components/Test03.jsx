import React from "react";
import { useReducer } from "react";

const initialState = { color: "pink" }; // 객체

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { color: action.text };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Test03 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={{ color: state.color }}>색 : {state.color} </h1>
      <p>
        <button onClick={() => dispatch({ type: "CHANGE_COLOR", text: "red" })}>
          빨강
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_COLOR", text: "green" })}
        >
          초록
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_COLOR", text: "blue" })}
        >
          파랑
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_COLOR", text: "purple" })}
        >
          보라
        </button>
        <button onClick={() => dispatch({ type: "RESET", text: "reset" })}>
          초기화
        </button>
      </p>
    </div>
  );
};

export default Test03;
