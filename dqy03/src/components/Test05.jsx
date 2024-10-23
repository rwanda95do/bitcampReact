import React from "react";
import { useState } from "react";
import Name from "./Name";
import Fruit from "./Fruit";
import Output from "./Output";

const Test05 = () => {
  const [name, setName] = useState("에이");
  const [fruit, setFruit] = useState("애플");

  const onInputName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const onInputFruit = (e) => {
    //const { value } = e.target;
    setFruit(e.target.value);
  };

  return (
    <div>
      <Name name={name} onInputName={onInputName}></Name>
      <Fruit fruit={fruit} onInputFruit={onInputFruit}></Fruit>
      <Output name={name} fruit={fruit}></Output>
    </div>
  );
};

export default Test05;
