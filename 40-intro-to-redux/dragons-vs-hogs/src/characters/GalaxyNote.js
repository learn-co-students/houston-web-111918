import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';

export class GalaxyNote extends Component {
    render() {
        return (
            <div style={{ textAlign: 'right'}}>
                <h3>GalaxyNote</h3>
                <HealthBar health={this.props.galaxyNote} />
                <img style={{ width:'100px'}} src="https://res.cloudinary.com/dabeyvbyw/image/upload/v1544712623/galaxy_note.jpg" />
            </div>
        );
    }
}