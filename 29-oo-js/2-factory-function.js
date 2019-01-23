let speed = 15


let createNewCharacter = function(){
  let character = {}
  character.movement = null
  character.assets = 'assets/character'
  character.element = document.createElement('img')
  character.element.src = `${character.assets}/static.gif`
  character.element.style.position = 'relative'
  character.element.style.left = '0px'
  character.element.style.top = '0px'
  character.element.style.width = '25px'
  document.body.appendChild(character.element)


  character.walkEast = function() {
    this.stop() // < Same as character.stop()
    this.movement = setInterval(function() {
      let currentPosition = parseInt(character.element.style.left)
      character.element.style.left = currentPosition + 1 + 'px'
    }, speed)
    character.element.src = `${this.assets}/walkright.gif`
  }
  
 
  character.stop = function(){
    clearInterval(this.movement)
    this.element.src = `${this.assets}/static.gif`
  }

  return character
}





