import React, { Component } from 'react';
export class GalaxyNoteControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'right', borderStyle:'solid', borderColor: 'black'}}>
                <p>Galaxy</p>
                <button>Attack</button>
                <button>Heal</button>
            </div>
        );
    }
}