import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BoardView = () => {
  const { seq } = useParams();

  const [dto, setDTO] = useState({}); // 객체 : useState({}), 배열 : useState([]), 일반String변수 useState()/useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:8080/spring/board/boardView?seq=${seq}`)
      .then((res) => {
        console.log(res.data);
        setDTO(res.data);
      });
  }, []);

  return (
    <div>
      <h1>BoardView</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>
              <label htmlFor="subject">제목 : </label>
            </th>
            <td>
              <input
                type="text"
                name="subject"
                id="subject"
                value={dto.subject}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="">내용 : </label>
            </th>
            <td>
              <textarea
                name="content"
                id="content"
                rows={10}
                cols={50}
                value={dto.content}
              />
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default BoardView;
