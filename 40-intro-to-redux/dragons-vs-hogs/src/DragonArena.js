import React, { Component } from 'react';
import { DragonDashboard } from './DragonDashboard';
import { Bozar } from './characters/Bozar';
import { Smaug } from './characters/Smaug';
import { Toothless } from './characters/Toothless';
export class DragonArena extends Component {

    state = {
        bozar: 10,
        toothless: 10,
        smaug: 10,
    }

    render() {
        return (
            <div style={{ width: '50%', float: 'left'}}>
                <h1>Dragons</h1>
                <DragonDashboard />
                <Bozar/>
                <Smaug/>
                <Toothless/>
            </div>
        );
    }
}