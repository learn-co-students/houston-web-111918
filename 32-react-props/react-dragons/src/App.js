import React, { Component } from 'react';
import { dragons }  from './data'
import {DragonCard} from './DragonCard'

class App extends Component {
  render() {
    return (
      <div>
        {dragons.map((dragon, index) => (
            <DragonCard key={dragon.id} {...dragon} /> 
        ))}
      </div>
    );
  }
}

export default App;