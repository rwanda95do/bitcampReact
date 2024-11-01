import React from "react";
import { useTodos } from "../contexts/TodosContext";

const TodoItem = ({ item, index }) => {
  return (
    <div>
      <input type="checkbox" id={index} />
      {item}
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
