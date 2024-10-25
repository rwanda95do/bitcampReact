import React from "react";
import TodoItem from "./TodoItem";
import styles from "../css/TodoList.module.css";

const TodoList = ({ list, onDel }) => {
  return (
    <div className={styles.TodoList}>
      <ul>
        {list.map((item) => (
          <TodoItem key={item.seq} item={item} onDel={onDel}></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
