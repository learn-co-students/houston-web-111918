import React, { Component } from 'react';
export class SmaugControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'left', borderStyle:'solid', borderColor: 'black'}}>
                <p>Smaug</p>
                <button onClick={this.props.attackSmaug}>Attack</button>
                <button onClick={this.props.healSmaug}>Heal</button>
            </div>
        );
    }
}