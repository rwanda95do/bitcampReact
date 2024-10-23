import React from 'react';

const Name = ({ name, onInputName }) => {
  return (
    <div>
      <h2>Name 컴포넌트</h2>
      <input type="text" value={name} onChange={onInputName} />
    </div>
  );
};

export default Name;