import React from "react";
import Main from "./page04/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemberDetail from "./page04/MemberDetail";

const App04 = () => {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>

          {/* /member/:memberId */}
          <Route path="member">
            <Route path=":memberId" element={<MemberDetail></MemberDetail>} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App04;
