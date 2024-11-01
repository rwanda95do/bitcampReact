import React from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../contexts/TodosContext";

const TodoList = () => {
  const { list } = useTodos();
  return (
    <div>
      <h3>할 일 내용</h3>
      {list.map((item, index) => (
        <TodoItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
