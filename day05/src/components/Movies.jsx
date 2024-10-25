import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/Movies.css";

const Movies = () => {
  const [list, setList] = useState([]);
  const [date, setDate] = useState("20241024");
  const [search, setSearch] = useState();

  useEffect(() => {
    axios
      .get(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=" +
          date
      )
      .then((res) => setList(res.data.boxOfficeResult.dailyBoxOfficeList));
  }, [search]);

  const onSearch = (date) => {
    setSearch(date);
  };

  return (
    <div>
      <h2>날짜별 영화 랭킹</h2>
      <span>날짜입력 (yyyymmdd)</span>
      <input
        type="text"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />{" "}
      &emsp;
      <button onClick={() => onSearch(date)}>검색</button>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.rank}>
            {item.rank}순위. {item.openDt} {item.movieNm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
