import React, { useState } from "react";
import SungJukData from "./SungJukData";
import SungJukList from "./SungJukList";
import "../../css/SungJuk.css";

const SungJuk = () => {
  const [list, setList] = useState(SungJukData);

  return (
    <>
      <h2>성적</h2>
      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>

        <SungJukList list={list}></SungJukList>
      </table>
    </>
  );
};

export default SungJuk;
