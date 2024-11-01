import React, { useContext } from "react";
import { ChangeColorContext } from "../contexts/ChangeColorContext";

const ChangeColor = () => {
  const { color, onColor } = useContext(ChangeColorContext);

  return (
    <div>
      <h1 style={{ color: color }}>글자의 색갈 변경 : {color}</h1>
      <p>
        <button onClick={() => onColor("hotpink")}>hotpink</button>
        <button onClick={() => onColor("skyblue")}>skyblue</button>
        <button onClick={() => onColor("pink")}>pink</button>
        <button onClick={() => onColor("tomato")}>tomato</button>
        <button onClick={() => onColor("lime")}>lime</button>
      </p>
    </div>
  );
};

export default ChangeColor;
