let speed = 15
function Character(){
  this.movement = null
  this.assets = 'assets/character'
  this.element = document.createElement('img')
  this.element.src = `${this.assets}/static.gif`
  this.element.style.position = 'relative'
  this.element.style.left = '0px'
  this.element.style.top = '0px'
  this.element.style.width = '25px'
  document.body.appendChild(this.element)
}

Character.prototype.walkEast = function() {
    this.stop() // < Same as this.stop()
    this.movement = setInterval(() => {
      let currentPosition = parseInt(this.element.style.left)
      this.element.style.left = currentPosition + 1 + 'px'
    }, speed)
    this.element.src = `${this.assets}/walkright.gif`
  }
  
 
Character.prototype.stop = function(){
    clearInterval(this.movement)
    this.element.src = `${this.assets}/static.gif`
}