import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export class Panda extends Component {

    render() {
        const { panda } = this.props
        return (
            <li>
                <button onClick={this.props.onSelect} >{panda.name}</button>
            </li>
        );
    }
}

