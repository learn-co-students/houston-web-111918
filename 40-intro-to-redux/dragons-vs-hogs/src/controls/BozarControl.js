import React, { Component } from 'react';
export class BozarControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'left', borderStyle:'solid', borderColor: 'black'}}>
                <p>Bozar</p>
                <button onClick={this.props.attackBozar}>Attack</button>
                <button onClick={this.props.healBozar}>Heal</button>
            </div>
        );
    }
}