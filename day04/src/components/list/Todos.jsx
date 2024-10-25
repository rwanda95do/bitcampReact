import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import styles from "../css/Todos.module.css";

const Todos = () => {
  const [list, setList] = useState([]); // 할일이 저장되는 리스트
  const seq = useRef(1); // 시퀀스 : 한번만들어진 시퀀스는 다시 만들어지지않는다

  const onAdd = (text) => {
    setList([
      ...list,
      {
        seq: seq.current++,
        text,
      },
    ]);
  };

  const onDel = (seq) => {
    setList(list.filter((item) => item.seq !== seq));
  };

  return (
    <div className={styles.Todos}>
      <h1>일정관리</h1>
      <TodoForm onAdd={onAdd}></TodoForm>
      <TodoList list={list} onDel={onDel}></TodoList>
    </div>
  );
};

export default Todos;
