import React, { Component } from 'react';
export class HealthBar extends Component {
    render() {
        let health = []
        for(let i = 0; i < this.props.health; i++){
            health.push(<img style={{width: '10px'}} src="https://www.clipartmax.com/png/middle/209-2090033_lego-brick-1-zelda-heart-8-bit.png"></img>)
        }
        return (
            <div>
                {health}
            </div>
        );
    }
}