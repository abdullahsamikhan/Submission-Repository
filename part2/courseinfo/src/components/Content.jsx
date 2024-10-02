import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
      const totalExercises = parts.reduce((initial, part) => initial + part.exercises, 0);
  return (
    <>
          {parts.map((part) => <Part name={part.name} key={part.id} exercise={part.exercises} />)}
          <p>Total Exercise : {totalExercises}</p>
    </>
  )
};

export default Content;
