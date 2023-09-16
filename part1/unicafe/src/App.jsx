/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React from 'react'
import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const StatisticLine = (props) => {
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </>
    )
  }
  const Statistics = () => {
    const countAll = bad + neutral + good
    const positive = (good / countAll * 100).toFixed(4)
    const countAverage = () => {
      const good_ = 1 * good
      const neutral_ = 0
      const bad_ = -1 * bad
      return (good_ + neutral_+bad_) / countAll
    }
    const average = (countAverage()).toFixed(4)
    if (countAll === 0) {
      return (
        <>
        <p>No Feedback Given</p>
        </>
      )
    }
    else {
      return (
        <>
        <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={countAll} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={isNaN(positive) ? 0 : positive  + ' %'} />
      </table>
        </>
      )
    }
  }
  return (
    <div>
      <h2>give feedback</h2>
      <div className="btn__emot">
        <button onClick={() => {
          setGood(good + 1)
        }}>good</button>
        <button onClick={() => {
          setNeutral(neutral + 1)
        }}>neutral</button>
        <button onClick={() => {
          setBad(bad + 1)
        }}>bad</button>
      </div>
      <h2>statistic</h2>
      <div className="container__emot">
        <Statistics />
      </div>
    </div>
  )
}

export default App