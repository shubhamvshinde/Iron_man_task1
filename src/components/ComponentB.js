import React from 'react';

const ComponentB = ({ handleChange }) => {
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
