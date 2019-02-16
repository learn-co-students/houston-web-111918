import React, { Component } from 'react';
import { HogDashboard } from './HogDashboard';
import { Cherub } from './characters/Cherub';
import { Rainbowdash } from './characters/Rainbowdash';
import { GalaxyNote } from './characters/GalaxyNote';
import { Bozar } from './characters/Bozar';
export class HogArena extends Component {

    state = {
        cherub: 10,
        rainbowdash: 10,
        galaxyNote: 10
    }

    attackCherub = () => {
        this.setState({
            cherub: this.state.cherub - 1
        })
    }

    healCherub = () => {
        this.setState({
            cherub: this.state.cherub + 1
        })
    }

    attackRainbowdash = () => {
        this.setState({
            rainbowdash: this.state.rainbowdash - 1
        })
    }

    healRainbowdash = () => {
        this.setState({
            rainbowdash: this.state.rainbowdash + 1
        })
    }

    attackGalaxyNote = () => {
        this.setState({
            galaxyNote: this.state.galaxyNote - 1
        })
    }

    healGalaxyNote = () => {
        this.setState({
            galaxyNote: this.state.galaxyNote + 1
        })
    }

    render() {
        const { cherub, rainbowdash, galaxyNote } = this.state
        return (
            <div style={{ width: '50%', float: 'left', textAlign: 'right'}}>
                <h1>Hogs</h1>
                <HogDashboard 

                    attackCherub={this.attackCherub}
                    healCherub={this.healCherub}

                    attackRainbowdash={this.attackRainbowdash}
                    healRainbowdash={this.healRainbowdash}

                    attackGalaxyNote={this.attackGalaxyNote}
                    healGalaxyNote={this.healGalaxyNote}
                
                />
                <Cherub cherub={cherub}/>
                <Rainbowdash rainbowdash={rainbowdash}/>
                <GalaxyNote galaxyNote={galaxyNote}/>
                <Bozar />
            </div>
        );
    }
}