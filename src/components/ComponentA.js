import React from 'react';
import { connect } from 'react-redux';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { setInputValue } from '../store/action/inputAction';

const ComponentA = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <ComponentB handleChange={handleChange} />
      <ComponentC inputValue={inputValue} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = {
  setInputValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);
