import React, { Component } from 'react';
import { DragonArena } from './DragonArena';
import { HogArena } from './HogArena';

class App extends Component {
  render() {
    return (
      <div>
        <DragonArena />
        <HogArena />
      </div>
    );
  }
}

export default App;
