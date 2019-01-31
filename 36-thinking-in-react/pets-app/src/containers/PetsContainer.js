import React, { Component } from 'react';
import { PetsList } from '../presentational/PetsList'
import { SearchForm } from '../presentational/SearchForm'

export class PetsContainer extends Component {

    state =  {
        pets: [],
        petSearch: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/pets')
            .then( res => res.json())
            .then( pets => {
                this.setState({ pets })
            })
    }

    // Same Thing: 
    // constructor(){
    //     super()
    //     this.state =  {
    //         pets: [],
    //         petSearch: ''
    //     }
    // }

    handleSearchChange = (petSearch) => {
        this.setState({ petSearch })
    }

    filteredPets = () => {
        return this.state.pets.filter( pet => {
            return pet.name.includes(this.state.petSearch)
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchForm petSearch={this.state.petSearch} onSearch={this.handleSearchChange} />
                <PetsList pets={this.filteredPets()}  />
            </div>
        );
    }
}