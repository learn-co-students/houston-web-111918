import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';

export class Smaug extends Component {
    render() {
        return (
            <div>
                <h3>Smaug</h3>
                <HealthBar />
                <img style={{ width:'100px'}} src="http://media.comicbook.com/uploads1/2015/08/cumbersmaug-147620.jpg" />
            </div>
        );
    }
}