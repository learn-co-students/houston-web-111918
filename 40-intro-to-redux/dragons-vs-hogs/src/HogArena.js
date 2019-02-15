import React, { Component } from 'react';
import { HogDashboard } from './HogDashboard';
import { Cherub } from './characters/Cherub';
import { Rainbowdash } from './characters/Rainbowdash';
import { GalaxyNote } from './characters/GalaxyNote';
export class HogArena extends Component {
    render() {
        return (
            <div style={{ width: '50%', float: 'left', textAlign: 'right'}}>
                <h1>Hogs</h1>
                <HogDashboard />
                <Cherub/>
                <Rainbowdash/>
                <GalaxyNote/>
            </div>
        );
    }
}