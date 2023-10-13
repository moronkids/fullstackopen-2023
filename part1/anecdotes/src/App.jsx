import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])
  const randomNumber = () => {
    return Math.floor(Math.random() * (anecdotes.length - 1)) + 0
  }
  const largestElement = (arr) => {
    let max = Math.max(...arr);
    return arr.indexOf(max)
  };
  return (
    <div>
      <h3><strong>Anectodtes of the day</strong></h3>
      {anecdotes[selected]}
      <br />
      has {votes[selected] || 0} votes
      <div>
        <button onClick={() => {
          const tempVotes = [...votes]
          if (tempVotes.length === 0) {
            anecdotes.map((v, i) => {
              tempVotes[i] = 0
            })
          }
          if (!isNaN(tempVotes[selected])) {
            tempVotes[selected] += 1
          } else {
            tempVotes[selected] = 1
          }
          setVotes(tempVotes)
        }}>vote</button>
        <button onClick={() => {
          const number = randomNumber()
          setSelected(number);
        }}>next anecdotes</button>
      </div>
      <br />
      <h3><strong>Anectodtes with most voted</strong></h3>
      {anecdotes[largestElement(votes)]}
    </div>
  )
}

export default App