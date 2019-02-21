import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import { PandaList } from './views/PandaList'
import { PandaDetail } from './views/PandaDetail'
import { history } from './history'

class App extends Component {

  state = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || {}
  }

  setUserInState = (token, user) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({ token, user })
  }

  render() {
    const { name } = this.state.user
    return (
      <div>
      <span style={{float:'right'}}>
        {name}
      </span>
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={PandaList} />
            <Route path="/pandas/:id" component={PandaDetail} />
        </Switch>
      </Router>
      </div>

    );
  }
}

export default App;
