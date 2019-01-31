import React, { Component } from 'react';
import { Header } from './presentational/Header'
import { PetsContainer } from './containers/PetsContainer'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <PetsContainer />
      </div>
    );
  }
}

export default App;
