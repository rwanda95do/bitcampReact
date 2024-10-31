import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//  ---------------------------------------------------------
//  내가 추가한  import
import { Provider } from "react-redux";

import rootReducer from "./store";
import { legacy_createStore as createStore } from "redux";
// import { createStore } from 'redux';  -deprecated. 아직 실행은 된다
//const store = createStore(rootReducer)  // 개발자 도구에서 확인 없이 가려면 이거 사용

import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());
//  ---------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> : 개발자 디버그
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/* <App/>>의 후손까지 모두 store을 사용해도 된다 */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
