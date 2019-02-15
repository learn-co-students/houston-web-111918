import React, { Component } from 'react';
export class BozarControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'left', borderStyle:'solid', borderColor: 'black'}}>
                <p>Bozar</p>
                <button>Attack</button>
                <button>Heal</button>
            </div>
        );
    }
}