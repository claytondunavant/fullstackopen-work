
const Header = (props) => {
    const course = props.course 

    return (
      <>
        <h1>{course}</h1>
      </>
    )
}

const Part = (props) => {
  const name = props.part.name
  const exercises = props.part.exercises 

  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts 

  return (
    <>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </>
  )
}

const Total = (props) => {
  const parts = props.parts
  return (
    <>
      <p>Number of exercies {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

function App() {
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

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  );
}

export default App;
