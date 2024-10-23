import React from 'react';

const Fruit = ({ fruit, onInputFruit }) => {
  return (
    <div>
      <h2>Fruit 컴포넌트</h2>
      <input type="text" value={fruit} onChange={onInputFruit} />
    </div>
  );
};

export default Fruit;