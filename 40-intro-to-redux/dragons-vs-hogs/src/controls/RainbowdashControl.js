import React, { Component } from 'react';
export class RainbowdashControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'right', borderStyle:'solid', borderColor: 'black'}}>
                <p>Rainbow</p>
                <button>Attack</button>
                <button>Heal</button>
            </div>
        );
    }
}