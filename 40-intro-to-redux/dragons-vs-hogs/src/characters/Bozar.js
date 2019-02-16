import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';
import { connect } from 'react-redux'

class _Bozar extends Component {
    render() {
        return (
            <div>
                <h3>Bozar</h3>
                <HealthBar health={this.props.health}/>
                <img style={{ width:'100px'}} src="https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        health: state.bozar
    }
} 

const mapDispatchToProps = (dispatch) => {

}

// let connectBozar = connect(mapStateToProps, mapDispatchToProps)

// export const Bozar = connectBozar(_Bozar)

// OR:
export const Bozar =  connect(mapStateToProps, mapDispatchToProps)(_Bozar)