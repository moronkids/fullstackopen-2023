/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    console.log(props.course.name)
    return <h1>{props.course.name}</h1>
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.content.name} - {props.content.exercises}</p>
      </>
    )
  }
  const Content = (props) => {
    return (
      <div>
          <Part content={props.part[0]}/>
          <Part content={props.part[1]}/>
          <Part content={props.part[2]}/>
      </div>
    )
  }
  const Total = (props) => {
    const totalExercise = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
    return (
      <>
        <p>Total : {totalExercise}</p>
      </>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content part={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App