import React, { useState } from "react";
import styles from "../../css/loginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const [idDiv, setIdDiv] = useState("");
  const [pwddDiv, setPwddDiv] = useState("");

  const navigate = useNavigate();

  const [result, setResult] = useState("");

  // 로그인버튼
  const onLoginSubmit = (e) => {
    e.preventDefault();
    setIdDiv("");
    setPwddDiv("");

    if (!id) setIdDiv("아이디 입력");
    else if (!pwd) setPwddDiv("비밀번호 입력");
    else {
      axios
        .get(`http://localhost:8080/spring/member/login?id=${id}&pwd=${pwd}`, { withCredentials: true })
        .then((res) => {
          alert(res.data);
          res.data === "success"
            ? navigate("/")
            : setResult("아이디 또는 비번이 다름니다.");
        })
        .catch();
    }
  };
  return (
    <div className="main">
      <form className={styles.LoginForm}>
        <table border="1">
          <thead></thead>
          <tbody>
            <tr>
              <th>아이디</th>
              <td>
                <input
                  type="text"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <div id={styles.idDiv}>{idDiv}</div>
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input
                  type="text"
                  name="pwd"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <div id={styles.pwdDiv}>{pwddDiv}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button onClick={onLoginSubmit}>로그인</button>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </form>
      <br></br>
      <div>{result}</div>
    </div>
  );
};

export default LoginForm;
