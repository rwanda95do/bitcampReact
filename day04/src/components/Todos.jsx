import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodosStyle from "../css/Todos.module.css";

const Todos = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]); // 할일이 저장되는 리스트
  const seq = useRef(1);

  const textRef = useRef(); // 포커스
  // 글 작성
  const onInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onAdd = (e) => {
    e.preventDefault(); // 브라우저 이동 막기
    setList([
      ...list,
      {
        seq: seq++,
        text,
      },
    ]);

    setText("");
    textRef.current.focus();
  };

  return (
    <div className={TodosStyle.Todos}>
      <h1>일정관리</h1>
      <TodoForm onAdd={onAdd} onInput={onInput} textRef={textRef}></TodoForm>
      <TodoList></TodoList>
    </div>
  );
};

export default Todos;
