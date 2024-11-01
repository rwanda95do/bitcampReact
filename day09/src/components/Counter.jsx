import React, { useContext } from "react";
// import { CounterContext} from "../contexts/CounterContext";
// import { ToggleContext } from "../contexts/ToggleContext";

// 사용자가 만든 Hooks import
import { useCounter } from "../contexts/CounterContext";
import { useToggle } from "../contexts/ToggleContext";

const Counter = () => {
  //   const { state, dispatch } = useContext(CounterContext);
  //   const { state2, dispatch2 } = useContext(ToggleContext);

  //사용자가 만든 Hooks이용
  const { state, dispatch } = useCounter();
  const { state2, dispatch2 } = useToggle();
    
  return (
    <div>
      <h1>카운터 {state.counter}</h1>
      <h1 style={{ color: state2.isChk ? "red" : "#000" }}>
        토글:{`${state2.isChk}`}
      </h1>

      <p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
        <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      </p>
      <p>
        <button onClick={() => dispatch2({ type: "TOGGLE" })}>toggle</button>
        <button onClick={() => dispatch2({ type: "TRUE" })}>true</button>
        <button onClick={() => dispatch2({ type: "FALSE" })}>false</button>
      </p>
    </div>
  );
};

export default Counter;
