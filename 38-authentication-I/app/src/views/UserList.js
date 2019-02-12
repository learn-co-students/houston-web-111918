import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { API_URL } from '../constants';

export class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        fetch(`${API_URL}/users`)
            .then( res => res.json())
            .then( users => this.setState({ users }))
    }

    render() {
      
        return (
            <ul>
                {this.state.users.map(({ id, name }) => (
                    <li key={id}><Link to={`/users/${id}`}>{name}</Link></li>
                ))}    
            </ul>
        );
    }
}