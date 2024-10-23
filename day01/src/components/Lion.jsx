import React from "react";

const Lion = (props) => {
  const { name } = props;

  return (
    <div>
      <h3>나는 {name} 컴포넌트입니다</h3>
    </div>
  );
};

export default Lion;
