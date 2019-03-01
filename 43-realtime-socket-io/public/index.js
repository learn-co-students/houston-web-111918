let character = new Character(window.prompt('Please Enter Your Name: '))
const socket = io('http://10.185.2.118:3000')

const addCharacterToGame = ({ name,state })  => {
    let character = new Character(name)
    character.state = state
    socket.on(character.name, state => {
        character.state = state
    })
}

socket.emit('joined', character.state, (allCharacters) => {
    allCharacters.forEach(addCharacterToGame)
})

socket.on('joined', addCharacterToGame)

document.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowDown':
            character.walkSouth()
        break
        case 'ArrowUp':
            character.walkNorth()
        break
        case 'ArrowRight':
            character.walkEast()
        break
        case 'ArrowLeft':
            character.walkWest()
        break
    }
    socket.emit('update', character.state)
})
document.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowDown':
            character.stopSouth()
        break
        case 'ArrowUp':
            character.stopNorth()
        break
        case 'ArrowRight':
            character.stopEast()
        break
        case 'ArrowLeft':
            character.stopWest()
        break
    }
    socket.emit('update', character.state)
})
