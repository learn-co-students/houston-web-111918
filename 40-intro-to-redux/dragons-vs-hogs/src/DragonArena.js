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

    attackBozar = () => {
        this.setState({
            bozar: this.state.bozar - 1
        })
    }

    healBozar = () => {
        this.setState({
            bozar: this.state.bozar + 1
        })
    }

    attackToothless = () => {
        this.setState({
            toothless: this.state.toothless - 1
        })
    }

    healToothless = () => {
        this.setState({
            toothless: this.state.toothless + 1
        })
    }

    attackSmaug = () => {
        this.setState({
            smaug: this.state.smaug - 1
        })
    }

    healSmaug = () => {
        this.setState({
            smaug: this.state.smaug + 1
        })
    }

    render() {
        const { bozar, smaug, toothless } = this.state
        return (
            <div style={{ width: '50%', float: 'left'}}>
                <h1>Dragons</h1>
                <DragonDashboard
                    attackBozar={this.attackBozar}
                    healBozar={this.healBozar}

                    attackToothless={this.attackToothless}
                    healToothless={this.healToothless}

                    attackSmaug={this.attackSmaug}
                    healSmaug={this.healSmaug}
                />
                <Bozar bozar={bozar}/>
                <Smaug smaug={smaug}/>
                <Toothless toothless={toothless}/>
            </div>
        );
    }
}