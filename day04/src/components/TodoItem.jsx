import React from "react";

const TodoItem = ({ item }) => {
  return (
    <li>
      <span>
        <em>{item.text}</em>
        <button>삭제</button>
      </span>
    </li>
  );
};

export default TodoItem;
