import React, {useState} from 'react'

//it is forbidden in React to mutate state directly
//act as if everything is immutable
//only change state by replacing the old object with a new object

//you can change states more generally with functions calls
//that return functions
//the onClick just needs a functions or function reference everntually passed to it

//const Display = ({ counter }) => <div>{counter}</div>
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  const allClicks = props.allClicks

  if (props.allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )

}

//when the state is modified, React re-renders the component
//meaning the body is executed again
const App = () => {
  
  //in practice it is best to keep these separate because there
  // is not advangtage in keeping them together and keeping them
  // together increases complexity
  const [clicks, setClicks] = useState({
    left:0, right: 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks, //copy state of clicks
      left: clicks.left + 1
    }
    setClicks(newClicks)
    //setClicks({ ...clicks, right: clicks.right + 1 })
    
    setAll(allClicks.concat('L'))
  }

  const handleRightClicks = () => {
    const newClicks = {
      ...clicks, //copy state of clicks
      right: clicks.right + 1
    }
    setClicks(newClicks)
    //setClicks({ ...clicks, right: clicks.right + 1 })

    setAll(allClicks.concat('R'))
  }

  return (
    <>
      <Display counter={clicks.left} />
      <Display counter={clicks.right} />
      <Button 
        handleClick={handleLeftClick} 
        text='Left'
      />
      <Button 
        handleClick={handleRightClicks} 
        text='Right'
      />
      <History allClicks={allClicks} />
    </>
  )
}


export default App;
