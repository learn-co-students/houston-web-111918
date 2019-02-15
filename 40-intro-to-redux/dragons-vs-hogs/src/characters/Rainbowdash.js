import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';

export class Rainbowdash extends Component {
    render() {
        return (
            <div style={{ textAlign: 'right'}}>
                <h3>Rainbowdash</h3>
                <HealthBar />
                <img style={{ width:'100px'}} src="https://res.cloudinary.com/dabeyvbyw/image/upload/v1544712626/rainbowdash.jpg" />
            </div>
        );
    }
}