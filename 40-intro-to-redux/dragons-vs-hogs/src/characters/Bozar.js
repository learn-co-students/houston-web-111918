import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';
export class Bozar extends Component {
    render() {
        return (
            <div>
                <h3>Bozar</h3>
                <HealthBar />
                <img style={{ width:'100px'}} src="https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg" />
            </div>
        );
    }
}