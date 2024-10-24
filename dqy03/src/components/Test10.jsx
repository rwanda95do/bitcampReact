import React, { useRef, useState } from "react";

const Test10 = () => {
  const [dto, setDto] = useState({
    name: "",
    age: "",
  });
  const { name, age } = dto;

  const [list, setList] = useState([]); // 비어있는 배열 생성

  const nameRef = useRef(); // 포커스

  const seq = useRef(1); // 값이 1 2 3 4 5 6... 커짐 -> Java의 시퀀스 객체느낌

  const onInput = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setDto({
      ...dto,
      [name]: value,
    });
  };

  const onAdd = (e) => {
    e.preventDefault(); // 브라우저의 고유한 동작을 중단하는 역할

    if (!name || !age) return;

    setList([
      ...list, // 스프레드시트 연산자(배열)
      {
        seq: seq.current++, // 이름:값(객체)
        name, //name: name,  // 한번만 써도 알아서잘 찾아넣는다
        age, //age: age,
      },
    ]);

    // 초기화
    setDto({
      name: "",
      age: "",
    });

    nameRef.current.focus();
  };


  
  return (
    <div>
      <form onSubmit={onAdd}>
        이름{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={onInput}
          ref={nameRef}
        />
        <br></br>
        나이 <input type="text" name="age" value={age} onChange={onInput} />
        <br></br>
        <button type="submit" onAdd={onAdd}>
          추가
        </button>
        <hr></hr>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item.seq} : {item.name} / {item.age}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Test10;

// Submit, <a> href=''</a> 는 페이지 이동(고유한 동작)을 하려한다.
// 못가게 막아주는 방법: e.preventDefault() 브라우저의 고유한 동작을 중단 시키는 역할
