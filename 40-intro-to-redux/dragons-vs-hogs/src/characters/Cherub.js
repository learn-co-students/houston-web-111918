import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';

export class Cherub extends Component {
    render() {
        return (
            <div style={{ textAlign: 'right'}}>
                <h3>Cherub</h3>
                <HealthBar />
                <img style={{ width:'100px'}} src="https://res.cloudinary.com/dabeyvbyw/image/upload/v1544712623/cherub.png" />
            </div>
        );
    }
}