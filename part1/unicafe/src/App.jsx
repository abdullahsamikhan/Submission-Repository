import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [click, setClick] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setClick(click + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setClick(click + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setClick(click + 1);
  };

  const average = click > 0 ? (good * 1 + neutral * 0 + bad * -1) / click : 0;
  const positivePercentage = click > 0 ? (good / click) * 100 : 0;

  return (
    <>
      <h2>Give Feedback</h2>
      <div className="flex justify-center gap-2">
        <Button text={"Good"} handleFunction={() => handleGood()} />
        <Button text={"Neutral"} handleFunction={() => handleNeutral()} />
        <Button text={"Bad"} handleFunction={() => handleBad()} />
      </div>

      {click > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          click={click}
          average={average}
          positivePercentage={positivePercentage}
        />)
        : ( <p>No FeedBack Given</p>  )}
    </>
  );
}

export default App;
