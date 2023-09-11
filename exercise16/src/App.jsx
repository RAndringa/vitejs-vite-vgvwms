import { useState } from 'react';

const Header = () => <h1>give feedback</h1>;

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return <p> No feedback given </p>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive + ' %'} />
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td> <td>{value}</td>
  </tr>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const setGoodValue = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedAll = updatedGood + bad + neutral;
    setAll(updatedAll);
    const updatedAverage = (updatedGood - bad) / updatedAll;
    const updatedPositive = (100 * updatedGood) / updatedAll;
    setAverage(updatedAverage);
    setPositive(updatedPositive);
  };

  const setNeutralValue = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedAll = good + bad + updatedNeutral;
    setAll(updatedAll);
    const updatedAverage = (good - bad) / updatedAll;
    const updatedPositive = (100 * good) / updatedAll;
    setAverage(updatedAverage);
    setPositive(updatedPositive);
  };

  const setBadValue = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedAll = good + updatedBad + neutral;
    setAll(updatedAll);
    const updatedAverage = (good - updatedBad) / updatedAll;
    const updatedPositive = (100 * good) / updatedAll;
    setAverage(updatedAverage);
    setPositive(updatedPositive);
  };

  return (
    <div>
      <Header />
      <Button handleClick={setGoodValue} text="good" />
      <Button handleClick={setNeutralValue} text="neutral" />
      <Button handleClick={setBadValue} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
