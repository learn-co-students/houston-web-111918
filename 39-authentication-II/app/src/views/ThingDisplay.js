import React, { Component } from 'react';
import { API_URL } from '../constants'
import { server } from '../server';

export class ThingDisplay extends Component {
    
    state = {
        thing: {}
    }

    componentDidMount(){
        fetch(`${API_URL}/things/${this.props.match.params.id}`,{
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        })
            .then( res => res.json())
            .then( thing => this.setState({ thing }))
    }

    deleteThing = () => {
        server.delete(`${API_URL}/things/${this.props.match.params.id}`)
            .then( () => this.props.history.push('/things'))
    }

    render() {
        const { name, description } = this.state.thing
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <button onClick={() => this.props.history.push('/things')}>Back to all Things</button>
                
                { this.state.thing.user_id == this.props.current_user.id ? 
                    <button onClick={this.deleteThing}>Delete this Thing</button>
                        :
                    null
                }
            </div>
        );
    }
}