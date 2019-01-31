import React, { Component } from 'react';
export const PetCard =  props => (
    <div className="four wide column ui card">
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Weight: {props.weight}</p>
        <button className="ui button primary">Adopt</button>
    </div>
)