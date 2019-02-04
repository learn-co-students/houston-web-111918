import React, { Component } from 'react';
import { dragons }  from './data' // in home & war
import { DragonCard } from './DragonCard';

export class Dragons extends Component {
  state = {
      dragons: dragons
    }

  render() {
    return (
        <div style={{textAlign: "center"}}>
            <h2> All Dragons</h2>

            {this.state.dragons.map( dragon => (   
                     <DragonCard dragon={dragon} />
            ))}

        </div>
    )
  }
}

