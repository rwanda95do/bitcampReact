import React, { useState } from "react";

const Test04 = () => {
  const [visible, isVisible] = useState(false);
  const onToggle = () => {
    isVisible(!visible);
  };

  const onShow = () => {
    isVisible(true);
  };
  const onHide = () => {
    isVisible(false);
  };

  return (
    <div>
      <button onClick={onShow}>보이기</button>
      <button onClick={onHide}>숨기기</button>
      <button onClick={onToggle}>{visible ? "숨기기" : "보이기"} 토글</button>
      <hr />
      {visible ? (
        <div
          style={{
            backgroundColor: "pink",
            width: 100,
            height: 100,
            margin: 20,
          }}
        ></div>
      ) : null}
      {visible && (
        <div
          style={{
            backgroundColor: "pink",
            width: 100,
            height: 100,
            margin: 20,
          }}
        ></div>
      )}
    </div>
  );
};

export default Test04;
