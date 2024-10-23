import React from "react";
import { useState } from "react";

const Test02 = () => {
  const [chk, isCheck] = useState(true);

  const onInputChk = (e) => {
    console.log(e.target);
    const { checked } = e.target;
    isCheck(checked);
  };

  return (
    <div style={{ color: chk ? "blue" : "hotpink", fontSize: 25, margin: 30 }}>
      <input type="checkbox" checked={chk} onChange={onInputChk} /> Have a nice
      day!!
    </div>
  );
};

export default Test02;
