import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

const user = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "김수혁" },
  { id: 3, name: "cat" },
  { id: 4, name: "DAUM" },
  { id: 5, name: "이제훈" },
  { id: 6, name: "daum" },
  { id: 7, name: "마동석" },
  { id: 8, name: "naver" },
  { id: 9, name: "이제훈" },
  { id: 10, name: "NAVER" },
];

const Test05 = () => {
  const [list, setList] = useState(user);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  /*
  const onSearch = () => {
    setlist(
      //indexOf() : 값이 없으면 -1
      //   user.filter(
      //     item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
      //   )
      user.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
    };
    */

  // 검색버튼이 눌릴대마다 useMemo
  useMemo(() => {
    return setList(
      user.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [search]);

  const onSearch = () => {
    setSearch(text);
  };

  // 글자가 바뀌몀 바로바로 검색
  useEffect(() => {
    setList(
      user.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      &nbsp;
      <button onClick={onSearch}>검색</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test05;
