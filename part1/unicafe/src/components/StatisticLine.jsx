import React from "react";
import "../App.css"; // Make sure to create this CSS file

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td className="statistic-text">{text}</td>
      <td className="statistic-value">{value}</td>
    </tr>
  );
};

export default StatisticLine;
