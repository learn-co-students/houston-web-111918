import React, { Component } from 'react';
import { CherubControl } from './controls/CherubControl';
import { RainbowdashControl } from './controls/RainbowdashControl';
import { GalaxyNoteControl } from './controls/GalaxyNoteControl';
export class HogDashboard extends Component {

    render() {
        return (
            <div style={{ position: 'fixed', right: '0px', bottom: '0px', backgroundColor: 'white'}}>
                <CherubControl attackCherub={this.props.attackCherub} healCherub={this.props.healCherub} />
                <RainbowdashControl attackRainbowdash={this.props.attackRainbowdash} healRainbowdash={this.props.healRainbowdash} />
                <GalaxyNoteControl attackGalaxyNote={this.props.attackGalaxyNote} healGalaxyNote={this.props.healGalaxyNote} />
            </div>
        );
    }
}