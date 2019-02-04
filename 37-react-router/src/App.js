import React, { Component } from 'react';
import { dragons }  from './data'
import {Dragons} from './Dragons'
import { War } from './War';
import { Home } from './Home';
import {BrowserRouter, Route, Switch} from  'react-router-dom'
import { DragonCard } from './DragonCard';

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
      dragons: dragons,
      selected: null
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

  changeSelected = (selected) => {
    this.setState({
     selected: selected
    })
  }

  render() {
   
    let dragonsAtHome = this.state.dragons.filter( dragon => !dragon.atWar )
    let dragonsAtWar = this.state.dragons.filter( dragon => dragon.atWar )
  
    let display;


    switch (this.state.selected){
      case "Home":
        display  = <Home dragons={dragonsAtHome} selectDragon={this.sendDragonToWar} />
        break;
      case "War":
        display  = <War  dragons={dragonsAtWar} selectDragon={this.sendDragonHome}/>
        break;
      case "Dragons":
        display  = <Dragons />
        break;
      default:
        display = null
        break;
    }
    return (
      <BrowserRouter>
      <div>
        <Switch>
       
        <Route exact={true} path="/dragons" component={Dragons}/>
        <Route path="/dragons/:id" component={DragonCard}/>

       <Route path="/home" render={(routerProps) => <Home {...routerProps} dragons={dragonsAtHome} selectDragon={this.sendDragonToWar} />}/>

       <Route path="/war" render={(routerProps) => <War {...routerProps}  dragons={dragonsAtWar} selectDragon={this.sendDragonHome}/>} />

      {/* <Route path="/retried" component={Retried}/> */}
 

        </Switch>
       

      </div>
      </BrowserRouter>
      

    )
  }
}

export default App;