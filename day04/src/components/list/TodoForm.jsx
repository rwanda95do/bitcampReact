import React, { useEffect, useRef, useState } from "react";
import styles from "../css/TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState(""); // 모든 상태변수가 다 부모에게 있을 필요는 없다 -> text는 todoForm에서만 사용 -> 다른데는 list에 담긴  text를 사용할 뿐

  const textRef = useRef(); // 포커스

  // 글 작성
  const onInput = (e) => {
    setText(e.target.value);
  };

  // 버튼
  const onSubmit = (e) => {
    e.preventDefault(); // 브라우저 이동 막기

    if (!text) return;

    onAdd(text); // 입력한 text를 리스트에 추가

    setText(""); // 초기화
    textRef.current.focus(); //포커스
  };

  return (
    <div className={styles.TodoForm}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onInput}
          ref={textRef}
          placeholder="해야 할 일을 입력해주세요"
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
