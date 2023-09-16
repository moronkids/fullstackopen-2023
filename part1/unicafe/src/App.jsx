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
        <table>
          <td>
            <tr>{props.text}</tr>
          </td>
          <td>
            <tr>{ props.value}</tr>
          </td>
        </table>
      </>
    )
  }
  const Statistics = () => {
    const countAll = bad + neutral + good
    const positive = (good / countAll * 100).toFixed(4)
    const average = ((countAll) / 3).toFixed(4)+' %'
    return(
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={parseFloat(countAll).toFixed(4)} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={ isNaN(positive) ? 0 : positive} />
      </div>
    )
  }
  return (
    <div>
      <h2>give feedback</h2>
      <div className="btn__emot">
        <button onClick={() => {
          setGood(good + 1)
        }}>good</button>
        <button onClick={() => {
          setNeutral(neutral+1)
        }}>neutral</button>
        <button onClick={() => {
          setBad(bad+1)
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