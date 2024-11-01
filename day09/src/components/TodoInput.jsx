import React, { useContext, useState } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { CountContext } from "../contexts/CountContext";
import { useTodos } from "../contexts/TodosContext";

const TodoInput = () => {
  const { color } = useContext(ColorContext);
  const { count } = useContext(CountContext);

  const { add, changeInputValue, inputValue, seq, list } = useTodos();
  // ------------

  return (
    <div>
      <h1 style={{ color: color }}>
        할 일 만들기, {color}, {count}
      </h1>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={changeInputValue}
      />
      <button onClick={() => add(inputValue)}>추가</button>
    </div>
  );
};

export default TodoInput;
