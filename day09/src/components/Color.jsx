import React, { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { CountContext } from "../contexts/CountContext";

const Color = () => {
  const { color, onRed, onBlue, onGreen, onMagenta } = useContext(ColorContext);
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1 style={{ color: color }}>
        컬러 : {color}, {count}
      </h1>
      <p>
        {/* 이벤트 발생 : dispatch */}
        <button onClick={() => onRed()}>RED</button>
        <button onClick={() => onBlue()}>BLUE</button>
        <button onClick={() => onGreen()}>GREEN</button>
        <button onClick={() => onMagenta()}>MAGENTA</button>
      </p>
    </div>
  );
};

export default Color;
