import React from "react";
import Test07Input from "./Test07Input";
import Test07Print from "./Test07Print";
import Test07Output from "./Test07Output";
import { useState } from "react";
import "../css/Test07.css";

const Test07Main = () => {
  const [dto, setDto] = useState({
    name: "",
    age: "",
    addr: "",
    phone: "",
  });
  const onInput = (e) => {
    const { name, value } = e.target;

    setDto({
      ...dto,
      [name]: value,
    });
  };

  const [count, setCount] = useState(1); //count = 1

  const Next = (e) => {
    setDto({
       ...dto,
    });
    e ? setCount(count + 1) : setCount(count - 1);
  };
  
  return (
    <div>
      {count === 1 && (
        <Test07Input
          dto={dto}
          count={count}
          onInput={onInput}
          Next={Next}
        ></Test07Input>
      )}
      {count === 2 && (
        <Test07Print
          dto={dto}
          count={count}
          Next={Next}
        ></Test07Print>
      )}
      {count === 3 && <Test07Output dto={dto} count={count}></Test07Output>}
    </div>
  );
};

export default Test07Main;
