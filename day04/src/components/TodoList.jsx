import React from "react";
import TodoItem from "./TodoItem";
import TodoListStyle from "../css/TodoList.module.css";

const TodoList = ({ list }) => {
  return (
    <div className={TodoListStyle.TodoList}>
      <ul>
        {list.map((item) => (
          <TodoItem item={item}></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
