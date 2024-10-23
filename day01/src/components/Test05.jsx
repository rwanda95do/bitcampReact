import React from "react";
import Test05Sub from "./Test05Sub";

const Test05 = () => {
  return (
    <div>
      <Test05Sub
        name="홍길동"
        age={20}
        addr="서울"
        tel="010-1111-1111"
        color="tomato"
        bgcolor="pink"
        done={true}
      ></Test05Sub>
      ...
      <Test05Sub
        name="코난"
        age={7}
        addr="일본"
        tel="010-9999-9999"
        color="pink"
        bgcolor="tomato"
        done={false}
      ></Test05Sub>
    </div>
  );
};

export default Test05;
