import React from "react";
import { useParams } from "react-router-dom";

const Front = ({ data }) => {
  const { name } = useParams();
  return (
    <div>
      <h1>FRONT</h1>
      <h1>{name}</h1>
      <hr />
      {data
        .filter((item) => item.title === name)
        .map((item, index) => (
          <div key={index}>
            <h2>
              {item.title} : {item.info}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default Front;

/*
 :style 를 route path에 사용하면 useParams() 로 불러와 사용할 수 있다.
 : 뒤에 나오는 부분이 params의 key 부분이 되어 :name 는 name가 key가 되어 불러오고 있다.
*/