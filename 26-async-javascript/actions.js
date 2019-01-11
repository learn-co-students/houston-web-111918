// Actions

const selectDog = function(currentDog){
    // Render the dog detail...
    selectedDog = currentDog
    selectedView = 'show-dog'
    render()
}

const updateSelectedDog = function(){
    selectedDog.name = dogNameInput.value
    selectedDog.breed = dogBreedInput.value
    selectedDog.image_url = dogImageInput.value
    fetch(`http://localhost:3000/dogs/${selectedDog.id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedDog)
    })
    render()
}

const deleteSelectedDog = function(){
    fetch(`http://localhost:3000/dogs/${selectedDog.id}`, {
        method: 'DELETE'
    })
        .then(function(){
            let index = dogs.indexOf(selectedDog)
            dogs.splice(index, 1)
            selectedDog = null
            selectedView = null
            render()
        })
}

const createNewDog = function(){
    fetch('http://localhost:3000/dogs/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: dogNameInput.value,
            breed: dogBreedInput.value,
            image_url: dogImageInput.value
        })
    })
        .then(function(response){
            return response.json()
        })
        .then(function(createdDog){
            selectedDog = createdDog
            selectedView = 'show-dog'
            dogs.push(selectedDog)
            render()
        })
}