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
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" component={UserDisplay} />
          <Route path="/users" component={UserList} />
          <Route path="/things/new" component={ThingForm} />
          <Route path="/things/:id" component={ThingDisplay} />
          <Route path="/things" component={ThingList} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" render={ () => <Redirect to="/login" />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
