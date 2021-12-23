import React, { useState } from "react"

const Heading = ({ text }) => {
  return <h1>{text}</h1>
}

const Display = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticRow = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <Heading text="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Heading text="statistics" />
      <table>
        <tbody>
          <StatisticRow text="good" value={props.good} />
          <StatisticRow text="neutral" value={props.neutral} />
          <StatisticRow text="bad" value={props.bad} />
          <StatisticRow text="all" value={props.all} />
          <StatisticRow
            text="average"
            value={(props.good - props.bad) / props.all}
          />
          <StatisticRow
            text="positive"
            value={(props.good * 100) / props.all + "%"}
          />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App
