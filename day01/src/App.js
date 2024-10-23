import React, { Fragment } from "react";
import Dog from "./components/Dog";
import Test02 from "./components/Test02";
import Test01 from "./components/Test01";
import Test03 from "./components/Test03";
import Test04 from "./components/Test04";
import Test05 from "./components/Test05";

const App = () => {
  return (
    <>
      {/* JSX 주석: 최상단은 반드시 <div></div>로 감사야한다 */}
      <h3>hello React!!</h3>
      <hr></hr>
      <Dog />
      <hr></hr>
      <Dog />
      <hr />
      <Test01></Test01>
      <hr></hr>
      <Test02></Test02>
      <hr></hr>
      <Test03></Test03>
      <hr></hr>
      <Test04></Test04>
      <hr></hr>
      <Test05></Test05>
    </>
  );
};

export default App;
