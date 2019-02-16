import React, { Component } from 'react';
import { connect } from 'react-redux'

class _Bozar extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'left', borderStyle:'solid', borderColor: 'black'}}>
                <p>Bozar</p>
                <button onClick={this.props.attack}>Attack</button>
                <button onClick={this.props.heal}>Heal</button>
            </div>
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         health: state.bozar
//     }
// } 

// Add the prop values you want to pull from state below:
const mapStateToProps = (state) => ({
    
})

// Add the prop methods you want to dispatch to state here:
const mapDispatchToProps = (dispatch) => ({
    attack: () => {
        dispatch({ type: 'ATTACK', selectedCharacter: 'bozar'  })
    },
    heal: () => {
        dispatch({ type: 'HEAL', selectedCharacter: 'bozar'  })
    }
})

export const BozarControl = connect(mapStateToProps, mapDispatchToProps)(_Bozar)