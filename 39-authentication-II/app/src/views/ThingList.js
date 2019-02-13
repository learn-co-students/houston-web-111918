import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { API_URL } from '../constants';
export class ThingList extends Component {
    state = {
        things: []
    }

    componentDidMount(){
        fetch(`${API_URL}/things`,{
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        })
            .then( res => res.json())
            .then( things => this.setState({ things }))
    }

    render() {
      
        return (
            <div>
                <h1>Things</h1>
                <ul>
                    {this.state.things.map( ({ id, name }) => (
                        <li key={id} ><Link to={`/things/${id}`}>{name}</Link></li>
                    ))}    
                </ul>
                <button onClick={() => this.props.history.push(`/things/new`)}>
                    Create new Thing
                </button>
            </div>
        );
    }
}