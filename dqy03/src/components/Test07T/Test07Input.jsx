import React from "react";

const Test07Input = ({ dto, onInput, onNext }) => {
  const { name, age, addr, phone } = dto;

  return (
    <div className="wrap">
      <p>
        <label>이름</label>
        <input type="text" name="name" value={name} onChange={onInput} />
      </p>
      <p>
        <label>나이</label>
        <input type="text" name="age" value={age} onChange={onInput} />
      </p>
      <p>
        <label>주소</label>
        <input type="text" name="addr" value={addr} onChange={onInput} />
      </p>
      <p>
        <label>핸드폰</label>
        <input type="text" name="phone" value={phone} onChange={onInput} />
      </p>
      <p style={{ textAlign: "center" }}>
        <button onClick={onNext}>다음</button>
        {/* <button onClick={()=>setCount()+1}>다음</button> */}
      </p>
    </div>
  );
};

export default Test07Input;
