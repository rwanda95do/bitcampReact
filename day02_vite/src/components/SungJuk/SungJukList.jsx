import React, { useState } from "react";
import SungJukDTO from "./SungJukDTO";

const SungJukList = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <SungJukDTO key={item.seq} item={item}></SungJukDTO>
      ))}
    </div>
  );
};

export default SungJukList;
