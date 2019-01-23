let speed = 15



class Character {

    constructor(type){
        this.movement = null
        this.assets = `assets/${type}`
        this.element = document.createElement('img')
        this.element.src = `${this.assets}/static.gif`
        this.element.style.position = 'relative'
        this.element.style.left = '0px'
        this.element.style.top = '0px'
        this.element.style.width = '25px'
        document.body.appendChild(this.element)
    }

    walkEast() {
        this.stop() // < Same as this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition + 1 + 'px'
        }, speed)
        this.element.src = `${this.assets}/walkright.gif`
    }

    stop (){
        clearInterval(this.movement)
        this.element.src = `${this.assets}/static.gif`
    }
}
