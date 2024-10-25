import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Test02 = () => {
  const [dto, setDto] = useState({}); // 데이터 하나만 저장하는 비어있는 객체
  const [id, setId] = useState(3);
  const [search, setSearch] = useState(3);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setDto(res.data));
    //}, [id]);  // id의 값이 바뀔때마다 가져와라 -> 75를 입력하면 7,5 두번 움직여버림..
  }, [search]); // 그래서 버튼을 누를때마다

  const onSearch = (id) => {
    setSearch(id);
  };

  return (
    <div>
      <label>1~100q번 까지의 id입력 : </label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => onSearch(id)}>검색</button>
      <hr />
      {dto.id} / {dto.title}
    </div>
  );
};

export default Test02;
