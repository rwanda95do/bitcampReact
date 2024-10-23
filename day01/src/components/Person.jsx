import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <h3>
        나의 이름은 <span style={{ color: "blue" }}>{name}</span> 이고
        나이는{" "}{age}살 입니다.
      </h3>
    </div>
  );
};

export default Person;
