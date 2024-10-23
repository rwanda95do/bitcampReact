import React from 'react';

const Animal = ({ name, onInputName }) => {
  return (
    <div>
      <h2>Animal 컴포넌트</h2>
      <input type="text" value={name} onChange={onInputName} />
    </div>
  );
};

export default Animal;