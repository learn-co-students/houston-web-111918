import React, { Component } from 'react';
import { dragons }  from './data'
import {DragonCard} from './DragonCard'
import { War } from './War';
import { Home } from './Home';

let updateElementInArray = (array, id, values) => {
  return array.map( element => {
    if(element.id == id){
      return { ...element, ...values }
    } else {
      return element
    }
  })
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      dragons: dragons
    }
  }

  sendDragonToWar = (id) => {
    this.setState({
      dragons: updateElementInArray(this.state.dragons, id, { atWar: true })
    })
  }

  sendDragonHome = (id) => {
    this.setState({
      dragons: updateElementInArray(this.state.dragons, id, { atWar: false })
    })
  }

  render() {
    let dragonsAtHome = this.state.dragons.filter( dragon => !dragon.atWar )
    let dragonsAtWar = this.state.dragons.filter( dragon => dragon.atWar )
    return (
      <div>
        <Home dragons={dragonsAtHome} selectDragon={this.sendDragonToWar} />
        <War  dragons={dragonsAtWar} selectDragon={this.sendDragonHome}/>
      </div>
    );
  }
}

export default App;