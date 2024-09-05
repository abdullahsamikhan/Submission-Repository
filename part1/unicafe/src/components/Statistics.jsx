import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  neutral,
  bad,
  click,
  average,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positivePercentage} />
    </div>
  );
};

export default Statistics;
