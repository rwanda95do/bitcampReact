import React from "react";
import { useRef, useState } from "react";

const Test06 = () => {
  // 포커스
  const nameRef = useRef();

  //----------------------------
  // 객체 변수 사용하기
  const [dto, setDto] = useState({
    name: "",
    id: "",
    pwd: "",
  });
  // 구조분해 할당 :  dto.name이라고 하기 힘들어서
  const { name, id, pwd } = dto;

  const onInput = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;

    setDto({
      ...dto, // 기존의 값은 복제하고 (객체에서 스프레드시트는 덮어쓰기/수정, 리스트는 복사)
      //복사하지 다른 녀석들의 값을 저장하지 못한다.. 그저 화면상에 보여주기만 할뿐...
      [name]: value,
    });
  };
  const onReset = () => {
    setDto({
      name: "",
      id: "",
      pwd: "",
    });
    nameRef.current.focus();
  };

  
  return (
    <div>
      <table border={1} cellPadding={5} cellSpacing="0">
        <tr>
          <th width="100">이름</th>
          <td>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInput}
              ref={nameRef}
            />
          </td>
        </tr>
        <tr>
          <th width="100">아이디</th>
          <td>
            <input type="text" name="id" value={id} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <th width="100">비밀번호</th>
          <td>
            <input type="text" name="pwd" value={pwd} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button onClick={onReset}>초기화</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Test06;
