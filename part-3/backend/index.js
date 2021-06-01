const { request, response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()

//BEFORE ROUTE MIDDLEWARE

//this allows you to access resources from a different host
app.use(cors())
//this activates json-parser
app.use(express.json())

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

//ROUTES  

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

//ADDING NOTES TO SERVER

const generateId = () => {
  //tests to see if the lenght is greater than zero
  //if it is get an array of all the notes ids and find the max
  //an array is not passed to Max, rather the spread makes them individual digits
  //if not maxId is zero
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id)) 
    : 0 
  
  return maxId + 1
}

app.post('/api/notes', (request, response) => {

  const body = request.body
  
  //test if body has content
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  
  //if there is no important tag it will default to false
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }
  
  notes = notes.concat(note)

  response.json(note)
})

//middleware after the routes
const unkownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint'})
}
app.use(unkownEndpoint)


const PORT = 3001
app.listen(PORT, () => {
    console.log('server is running')
})