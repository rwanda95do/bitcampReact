import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./page03/Home";
import About from "./page03/About";
import Profile from "./page03/Profile";
import Front from "./page03/Front";

const data = [
  { title: "html", info: "HTML 입니다." },
  { title: "css", info: "css 입니다." },
  { title: "javascript", info: "javascript 입니다." },
  { title: "react", info: "react 입니다." },
  { title: "vue", info: "vue 입니다." },
];

const App03 = () => {
  return (
    <BrowserRouter>
      <>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>

          <li>
            <Link to="/front/html">HTML</Link>
          </li>
          <li>
            <Link to="/front/css">CSS</Link>
          </li>
          <li>
            <Link to="/front/javascript">JAVASCRIPT</Link>
          </li>
          <li>
            <Link to="/front/react">REACT</Link>
          </li>
          <li>
            <Link to="/front/vue">VUE</Link>
          </li>
        </ul>
      </>

      {/* 화면에 보이는 역영 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        {/* <Route path="/front/:변수명" element={}></Route> */}
        <Route
          path="/front/:name"
          element={<Front data={data}></Front>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App03;



/*
JSX(JavaScript XML)는 React 애플리케이션에서 사용되는 JavaScript의 확장 문법으로, UI를 표현하기 위한 도구이다.
JSX를 사용하면 JavaScript 코드 내에서 HTML과 비슷한 구문을 사용하여 UI를 선언할 수 있다.

.map() 메서드는 배열의 각 요소를 JSX로 변환하여 새로운 배열을 생성한다.
.map() 메서드를 사용하여 데이터 배열을 JSX로 변환하고, 이를 React 컴포넌트에서 렌더링하면 화면에 원하는 결과를 표시할 수 있다.

.filter() 메서드만 사용하면 원본 배열을 필터링하여 조건을 만족하는 요소들을 포함하는 새로운 배열을 반환하지만, 
이 배열은 JSX로 렌더링할 준비가 되어있지 않다.
JSX를 생성하려면 .map() 메서드나 다른 순회 메서드를 사용하여 각 요소를 JSX로 변환해주어야 한다.

따라서 원본 데이터를 필터링해서 새로운 배열을 만든다고 해서 그것만으로는 웹 페이지나 UI에 결과를 표시할 수 없다.
JSX로 렌더링하려면 .map()이나 유사한 메서드를 사용하여 각 요소를 JSX로 변환해주어야 한다.
*/