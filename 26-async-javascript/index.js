// Utils
let ce = function(tagName){
    return document.createElement(tagName)
}

// Variable Data
let dogs = []
let selectedDog = null;
let selectedView = false

fetch('http://localhost:3000/dogs')
	.then(function(response){
		return response.json()
	})
	.then(function(result){
        dogs = result
        render()
	})

// HTML Elements
let dogNameInput, dogBreedInput, dogImageInput, dogForm

// Renderers
const render = function(){
    document.body.innerHTML = '' 
    renderDogList()
    switch(selectedView){
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

let renderDogList = function(){
    
    let dogList = ce('ol')
    dogList.style.width = '20%'
    dogList.style.float = 'left'

    let newDogButton = ce('button')
    newDogButton.innerText = 'New Dog'
    newDogButton.addEventListener('click', function(){
       selectedView = 'new-dog'
       render()
    })

    document.body.append( 
        dogList,
        newDogButton
    )
    dogs.forEach(function(currentDog, index){
        let listItem = document.createElement('li')
        listItem.id = `dog-${index}`
        listItem.className = 'dog'
        listItem.innerText = currentDog.name
    
        listItem.addEventListener('click', function(){
            selectDog(currentDog)
        })
        dogList.append(listItem)
    })
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