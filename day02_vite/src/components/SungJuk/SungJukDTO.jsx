import React, { useState } from "react";

const SungJukDTO = ({ item }) => {
  //구조분해
  const { seq, name, kor, eng, math } = item;
  const tot = kor + eng + math;
  const avg = tot / 3.0;

  return (
    <tbody>
      <tr>
        <td>{seq}</td>
        <td>{name}</td>
        <td>{kor}</td>
        <td>{eng}</td>
        <td>{math}</td>
        <td>{tot}</td>
        <td>{avg}</td>
      </tr>
    </tbody>
  );
};

export default SungJukDTO;
