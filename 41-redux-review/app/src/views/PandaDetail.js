import React, { Component } from 'react';
import { connect } from 'react-redux'

class _PandaDetail extends Component {
    render() {
        const { name, fluff_percentage, img_url } = this.props.panda
        return (
            <div>
                <h1>{name}</h1>
                <i>{fluff_percentage}</i>
                <img style={{ width: '100%'}} src={img_url}></img>
            </div>
        );
    }
}

// Add the prop values you want to pull from state below:
const mapStateToProps = (state) => ({
    panda: state.selectedPanda
})

// Add the prop methods you want to dispatch to state here:
const mapDispatchToProps = (dispatch) => ({
    
})

export const PandaDetail = connect(mapStateToProps, mapDispatchToProps)(_PandaDetail)