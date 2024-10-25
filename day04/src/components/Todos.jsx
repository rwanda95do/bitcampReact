import React, { useEffect, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import styles from "../css/Todos.module.css";

const Todos = () => {
  // const [list, setList] = useState([]); // 할일이 저장되는 리스트
  // 로컬 스토리지 읽어오기 : 처음엔 스토리지가 비어있으니 빈배열, 아니면 스토리지에 저장된 데이터 읽어오기
  // 스토리지 확인은 f12 application
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  ); //storage에 list라고 저장된 값을 가져와 json형식으로 바꿔라

  // 로컬 스토리지 저장하기 : 리스트에 내용이 바뀔때마다 스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list)); // json의 형식을 문자열로 바꿔서 list에 넣는다
  }, [list]);

  // const seq = useRef(1)이면, 랜더링(초기화)하면 1부터 다시 시작하게 된다
  const seq = useRef(list.length + 1); // 시퀀스 : 한번만들어진 시퀀스는 다시 만들어지지않는다

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
