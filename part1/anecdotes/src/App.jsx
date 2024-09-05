import { useState } from "react";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [votes, setVotes] = useState(new Array(8).fill(0));

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleButton = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVote = () => {
    const newVotes = [ ...votes ];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setClicks(clicks + 1);
  };
  const maxValue = Math.max(...votes)
  const indexMaxValue = votes.indexOf(maxValue);

  return (
    <>
      <div>
        {anecdotes[selected]} has {votes[selected]} Votes
      </div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleButton}>Next Ancedote</button>
      <h3>Anecdote With Most Votes</h3>

      {clicks>0?  <p>{ anecdotes[indexMaxValue]}</p> : <p>None</p>}
    
    </>
  );
};

export default App;
