import React, { Component } from 'react';
import { SmaugControl } from './controls/SmaugControl';
import { ToothlessControl } from './controls/ToothlessControl';
import { BozarControl } from './controls/BozarControl';
export class DragonDashboard extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', left: '0px', bottom: '0px', backgroundColor: 'white'}}>
                <SmaugControl />
                <ToothlessControl />
                <BozarControl />
            </div>
        );
    }
}