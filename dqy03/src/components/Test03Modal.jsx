import React from "react";

const Test03Modal = ({ onClose }) => {
  return (
    <>
      <div className="bg"></div>
      <div className="popup">
        <p className="closex" onClick={onClose}>
          X
        </p>
        <h2>HAve a nice day</h2>
      </div>
    </>
  );
};

export default Test03Modal;
