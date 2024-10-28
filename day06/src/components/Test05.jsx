import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  dto: {},
  error: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        dto: action.payload,
        error: null,
        loading: false,
      };
    case "ERROR":
      return {
        dto: {},
        error: "404에러, 데이터를 가져오지 못했습니다.",
        loading: true,
      };
    default:
      return state;
  }
};

const Test05 = () => {
  const [id, setId] = useState(1);
  const [search, setSearch] = useState(1);
  const onSearch = (id) => {
    setSearch(id);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

    axios
      .get(url)
      .then((res) => dispatch({ type: "SUCCESS", payload: res.data }))
      .catch((error) => dispatch({ type: "ERROR" }));
  }, [search]); // 검색 버튼을 누를때마다

  return (
    <div>
      <h3>
        ID입력 (1~5000) :
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => onSearch(id)}>검색</button>
      </h3>
      <br />

      <h2>
        {state.dto && state.loading ? "로딩중" : state.dto.title}
        <br />
        {state.loading || <img src={state.dto.url} alt={state.dto.id}></img>}
      </h2>
      <p>{state.error ? state.error : null}</p>
    </div>
  );
};

export default Test05;
