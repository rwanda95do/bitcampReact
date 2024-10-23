import React from "react";

const Test02 = () => {
  // javascript영역 : 조건문 제어문 등 사용가능
  let title = "신상명세서";
  const name = "홍길동";
  const age = 25;
  const addr = "서울";

  const css1 = {
    color: "red",
    backgroundColor: "yellow",
    fontSize: "30pt",
    padding: 20,
    margin: 10,
    border: "3px solid #000",
  };
  const css2 = {
    width: 400,
    color: "#fff",
    backgroundColor: "pink",
    fontSize: 20,
    padding: 20,
    margin: 10,
  };

  return (
    <>
      <h2>JSX영역</h2>
      <h3 style={css1}>{title}</h3>
      <ul>
        <li style={css2}>이름 : {name}</li>
        <li style={{ backgroundColor: "green", padding: 15, margin: "auto" }}>
          나이 : {age}살 {age > 19 ? "성인" : "청소년"}
        </li>
        <li style={{ color: "red" }}>주소 : {addr}</li>
      </ul>
    </>
  );
};

export default Test02;
