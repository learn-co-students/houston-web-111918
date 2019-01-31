import React, { Component } from 'react';
import { PetCard } from './PetCard';

export const PetsList = (props) => (
    <div className="ui container" style={{ marginTop: '20px'}}>
        <div className='ui grid'>
            {props.pets.map( pet => (
                <PetCard key={pet.id} {...pet} />
            ))}
        </div>
    </div>
);
