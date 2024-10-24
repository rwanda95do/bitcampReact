import React, { useState } from "react";
// 전역
const dataList = [
  { id: 1, name: "chk1", text: "연령 (만14세이상) 확인 (필수)", isChk: false },
  { id: 2, name: "chk2", text: "개인정보 위탁 처리 동의 (필수)", isChk: false },
  { id: 3, name: "chk3", text: "개인정보 수집 및 이용에 대한 동의 (필수)", isChk: false,},
  { id: 4, name: "chk4", text: "이벤트 우대 혜택 동의 안내 (선택)", isChk: false,},
];

const Test11 = () => {
  const [list, setList] = useState(dataList); // useState로 상태변수를 만들어야지 isChk의 값을 바꿀 수 있다

  const onChk = (e) => {
    console.log(e);
    const { name, checked } = e.target; // 구조분해할당

    
    if (name === "all") {
      setList(
        list.map((item) => {
          return {
            ...item, // 스프레드연산자(객체) : 복사/수정 -> id,name,text는 그대로 유지해야하니까
            isChk: checked,
          };
        })
      );
    } else {
      setList(
        list.map((item) =>
          item.name === name ? { ...item, isChk: checked } : item
        )
      );
    }
  };

  return (
    <div>
      <p>
        <input
          type="checkbox"
          name="all"
          onChange={onChk}
          //  checked={list.filter((item) => item.isChk !== true).length < 1}   // 비추천 : 연사자는 true/false로 묻지말아라
          //   checked={list.filter((item) => !item.isChk).length < 1}
          checked={list.filter((item) => item.isChk).length === list.length}
          //   checked={list.every((item) => item.isChk)}
        />
        <label>약관동의</label>
      </p>
      <hr />
      {list.map((item) => (
        <p key={item.id}>
          <input
            type="checkbox"
            name={item.name}
            checked={item.isChk}
            onChange={onChk}
          />
          <label>{item.text}</label>
        </p>
      ))}
    </div>
  );
};

export default Test11;
