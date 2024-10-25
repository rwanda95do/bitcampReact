import React from "react";
import { useState } from "react";
import Test04Sub from "./Test04Sub";

const Test04 = () => {
  const [color, setColor] = useState("");
  const [food, setFood] = useState("");

  return (
    <div>
      <h2>당신이 좋아하는 색은?</h2>
      <div>
        <select
          size="5"
          style={{ width: "120px" }}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="hotpink">hotpink</option>
          <option value="magenta">magenta</option>
          <option value="skyblue">skyblue</option>
          <option value="tomato">tomato</option>
        </select>
      </div>
          <hr />
          <h2>당신이 좋아하는 음식은?</h2>
          <div>
              <p>
                  <input type="radio" name="food" value={'햄버거'} onChange={(e)=>setFood(e.target.value)} />
                  <label >햄버거</label>
                  <input type="radio" name="food" value={'삼겹살'} onChange={(e)=>setFood(e.target.value)} />
                  <label >삼겹살</label>
                  <input type="radio" name="food" value={'치킨'} onChange={(e)=>setFood(e.target.value)} />
                  <label >치킨</label>
                  <input type="radio" name="food" value={'피자'} onChange={(e)=>setFood(e.target.value)} />
                  <label >피자</label>
              </p>
          </div>
          <hr />
          <Test04Sub color={color} food={food}></Test04Sub>
    </div>
  );
};

export default Test04;
