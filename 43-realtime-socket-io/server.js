
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const allCharacters = []

io.on('connection', (socket) => {

    socket.on('joined', (state, respond) => {
        const character = {
            name: state.name,
            state: state
        }

        socket.on('update', newState => {
            character.state = newState
            io.emit(character.name, character.state)
        })

        // Respond with all players already in the game
        respond(allCharacters)

        allCharacters.push(character)

        // Tell all players already in the game that a new character has joined
        socket.broadcast.emit('joined', state)
    })

})


app.use(express.static('public'))

server.listen(3000)