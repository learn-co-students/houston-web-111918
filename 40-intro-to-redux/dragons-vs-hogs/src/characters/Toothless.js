import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';

export class Toothless extends Component {
    render() {
        return (
            <div>
                <h3>Toothless</h3>
                <HealthBar />
                <img style={{ width:'100px'}} src="https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg" />
            </div>
        );
    }
}