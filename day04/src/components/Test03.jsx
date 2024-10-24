import React from "react";

import "../css/Test03.css";
import myStyle from "../css/Test03.module.css";

import Test03Sub from "./Test03Sub";

const Test03 = () => {
  return (
    <div>
      <div className="box">Test03</div>
      <div className={myStyle.box}>Test03.module.css</div>
      <hr />
      <Test03Sub></Test03Sub>
    </div>
  );
};

export default Test03;












/*
    컴포넌트별 CSS적용

    - 파일명.module.css
    - import 참조변수 from './파일명.module.css'
    - 개발자 도구에서 보면 '파일명_클래스명_~~~~~' 이라고 설정된다
*/
