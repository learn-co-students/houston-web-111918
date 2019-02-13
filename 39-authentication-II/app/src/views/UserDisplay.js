import React, { Component } from 'react';
import { API_URL } from '../constants';
export class UserDisplay extends Component {

    state = {
        user: {}
    }

    componentDidMount(){
        fetch(`${API_URL}/users/${this.props.match.params.id}`,{
            headers:{
                Authorization: `BEARER ${this.props.token}`
            }
        })
            .then( res => res.json())
            .then( user => this.setState({ user }))
    }

    render() {
        const { name, bio } = this.state.user
        return (
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
            </div>
        );
    }
}