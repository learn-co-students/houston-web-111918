import React, { Component } from 'react'
import { dragons }  from './data'
import {withRouter} from "react-router-dom"

class _DragonCard extends Component {
 allDragons= () => {
     this.props.history.push("/dragons")
 }

    render(){

        let displayDragon;

        if(this.props.dragon){
            displayDragon= this.props.dragon
        }
        else{
            displayDragon= dragons.find(dragon => dragon.id == this.props.match.params.id)
        }
        // console.log(this.props)
        return (
            <div>
            <div onClick={() => this.props.selectDragon(displayDragon.id)}>
                <h3>{displayDragon.name}</h3>
                <p>{displayDragon.description}</p>
                <img style={{ width: '100px'}} src={displayDragon.image}></img>
               
            </div>
             <button onClick={this.allDragons}>See All Dragons</button>
             </div>
        )
    }

}

export const DragonCard = withRouter(_DragonCard)