import React from "react";
import Test07Input from "./Test07Input";
import Test07Print from "./Test07Print";
import Test07Output from "./Test07Output";
import { useState } from "react";
import "../../css/Test07.css";

const Test07Main = () => {
  const [dto, setDto] = useState({
    name: "",
    age: "",
    addr: "",
    phone: "",
  });
  const { name, age, addr, phone } = dto; //구조분해할당
  const [count, setCount] = useState(1); //count = 1

  // 함수
  const onInput = (e) => {
    console.log(e.target);
    // name이 필요한 이유 : 누가 바뀌었는지 알아야하기 때문에, value는 값을 알기위해
    const { name, value } = e.target;
    // dto를 변경하겠다.
    setDto({
      ...dto, // 기존의 값을 유지하기 위해서
      [name]: value,
    });
  };

  const onNext = () => {
    setCount(count + 1);
  };
  const onPrev = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {count === 1 && (
        <Test07Input dto={dto} onInput={onInput} onNext={onNext}></Test07Input>
      )}
      {count === 2 && (
        <Test07Print dto={dto} onPrev={onPrev} onNext={onNext}></Test07Print>
      )}
      {count === 3 && <Test07Output name={name}></Test07Output>}
    </div>
  );
};

export default Test07Main;
