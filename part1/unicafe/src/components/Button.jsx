import React from 'react'
// import "./App.css";

const Button = ({text, handleFunction}) => {
  return (
    <div>
      <button onClick={handleFunction}> {text}</button>
    </div>
  );
}

export default Button