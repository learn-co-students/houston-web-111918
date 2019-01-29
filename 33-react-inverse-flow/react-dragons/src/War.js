import React, { Component } from 'react';
import { DragonCard } from './DragonCard'
export class War extends Component {
    render() {
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                {this.props.dragons.map( dragon => (
                    <DragonCard {...dragon} selectDragon={this.props.selectDragon} />
                ))}
            </div>
        );
    }
}