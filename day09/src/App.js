import logo from "./logo.svg";
import "./App.css";
import Count from "./components/Count";
import CountProvider from "./contexts/CountContext";

import ColorProvider from "./contexts/ColorContext";
import Color from "./components/Color";

import ChangeColorProvider from "./contexts/ChangeColorContext";
import ChangeCountProvider from "./contexts/ChangeCountContext";
import ChangeColor from "./components/ChangeColor";
import ChangeCount from "./components/ChangeCount";

import ToggleProvider from "./contexts/ToggleContext";
import Counter from "./components/Counter";
import CounterProvider from "./contexts/CounterContext";

import Todos from "./components/Todos";
import TodosProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="App">
      {/*
       Context를 사용 할 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야한다
       Provider의 모든 하위 컴포넌트가 얼마나 깊이 위치에 있는지 상관없이 Context에 데이터를 읽을 수 있다.
       */}
      {/*      
      <CountProvider>
        <Count />
      </CountProvider>

      <hr></hr>  */}
      {/*      
      <ColorProvider>
        <CountProvider>
          <Color />
          <Count />
        </CountProvider>
      </ColorProvider>

      <hr /> */}

      {/* 
      <ChangeColorProvider>
        <ChangeCountProvider>
          <ChangeCount />
          <ChangeColor/>
        </ChangeCountProvider>
      </ChangeColorProvider> */}

      {/* <CounterProvider>
        <ToggleProvider>
          <Counter />
        </ToggleProvider>
      </CounterProvider> */}

      <TodosProvider>
        <ColorProvider>
          <CountProvider>
            <Todos />
            <hr />
            <Color />
            <hr />
            <Count />
          </CountProvider>
        </ColorProvider>
      </TodosProvider>
    </div>
  );
}

export default App;
