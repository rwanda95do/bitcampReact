import React, { useEffect, useState } from "react";
import styles from "../../css/BoardList.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const BoardList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/spring/board/boardList`).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);

  return (
    <div className="styles.BoardList">
      <h1>BoardList</h1>
      <table board={1} frame="hside" rules="rows">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board) => (
            <tr key={board.seq}>
              <td>{board.seq}</td>
              <td>
                <Link to={`/board/boardView/${board.seq}`}>
                  {board.subject}
                </Link>
              </td>
              <td>{board.id}</td>
              <td>{board.hit}</td>
              <td>{board.logtime}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default BoardList;
