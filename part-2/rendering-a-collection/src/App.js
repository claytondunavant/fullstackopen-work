import React from 'react'
import Note from './components/Note'


const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          //Note gets the key in this case, not li
          //key goes the the thing being mapped
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
  
}


export default App;
