import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      h: 0,
      m: 0,
      s: 0,
      count: 0
    }
    setInterval( () => {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      // Never do this:
      // this.state.h = h
      // this.state.m = m
      // this.state.s = s
      this.setState({
        h: h,
        m: m,
        s:s
      })
    }, 500)
  }

  render() {
    let increment = () => {
      this.setState({ count: this.state.count + 1})
    }
    return (
      <div>
        <h1>Hello it is {this.state.h}:{this.state.m}:{this.state.s}</h1>
        <h2 onClick={increment} >Count: {this.state.count}</h2>
      </div>
    );
  }
}

export default App;

function checkTime(i) {
  if (i < 10) {
      i = "0" + i
  };  // add zero in front of numbers < 10
  return i;
}
