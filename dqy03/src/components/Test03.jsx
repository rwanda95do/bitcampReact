import React from "react";
import "../css/Test03.css";
import Test03Modal from "./Test03Modal";
import { useState } from "react";

const Test03 = () => {
  const [open, isOpen] = useState(false);
  const onOpen = (e) => {
    console.log(e.target);
    isOpen(true);
  };
  // 상태변수와 상태변수를 바꾸는 함수는 같은 컴포넌트에 있어야한다
  const onClose = (e) => {
    isOpen(false);
  };
  return (
    <div>
      <button className="button" onClick={onOpen}>모달버튼</button>
      {open && <Test03Modal onClose={onClose}></Test03Modal>}
    </div>
  );
};

export default Test03;
