import React, { Component } from 'react';
export class ToothlessControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'left', borderStyle:'solid', borderColor: 'black'}}>
                <p>Toothless</p>
                <button onClick={this.props.attackToothless}>Attack</button>
                <button onClick={this.props.healToothless}>Heal</button>
            </div>
        );
    }
}