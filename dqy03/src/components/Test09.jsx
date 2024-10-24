import React from "react";
import img01 from "../image/1.png";
import img02 from "../image/2.png";
import img03 from "../image/3.png";
import img04 from "../image/4.png";

const Test09 = () => {
  return (
    <div>
      <img src={img01} alt="누렁이1" style={{width:'200px', height:'200px'}} /> &emsp;
      <img src={img02} alt="누렁이2" style={{width:'200px', height:'200px'}} />
      <img src={img03} alt="누렁이3" style={{width:'200px', height:'200px'}} />
      <img src={img04} alt="누렁이4" style={{width:'200px', height:'200px'}} />
    </div>
  );
};

export default Test09;


















/*
    - src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
    - [형식] import 참조변수 from '이미지경로';
*/