import { useState } from "react";

const Header = (prop) => {
  return (
    <>
      <h1> {prop.course}</h1>
    </>
  );
};

const Part = (prop) => {
  return (
    <p>
      {prop.part} {prop.exercise}
    </p>
  );
};

const Content = ({parts}) => {
  return (
    <>
      {parts.map((part,index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
    </>
  );
};

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p> Number of exercises {totalExercises}</p>
    </>
  );
};

function App() {
  const course = { 
  name : "Half Stack application development",
  parts :  [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={ course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
