import React, { useEffect } from "react";
import TodoFormStyle from "../css/TodoForm.module.css";

const TodoForm = ({ onAdd, onInput, textRef }) => {
  useEffect(() => {
    console.log("으아!!");
  }, []);
  return (
    <>
      <form className={TodoFormStyle.TodoForm} onSubmit={onAdd}>
        <input type="text" name="text" onInput={onInput} ref={textRef} />
        <button type="submit" onAdd={onAdd}>
          추가
        </button>
      </form>
    </>
  );
};

export default TodoForm;
