import React, { createContext, useContext, useState } from "react";

const TodosContext = createContext();
export const useTodos = () => useContext(TodosContext);

const TodosProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [seq, setSeq] = useState(1);

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const add = (text) => {
    if (text) {
      setList((prevList) => [...prevList, { a: seq, b: text }]);
      setInputValue("");
      setSeq(seq + 1);
      console.log(list);
    }
  };

  return (
    <TodosContext.Provider value={{ add, changeInputValue, inputValue, seq }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
