import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page01/Home";
import About from "./page01/About";
import Ceo from "./page01/Ceo";
import Sub01 from "./page01/Sub01";
import NotFiles from "./page01/NotFiles";

const App01 = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            {/* <Link to=''> : <a href=''>와 같은 의미
            <a>태그를 사용하면 로딩 하느라 빙글빙글 돌기 떄문에 사용하면 안됨. */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ceo">Ceo</Link>
            </li>
            <li>
              <Link to="/sub01">Sub01</Link>
            </li>
          </ul>
        </nav>
      </>

      {/* 화면에 보이는 영역 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ceo" element={<Ceo />}></Route>
        <Route path="/sub01" element={<Sub01 />}></Route>
        <Route path="*" element={<NotFiles />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App01;
