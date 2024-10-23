import React from "react";
import { useState } from "react";
import Animal from "./Animal";
import Display from "./Display";

const Test04 = () => {
  const [name, setName] = useState("호랑이");
  const onInputName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div>
      <Animal name={name} onInputName={onInputName}></Animal>
      <Display name={name}></Display>
    </div>
  );
};

export default Test04;
