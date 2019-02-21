import React, { Component } from 'react';
import { API_URL } from '../constants';
import { server } from '../server';
export class SignUp extends Component {

    state = {
        name: '',
        username: '',
        password: '',
        bio: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    createUser = () => {
        server.post(`${API_URL}/users/`, JSON.stringify(this.state))
            .then( user => {
                this.props.onSignUp(user.token, user)
            })
            //.then( ({ id }) => this.props.history.push(`/login`))
    }

    render() {
        const { name, bio, username, password } = this.state
        return (
            <div>
                <h1>Sign Up!</h1>
                <div>
                    <label>Username</label>
                    <input onChange={this.handleChange} value={username} name="username" type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={this.handleChange} value={password} name="password" type="text" />
                </div>
                <div>
                    <label>Name</label>
                    <input onChange={this.handleChange} value={name} name="name" type="text" />
                </div>
                <div>
                    <label>Bio</label>
                    <input onChange={this.handleChange} value={bio} name="bio" type="text" />
                </div>
                <button onClick={this.createUser}>Create</button>
            </div>
        );
    }

}