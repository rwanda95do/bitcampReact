import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { red, green, blue, magenta } from "../store/modules/color.jsx";

const Color = () => {
  const color = useSelector((state) => state.angel.color);
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);
  
  return (
    <div>
      <h1 style={{ color: color }}>
        컬러 : {color}, 카운트 : {count}{" "}
      </h1>
      <p>
        {/* 이벤트 발생 : dispatch */}
        <button onClick={() => dispatch(red())}>RED</button>
        <button onClick={() => dispatch(blue())}>BLUE</button>
        <button onClick={() => dispatch(green())}>GREEN</button>
        <button onClick={() => dispatch(magenta())}>MAGENTA</button>
      </p>
    </div>
  );
};

export default Color;
