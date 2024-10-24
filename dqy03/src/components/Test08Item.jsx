import React from "react";

const Test08Item = ({ item, onView }) => {
  const { id, img, title } = item;
  return (
    <li onClick={() => onView(id)}>
      <img id={id} src={img} alt={title} />
    </li>
  );
};

export default Test08Item;
