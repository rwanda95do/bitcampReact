import React from "react";
import Test08Big from "./Test08Big";
import Test08List from "./Test08List";

const Test08View = ({ list, one, onView }) => {
  return (
    <div className="bigview">
      <Test08Big one={one}></Test08Big>
      <Test08List list={list} onView={onView}></Test08List>
    </div>
  );
};

export default Test08View;
