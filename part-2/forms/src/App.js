import React, { useState } from 'react'
import Note from './components/Note'
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)
  
  const addNote = (event) => {
    //prevent the default action from happening
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5,
      id: notes.length + 1
    }
    
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  
  //synce change in component with a change in the js
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  
  // ? is the coniditonal operator
  // notesToShow will be set to notes if showAll is true
  // notesToShow will be set to a filtered notes if showAll is false
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    
    {/* contain input and button inside a form and call addNote when get sumbit  */}
    <form onSubmit={addNote}>
          
          {/* contents of input are set to this value */}
          {/* sync changes in input with value */}
          <input 
            value={newNote}
            onChange={handleNoteChange}
          />

          {/* send submit message to form */}
          <button type="submit">save</button>
    </form>
    </div>
  )
  
}


export default App;
