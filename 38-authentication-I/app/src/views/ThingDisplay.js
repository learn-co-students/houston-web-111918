import React, { Component } from 'react';
import { API_URL } from '../constants'

export class ThingDisplay extends Component {
    
    state = {
        thing: {}
    }

    componentDidMount(){
        fetch(`${API_URL}/things/${this.props.match.params.id}`)
            .then( res => res.json())
            .then( thing => this.setState({ thing }))
    }

    deleteThing = () => {
        fetch(`${API_URL}/things/${this.props.match.params.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        })
            .then( () => this.props.history.push('/things'))
    }

    render() {
        const { name, description } = this.state.thing
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <button onClick={() => this.props.history.push('/things')}>Back to all Things</button>
                <button onClick={this.deleteThing}>Delete this Thing</button>
            </div>
        );
    }
}