import React, { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  //const ColorProvider = (props) => {
  const [color, setColor] = useState("hotpink");

  const onRed = () => {
    setColor("red");
  };
  const onBlue = () => {
    setColor("blue");
  };
  const onGreen = () => {
    setColor("green");
  };
  const onMagenta = () => {
    setColor("magenta");
  };

  return (
    <ColorContext.Provider value={{ color, onRed, onBlue, onGreen, onMagenta }}>
      {children}
      {/* {props.children} */}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
