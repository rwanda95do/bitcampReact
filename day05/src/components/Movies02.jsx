import React from "react";
import { useState } from "react";

const Movies02 = () => {
  const [date, setDate] = useState("20240425");
  const [dto, setDto] = useState({});
  const [search, setSearch] = useState("");

  const onSearch = (date) => {
    setSearch(date);
  };

  useEffect(() => {
    axios
      .get(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" +
          date
      )
      .then((res) => setDto(res.data));
  }, [search]);

  return (
    <div>
      <h1>날짜별 영화 랭킹 사이트</h1>
      날짜입력 (yyyymmdd) : &emsp;
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />{" "}
      &nbsp;
      <button onClick={() => onSearch(date)}>검색</button>
      <hr />
          <div>
              {/* ? 사용 : 값이  null이거나 undefined인지 체크하는거 */}
        {dto.boxOfficeResult?.dailyBoxOfficeList?.map((item) => (
          <p key={item.rnum}>
            &emsp;{item.rnum}. {item.openDt} / {item.movieNm}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Movies02;
