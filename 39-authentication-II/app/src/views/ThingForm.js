import React, { Component } from 'react';
import { API_URL } from '../constants';
export class ThingForm extends Component {

    state = {
        name: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    createThing = () => {
        fetch(`${API_URL}/things/`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${this.props.token}`
            },
            body: JSON.stringify(this.state)
        })
            .then( res => res.json())
            .then( ({ id }) => this.props.history.push(`/things/${id}`))
    }

    render() {
        const { name, description } = this.state
        return (
            <div>
                <h1>New Thing</h1>
                <div>
                    <label>Name</label>
                    <input onChange={this.handleChange} value={name} name="name" type="text" />
                </div>
                <div>
                    <label>Description</label>
                    <input onChange={this.handleChange} value={description} name="description" type="text" />
                </div>
                <button onClick={this.createThing}>Create</button>
            </div>
        );
    }

}