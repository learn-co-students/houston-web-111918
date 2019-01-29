import React, { Component } from 'react'

export class DragonCard extends Component {


    render(){
        return (
            <div onClick={(e) => this.props.selectDragon(this.props.id)}>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <img style={{ width: '100px'}} src={this.props.image}></img>
            </div>
        )
    }

}