import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import LoginForm from "./components/member/LoginForm";

import "./css/style.css";
import BoardWriteForm from "./components/board/BoardWriteForm";
import BoardList from "./components/board/BoardList";
import BoardView from "./components/board/BoardView";

function App() {
  return (
    <BrowserRouter>
      <>
        <nav className="menunav">
          <ul>
            <li>
              <Link to="/">메인화면</Link>
            </li>
            <li>
              <Link to="/loginForm">로그인</Link>
            </li>
            <li>
              <Link to="/board/boardWriteForm">글쓰기</Link>
            </li>
            <li>
              <Link to="/board/boardList">목록</Link>
            </li>
          </ul>
        </nav>

        {/* 화면에 보이는 부분 */}
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/loginForm" element={<LoginForm></LoginForm>}></Route>
          <Route path="/board">
            <Route
              path="boardWriteForm"
              element={<BoardWriteForm></BoardWriteForm>}
            ></Route>
            <Route path="boardList" element={<BoardList></BoardList>}></Route>
            <Route path="/board/boardView/:seq" element={<BoardView />}></Route>
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
