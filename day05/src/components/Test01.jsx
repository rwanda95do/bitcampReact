import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test01 = () => {
  const [list, setList] = useState([]);
  /* 1. fetch를 이용한 데이터 가져오기

  useEffect(() => {
    //랜더링되고 한번만 실행
    fetch("https://jsonplaceholder.typicode.com/posts") // 주소에서 데이터를 가져오겠습니다.
      .then((res) => res.json()) // fetch한걸 json으로 받아와서
      .then((res) => setList(res)); // list에 넣어라
  }, []);
*/

  /*
  // 2. axios의 get
  useEffect(() => {
    //랜더링되고 한번만 실행
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // 주소에서 데이터를 가져오겠습니다.
      .then((res) => setList(res.data)); // list에 넣어라
  }, []);
    */
  /*
  // 3. await를 이용한 비동기처리 (fetch)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setList(data);
    };
    getData();
  }, []);
*/
  // 4. await를 이용한 비동기처리(axios)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setList(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.id} / {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test01;
