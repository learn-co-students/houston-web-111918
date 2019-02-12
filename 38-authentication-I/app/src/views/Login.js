import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

    signIn(){
        this.props.history.push('/things')
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
                <button onClick={this.signIn}>Sign In</button>
                <Link to="signup" >or, Sign Up</Link>
            </div>
        );
    }

}