import React, { useEffect, useState } from "react";
import axios from "axios";
import Member from "./Member";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://koreanjson.com/users").then((res) => setList(res.data));
  }, []);

  return (
    <div>
      <h1>Main Page / 회원수 : {list.length}</h1>
      {list.map((item) => (
        <Member key={item.id} item={item}></Member>
      ))}
    </div>
  );
};

export default Main;
