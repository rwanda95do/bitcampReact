import React from "react";

const TodoItem = ({ item, onDel }) => {
  const { seq, text } = item;
  return (
    <li>
      <span>
        <em>{item.text}</em>
        <button onClick={() => onDel(seq)}>삭제</button>
      </span>
    </li>
  );
};

export default TodoItem;
