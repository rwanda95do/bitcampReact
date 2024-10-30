import React, { useState } from "react";
import styles from "../../css/BoardWriteForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BoardWriteForm = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [subjectDiv, setSubjectDiv] = useState("");
  const [contentDiv, setContentDiv] = useState("");

  const navigate = useNavigate();
  // 버튼
  const onBoardWriteSubmit = (e) => {
    e.preventDefault();

    setSubjectDiv("");
    setContentDiv("");

    if (!subject) setSubjectDiv("제목 입력");
    else if (!content) setContentDiv("내용 입력");
    else {
      // 출력 : axios.get()
      // 수정 : axios.put()
      // 삭제 : axios.delete()
      // 입력 : axios.post()

      // 입력
      axios
        .post("http://localhost:8080/spring/board/boardWrite", null, {
          params: {
            subject: subject,
            content: content,
          },
          withCredentials: true,
        })
        .then((res) => {
          alert("글쓰기완료");
          navigate("/board/boardList");
        });
    }
  };

  return (
    <div className="styles.BoardWriteForm">
      <h1>BoardWriteForm</h1>
      <form>
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <div id="subjectDiv">{subjectDiv}</div>
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
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                  cols={50}
                />

                <div id="contentDiv">{contentDiv}</div>
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="center">
                <button onClick={onBoardWriteSubmit}>글쓰기</button>
                <button>초기화</button>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </form>
    </div>
  );
};

export default BoardWriteForm;
