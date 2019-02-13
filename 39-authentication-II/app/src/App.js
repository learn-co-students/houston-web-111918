import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import { UserList } from './views/UserList';
import { UserDisplay } from './views/UserDisplay';
import { ThingList } from './views/ThingList';
import { ThingDisplay } from './views/ThingDisplay';
import { Login } from './views/Login';
import { ThingForm } from './views/ThingForm';
import { SignUp } from './views/SignUp';

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
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" component={props => <UserDisplay {...props} token={this.state.token} />} />
          <Route path="/users" component={UserList} />
          <Route path="/things/new" render={ props => <ThingForm {...props} token={this.state.token}/>} />
          <Route path="/things/:id" render={ props => <ThingDisplay {...props} token={this.state.token} current_user={this.state.user}/>} />
          <Route path="/things" render={ props => <ThingList {...props} token={this.state.token} />} />
          <Route path="/login" render={props => <Login {...props} onLogin={this.setUserInState}/>}/>
          <Route path="/signup" render={ props => <SignUp {...props} onSignUp={this.setUserInState} />}/>
          <Route path="/" render={ () => <Redirect to="/login" />}/>
        </Switch>
      </BrowserRouter>
      </div>

    );
  }
}

export default App;
