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

const Content = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </>
  );
};


const Total = (prop) => {
  return (
    <>
      <p> Number of exercises {prop.ex1 + prop.ex2 + prop.ex3}</p>
    </>
  );
};


function App() {
        const course = "Half Stack application development";
        const part1 = "Fundamentals of React";
        const exercises1 = 10;
        const part2 = "Using props to pass data";
        const exercises2 = 7;
        const part3 = "State of a component";
        const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  );
}

export default App;
