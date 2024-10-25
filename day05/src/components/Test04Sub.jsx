import React from "react";
import { useMemo } from "react";

const getColor = (color) => {
  console.log("getColor");

  switch (color) {
    case "hotpink":
      return "진분홍";

    case "magenta":
      return "보라";

    case "skyblue":
      return "하늘";

    case "tomato":
      return "토마토";
  }
};

const getFood = (food) => {
  console.log("foodInfo");

  switch (food) {
    case "햄버거":
      return "인스턴스";

    case "삼겹살":
      return "돼지고기";

    case "치킨":
      return "닭고기";

    case "짜장면":
      return "면요리";
  }
};

const Test04Sub = ({ color, food }) => {
  //일반함수로 만들면 SPA이기 때문에 색/음식을 바꾸면 getColor, getFood 모두 로그가 찍힌다.
  //   const colorInfo = getColor(color);
  //     const foodInfo = getFood(food);

  // 해결방법
  // 일반함수가 아니라 useMemo를 사용하면, color가 바뀌면 getColor, food가 바뀌면 getFood만 실행
  const colorInfo = useMemo(() => {
    return getColor(color);
  }, [color]);
  const foodInfo = useMemo(() => {
    return getFood(food);
  }, [food]);

  return (
    <div>
      <h3>선택한 색 : {color}</h3>
      <h4>당신은 {colorInfo}를 좋아하는군요!!</h4>

      <h3>선택한 음식 : {food}</h3>
      <h4>당신은 {foodInfo} 를 좋아하는군요!!</h4>
    </div>
  );
};

export default Test04Sub;
