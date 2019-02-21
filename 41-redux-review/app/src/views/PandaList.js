import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panda } from './PandaCard';

class _PandaList extends Component {

    componentDidMount(){
        this.props.fetchPandas()
    }

    render() {
        console.log(this.props.pandas)
        return (
            <ul>
                {this.props.pandas.map( panda => (
                    <Panda panda={panda} onSelect={() => this.props.selectPanda(panda)} />
                ))}
            </ul>
        );
    }
}

// Add the prop values you want to pull from state below:
const mapStateToProps = (state) => ({
    pandas: state.pandas
})

// Add the prop methods you want to dispatch to state here:
const mapDispatchToProps = (dispatch) => ({
    fetchPandas: () => dispatch({ type: 'FETCH_PANDAS'  }),
    selectPanda: (panda) => dispatch({ type: 'SELECT_PANDA', payload: panda})
})

export const PandaList = connect(mapStateToProps, mapDispatchToProps)(_PandaList)