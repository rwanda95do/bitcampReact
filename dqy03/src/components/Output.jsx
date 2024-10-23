import React from "react";

const Output = (props) => {
  const { name, fruit } = props;
  return (
    <div>
      <h2>Output 컴포넌트</h2>
      <p>
        {name} 님이 좋아하는 과일은 {fruit}입니다.
      </p>
    </div>
  );
};

export default Output;
