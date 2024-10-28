import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Member = ({ item }) => {
  const { id, name, email } = item;

  const css = {
    border: "1px solid cyan",
    margin: 20,
    paddin: "20px",
  };

  const navigate = useNavigate();
  const onGo = () => {
    navigate(`/member/${id}`);
  };

  return (
    <div style={css}>
      <p>아이디 : {id} </p>
      <h4>이름 : {name}</h4>
      <h4>이메일 : {email}</h4>

      <p>
        <Link to={`/member/${id}`}>상세보기:link</Link>
      </p>
      <button onClick={onGo}>상세보기:button</button>
    </div>
  );
};

export default Member;
