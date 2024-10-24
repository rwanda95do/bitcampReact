import React, { useState, useEffect } from "react";

const Test02Sub = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMove = (e) => {
    setX(e.clientX); //clientX : 브라우저에서 사용가자 웹페이지에 보여지는 영역(화면의 X값)
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect");
    // 이벤트 처리 : 주체자(윈도우)에서 발생하는 이벤트(마우스이동)가 일어나면 onMove함수
    window.addEventListener("mousemove", onMove);

    // []로 지정하면, 컴포넌트가 사라질때 cleanup함수가 호출된다
    return () => {
      console.log("cleanup", window.removeEventListener("mousemove", onMove));
    };
  }, []);

  return (
    <div>
      <h2>마우스 좌표</h2>
      <div
        style={{
          border: "1px solid #000",
          width: 400,
          padding: 30,
          margin: 15,
        }}
      >
        <h3>
          X축 : {x}, Y축 : {y}
        </h3>
      </div>
    </div>
  );
};

export default Test02Sub;

/*
  cleanup 함수
  
  - useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부른다. 
  - cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하면 되는데, 
  - [ ] 안에 내용이 비어 있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출된다.
*/
