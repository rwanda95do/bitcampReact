import React from "react";
import Test08Item from "./Test08Item";

const Test08List = ({ list, onView }) => {
  return (
    <ul>
      {list.map((item) => (
        <Test08Item key={item.id} item={item} onView={onView}></Test08Item>
      ))}
    </ul>
  );
};

export default Test08List;
