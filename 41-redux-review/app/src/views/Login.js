import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { API_URL } from '../constants';
export class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    logIn = () => {
       fetch(`${API_URL}/auth`,{
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               username: this.state.username,
               password: this.state.password
           })
       })
        .then(res => res.json())
        .then( (user) => {
            this.props.onLogin(user.token, user)
            this.props.history.push(`/users/${user.id}`)
        } )
    }

    render() {
        
        const { username, password } = this.state
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <label>Username</label>
                    <input onChange={this.handleChange} value={username} name="username" type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={this.handleChange} value={password} name="password" type="text" />
                </div>
                <button onClick={this.logIn}>Sign In</button>
                <Link to="signup" >or, Sign Up</Link>
            </div>
        );
    }

}