import React, { Component } from 'react';
import { DragonCard } from './DragonCard';
import {Link} from "react-router-dom"

export class War extends Component {
    render() {
        return (
            <div style={{float:'left', width:'100%', backgroundColor:'#f98181', textAlign:'center'}}>
                <h1>War</h1>
                {this.props.dragons.map( dragon => (
                    <DragonCard dragon={dragon} selectDragon={this.props.selectDragon} />
                ))}
                 <Link to="/home">
                   <button>Go To Home</button>
                    
                   </Link>
            </div>
        );
    }
}
