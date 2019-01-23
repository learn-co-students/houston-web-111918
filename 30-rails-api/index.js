// Utils
let ce = function(tagName){
    return document.createElement(tagName)
}

// Variable Data
let owners = []
let selectedOwner = null;
let dogs = []
let selectedDog = null;
let selectedView = false

fetch('http://localhost:3000/api/v1/owners')
	.then(function(response){
		return response.json()
	})
	.then(function(result){
        owners = result
        render()
	})

// HTML Elements
let dogNameInput, dogBreedInput, dogImageInput, dogForms

// Renderers
const render = function(){
    document.body.innerHTML = '' 
    renderOwnerList()
    switch(selectedView){
        case 'show-owner':
            renderOwnerDetail()
        break;
        case 'show-dog':
            renderDogDetail()
        break
        case 'edit-dog':
            renderEditDogForm()
        break;
        case 'new-dog':
            renderNewDogForm()
        break
    } 
}

let renderOwnerList = function(){
    let ownerList = ce('ol')
    ownerList.style.width = '20%'
    ownerList.style.float = 'left'

    document.body.append( 
        ownerList
    )
    owners.forEach(function(currentOwner, index){
        let listItem = document.createElement('li')
        listItem.innerText = currentOwner.name
        listItem.addEventListener('click', function(){
            selectOwner(currentOwner)
        })
        ownerList.append(listItem)
    })
}

let renderOwnerDetail = function(){
    let container = ce('div')

    let ownerNameHeader = ce('h1')
    ownerNameHeader.innerText = selectedOwner.name

    container.append(
        ownerNameHeader,
        renderDogList(selectedOwner.dogs)
    )

    document.body.append(container)
}

let renderDogList = function(dogs){
    let container = ce('div')

    let dogList = ce('ol')
    dogList.style.width = '20%'
    dogList.style.float = 'left'

    container.append( 
        dogList
    )
    dogs.forEach(function(currentDog, index){
        let listItem = document.createElement('li')
        listItem.innerText = currentDog.name
        listItem.addEventListener('click', function(){
            selectDog(currentDog)
        })
        dogList.append(listItem)
    })

    return container
}

let renderDogDetail = function(){
    let dogDetail = document.createElement('div')
    dogDetail.style.width = '60%'
    dogDetail.style.float = 'left'
    document.body.append( dogDetail )
    if(selectedDog){
        let dogDescription = document.createElement('p')
        dogDescription.innerText = `${selectedDog.name}: ${selectedDog.breed}`

        let dogImage = document.createElement('img')
        dogImage.src = selectedDog.image_url
        dogImage.style.maxWidth = '100%'

        let editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        editButton.addEventListener('click', function(){
            selectedView = 'edit-dog'
            render()
        })

        dogDetail.innerHTML = ''
        dogDetail.append(
            dogDescription, 
            dogImage,
            document.createElement('br'),
            editButton
        )
    }
}

let renderEditDogForm = function(){
    
    // Render Common Inputs
    renderDogFormInputs()
    
    // Render form specific buttons
    let submitButton = document.createElement('button')
    submitButton.innerText = 'Save'
    submitButton.addEventListener('click', function(e){
        e.preventDefault()
        updateSelectedDog()
    })

    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', function(e){
        e.preventDefault()
        let answer = window.confirm('Are you sure?') 
        if(answer){
            deleteSelectedDog()
        }
    })

    dogForm.append(
        deleteButton,
        submitButton
    )
}

let renderNewDogForm = function(){

    renderDogFormInputs()

    let submitButton = document.createElement('button')
    submitButton.innerText = 'Create'
    submitButton.addEventListener('click', function(e){
        e.preventDefault()
        createNewDog()
    })

    dogForm.append(
        submitButton
    )
}

let renderDogFormInputs = function(){
    dogForm = document.createElement('form')
    dogForm.style.width = '60%'
    dogForm.style.float = 'left'

    document.body.append( dogForm )

    let dogNameLabel = ce('label')
    dogNameLabel.innerText = 'Name'
    
    dogNameInput = ce('input')
    if(selectedDog){ 
        dogNameInput.value = selectedDog.name
    }

    let dogBreedLabel = ce('label')
    dogBreedLabel.innerText = 'Breed'
    
    dogBreedInput = ce('input')
    if(selectedDog){ 
        dogBreedInput.value = selectedDog.breed
    }

    let dogImageLabel = ce('label')
    dogImageLabel.innerText = 'Image URL'
    
    dogImageInput = ce('input')
    if(selectedDog){ 
        dogImageInput.value = selectedDog.image_url
    }

    dogForm.append(
        dogNameLabel,
        dogNameInput,
        document.createElement('br'),
        dogBreedLabel,
        dogBreedInput,
        document.createElement('br'),
        dogImageLabel,
        dogImageInput
    )
}

render()