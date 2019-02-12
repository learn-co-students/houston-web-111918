import React, { Component } from 'react';
import { API_URL } from '../constants';
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
        fetch(`${API_URL}/users/`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then( res => res.json())
            .then( ({ id }) => this.props.history.push(`/things`))
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