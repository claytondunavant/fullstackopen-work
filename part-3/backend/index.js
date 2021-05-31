const { request } = require('express')
const express = require('express')
const app = express()

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
]

//all these are trying to make our server
//somewhat RESTful

//this is a route
app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

//this is a route
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

//parameters are defined with colon syntax
app.get('/api/notes/:id', (request, response) => {
  //how you get the id parameter
  //change string id into number id
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  //only send 200 response if note is found
  if(note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  
  response.status(204).end()
})



const PORT = 3001
app.listen(PORT, () => {
    console.log('server is running')
})